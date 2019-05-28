import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import PostLinks from '../components/PostLinks'
import PostDetails from '../components/PostDetails'
import SEO from '../components/SEO'

const PostTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
    heroImage,
    body,
    publishDate,
    tags,
  } = data.contentfulPost
  const postNode = data.contentfulPost

  const previous = pageContext.prev
  const next = pageContext.next

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />

      <Container>
      <PostDetails
          title={title}
          date={publishDate}
          timeToRead={body.childMarkdownRemark.timeToRead}
          tags={tags}
        />

      </Container>

      <Hero image={heroImage} height={'80vh'} />

      <Container>        
        <PageBody body={body} />
      </Container>
      <PostLinks previous={previous} next={next} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }
      heroImage {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
      body {
        childMarkdownRemark {
          timeToRead
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default PostTemplate
