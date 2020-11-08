import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import SEO from '../components/SEO'

const Page2ColumnsTemplate = ({ data }) => {
  const { title, slug, column1, column2 } = data.contentfulPage2Columns
  const pageNode = data.contentfulPage2Columns

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={pageNode} pageSEO />

      <Container>
        <PageTitle>{title}</PageTitle>
        <div className="my-0 pg-body text-lg flex">
          <div
            className="w-full md:w-1/2 mr-20"
            dangerouslySetInnerHTML={{ __html: column1.childMarkdownRemark.html }}
          />
          <div
            className="w-full md:w-1/2"
            dangerouslySetInnerHTML={{ __html: column2.childMarkdownRemark.html }}
          />
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage2Columns(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      column1 {
        childMarkdownRemark {
          html
        }
      }
      column2 {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`

export default Page2ColumnsTemplate
