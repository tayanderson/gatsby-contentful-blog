const config = require('./src/utils/siteConfig')
const path = require(`path`)
const _ = require('lodash')


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPost(
          sort: { fields: [publishDate], order: DESC }
          limit: 10000
        ) {
          edges {
            node {
              slug
              publishDate
              tags {
                title
                id
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allContentfulPost.edges
      const postsPerFirstPage = config.postsPerHomePage
      const postsPerPage = config.postsPerPage
      const numPages = Math.ceil(
        posts.slice(postsPerFirstPage).length / postsPerPage
      )

      // Create main home page
      createPage({
        path: `/`,
        component: path.resolve(`./src/templates/index.js`),
        context: {
          limit: postsPerFirstPage,
          skip: 0,
          numPages: numPages + 1,
          currentPage: 1,
        },
      })

      // Create recipes index page
      createPage({
        path: `/recipes/`,
        component: path.resolve(`./src/templates/recipes.js`),
        context: {
          skip: 0,
          numPages: numPages + 1,
          currentPage: 1,
        },
      })


      // Create articles index page
      createPage({
        path: `/articles/`,
        component: path.resolve(`./src/templates/articles.js`),
        context: {
          skip: 0,
          numPages: numPages + 1,
          currentPage: 1,
        },
      })

      const sortByDateDescending = (a, b) => {
       const aPubDateInMS = (new Date(a.publishedOn)).getTime();
       const bPubDateInMS = (new Date(b.publishedOn)).getTime();

       if (aPubDateInMS > bPubDateInMS) {
         return 1
       }

       if (aPubDateInMS < bPubDateInMS) {
         return -1
       }

       return 0
     }


      const getRelatedPosts = (currentPost, posts) => {
          const MINIMUM_CATEGORIES_IN_COMMON = 1

          const hasAtLeastOneCategoryInCommon = ({ node }) => {
            // stop working if we're looking at the same article
            if (currentPost.id === node.id) {
              return false
            }
            const commonCategories = _.intersectionBy(currentPost.tags, node.tags,"slug")
            console.log(commonCategories);
            return commonCategories.length >= MINIMUM_CATEGORIES_IN_COMMON
          }

          const filteredResults = posts.filter(hasAtLeastOneCategoryInCommon)
          console.log(filteredResults);
          if (filteredResults.length > 5) {
            return filteredResults.sort(sortByDateDescending).slice(0, 5)
          }
          return filteredResults
        }

      // Create each individual post
      posts.forEach((edge, i) => {
        const prev = i === 0 ? null : posts[i - 1].node
        const next = i === posts.length - 1 ? null : posts[i + 1].node
        createPage({
          path: `${edge.node.slug}/`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: edge.node.slug,
            prev,
            next,
            relatedPosts: getRelatedPosts(edge.node, result.data.allContentfulPost.edges),
          },
        })
      })
      resolve()
    })
  })

  const loadTags = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulTag {
          edges {
            node {
              slug
              post {
                id
              }
            }
          }
        }
      }
    `).then(result => {
      const tags = result.data.allContentfulTag.edges
      const postsPerPage = config.postsPerPage

      // Create tag pages with pagination if needed
      tags.map(({ node }) => {
        const totalPosts = node.post !== null ? node.post.length : 0
        const numPages = Math.ceil(totalPosts / postsPerPage)
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path:
              i === 0 ? `/tag/${node.slug}/` : `/tag/${node.slug}/${i + 1}/`,
            component: path.resolve(`./src/templates/tag.js`),
            context: {
              slug: node.slug,
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages: numPages,
              currentPage: i + 1,
            },
          })
        })
      })
      resolve()
    })
  })

  const loadPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const pages = result.data.allContentfulPage.edges
      pages.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  return Promise.all([loadPosts, loadTags, loadPages])
}
