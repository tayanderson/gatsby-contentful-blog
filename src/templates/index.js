import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
import FeaturedHero from '../components/FeaturedHero'
import MasonryGrid from '../components/MasonryGrid'

const Index = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const featuredPost = posts[0].node
  const { currentPage } = pageContext
  const isFirstPage = currentPage === 1

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

      <FeaturedHero title={featuredPost.title} image={featuredPost.heroImage} height={'80vh'} {...featuredPost} />

      <Container>
          <MasonryGrid posts={posts} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }
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
            }
          }
        }
      }
    }
  }
`

export default Index
