import React from 'react'
import { Link, graphql } from 'gatsby'
import orderBy from 'lodash/orderBy'
import Helmet from 'react-helmet'
import moment from 'moment'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import PageTitle from '../components/PageTitle'
import Pagination from '../components/Pagination'
import Container from '../components/Container'
import Img from 'gatsby-image'
import Masonry from 'react-masonry-css'

const TagTemplate = ({ data, pageContext }) => {
  const posts = orderBy(
    data.contentfulTag.post,
    // eslint-disable-next-line
    [object => new moment(object.publishDateISO)],
    ['desc']
  )

  const breakpointCols = {
    default: 3,
    1100: 2,
    700: 1,
    500: 1
  };

  const { title, slug } = data.contentfulTag
  const numberOfPosts = posts.length
  const skip = pageContext.skip
  const limit = pageContext.limit
  const currentPage = pageContext.currentPage
  const isFirstPage = currentPage === 1

  return (
    <Layout>
      {isFirstPage ? (
        <Helmet>
          <title>{`Tag: ${title} - ${config.siteTitle}`}</title>
          <meta
            property="og:title"
            content={`Tag: ${title} - ${config.siteTitle}`}
          />
          <meta property="og:url" content={`${config.siteUrl}/tag/${slug}/`} />
        </Helmet>
      ) : (
        <Helmet>
          <title>{`Tag: ${title} - Page ${currentPage} - ${
            config.siteTitle
          }`}</title>
          <meta
            property="og:title"
            content={`Tag: ${title} - Page ${currentPage} - ${
              config.siteTitle
            }`}
          />
          <meta property="og:url" content={`${config.siteUrl}/tag/${slug}/`} />
        </Helmet>
      )}

      <Container>
        <PageTitle small>
          {title}
        </PageTitle>

        <Masonry
          breakpointCols={breakpointCols}
          className="flex -ml-8 w-auto"
          columnClassName="pl-8">
          {posts.slice(skip, limit * currentPage).map(post => (
            <div className="mb-12 masonry-grid-item">
              <Link to={`/${post.slug}/`}>
                <Img
                  fluid={post.heroImage.fluid}
                />
              </Link>
              <Link to={`/${post.slug}/`} className="hover:text-primary hover:underline">
                <h4 className="font-heading text-black text-2xl font-semibold mt-6 mb-5">{post.title}</h4>
              </Link>
              <p className="font-body">{post.body.childMarkdownRemark.excerpt}</p>
            </div>
          ))}
        </Masonry>
      </Container>
      <Pagination context={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulTag(slug: { eq: $slug }) {
      title
      id
      slug
      post {
        id
        title
        slug
        metaDescription {
          internal {
            content
          }
          metaDescription
        }
        publishDate(formatString: "MMMM DD, YYYY")
        publishDateISO: publishDate(formatString: "YYYY-MM-DD")
        heroImage {
          title
          fluid(maxWidth: 1800) {
            ...GatsbyContentfulFluid_withWebp
          }
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
`

export default TagTemplate
