import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
import FeaturedHero from '../components/FeaturedHero1'
import MasonryGrid from '../components/MasonryGrid'
import InstaGrid from '../components/InstaGrid'


const Index = ({ data, pageContext }) => {
  const posts = data.cocktails.edges
  const featuredPost = data.all.edges[0].node
  const articles = data.articles.edges
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1
  const instaPosts = data.insta.edges

  const breakpointCols = {
    default: 3,
    1100: 2,
    700: 1,
    500: 1
  };

  return (
    <Layout>
      <SEO />
      {!isFirstPage && (
        <Helmet>
          <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
        </Helmet>
      )}

      <FeaturedHero title={featuredPost.title} image={featuredPost.heroImage} {...featuredPost} />
      <Container>
          <h2 className="font-heading text-3xl font-semibold mt-8 mb-6">Lastest Cocktails</h2>
          <MasonryGrid posts={posts} />
          {/*<Link to="/cocktails" className="font-body font-semibold text-center lowercase underline text-2xl block hover:text-primary">View More</Link>*/}
      </Container>
      <div className="bg-gray-100">
        <Container>
          <h2 className="font-heading text-3xl font-semibold mt-12 mb-6">Homebartending Basics</h2>
          <MasonryGrid posts={articles} />
          {/*<Link to="/articles" className="font-body font-semibold text-center lowercase underline text-2xl block hover:text-primary">View More</Link>*/}
        </Container>
      </div>
      <Container>
        <h2 className="font-heading text-3xl font-semibold mt-12 mb-6"><a href="https://www.instagram.com/thedrinkdesigner/" className="hover:text-primary">On the &apos;Gram</a></h2>
        <InstaGrid posts={instaPosts} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    cocktails: allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
      filter: {postType: {eq: "recipe"}}
      limit: 6
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          metaDescription {
            internal {
              content
            }
            metaDescription
          }
          body {
            childMarkdownRemark {
              html
              excerpt
            }
          }
        }
      }
    }
    all: allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
      limit: 1
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          metaDescription {
            internal {
              content
            }
            metaDescription
          }
          body {
            childMarkdownRemark {
              html
              excerpt
            }
          }
        }
      }
    }
    articles: allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
      filter: {postType: {eq: "article"}}
      limit: 3
    ) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          metaDescription {
            internal {
              content
            }
            metaDescription
          }
          body {
            childMarkdownRemark {
              html
              excerpt
            }
          }
        }
      }
    }
    insta:allInstagramContent(
      limit: 6
    ) {
      edges {
        node {
          localImage {
            childImageSharp {
              fluid (maxWidth:600){
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`

export default Index
