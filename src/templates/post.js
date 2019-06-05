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
import styled from 'styled-components'
import RelatedPosts from '../components/RelatedPosts'
import { DiscussionEmbed } from 'disqus-react'


const DisqusWrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  padding-top: 3rem;
`

const PostTemplate = ({ data, pageContext }) => {
  const {
    title,
    slug,
    heroImage,
    body,
    publishDate,
    tags,
    metaDescription,
  } = data.contentfulPost
  const postNode = data.contentfulPost

  const previous = pageContext.prev
  const next = pageContext.next

  const disqusConfig = {
   shortname: 'dash-of-shambles',
   config: { identifier: slug, title },
  }


  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />

      <section className="section">
        <PostDetails
            title={title}
            date={publishDate}
            timeToRead={body.childMarkdownRemark.timeToRead}
            tags={tags}
            description={metaDescription}
          />
      </section>

      <Hero image={heroImage} height={'80vh'} />

      <Container>
        <PageBody className="content" body={body} />
        <PostLinks previous={previous} next={next} />
        <DisqusWrapper>
          <DiscussionEmbed {...disqusConfig} />
        </DisqusWrapper>
      </Container>
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
          ...GatsbyContentfulFluid_withWebp
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default PostTemplate
