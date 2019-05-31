import * as PropTypes from "prop-types"
import chunk from "lodash/chunk"
import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import config from '../utils/siteConfig'
import Hero from '../components/Hero2'

// This would normally be in a Redux store or some other global data store.
if (typeof window !== `undefined`) {
  window.postsToShow = 6
}

class Index extends React.Component {

  constructor() {
    super()
    let postsToShow = 6
    if (typeof window !== `undefined`) {
      postsToShow = window.postsToShow
    }

    this.state = {
      showingMore: postsToShow > 6,
      postsToShow,
    }
  }

  update() {
    const distanceToBottom =
      document.documentElement.offsetHeight -
      (window.scrollY + window.innerHeight)
    if (this.state.showingMore && distanceToBottom < 100) {
      this.setState({ postsToShow: this.state.postsToShow + 6 })
    }
    this.ticking = false
  }

  handleScroll = () => {
    if (!this.ticking) {
      this.ticking = true
      requestAnimationFrame(() => this.update())
    }
  }

  componentDidMount() {
    window.addEventListener(`scroll`, this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener(`scroll`, this.handleScroll)
    window.postsToShow = this.state.postsToShow
  }

  render() {
    const { pageContext, data } = this.props;
    const posts = data.allContentfulPost.edges
    const featuredPost = posts[0].node
    const { currentPage } = pageContext
    const isFirstPage = currentPage === 1

    return (
      <Layout>
        <SEO />
        {!isFirstPage && (
          <Helmet>
            <title>{`${config.siteTitle} - Page ${currentPage}`}</title>
          </Helmet>
        )}
        <Hero title={featuredPost.title} image={featuredPost.heroImage} height={'80vh'} date={featuredPost.publishDate} {...featuredPost} />

        <Container>
            {chunk(posts.slice(0, this.state.postsToShow), 3).map((chunk, i) => (
            <CardList key={`chunk-${i}`}>
              {chunk.map(({node: post }) => (
                <Card key={post.id} {...post} />
              ))}
            </CardList>
            ))}
            {!this.state.showingMore && (
              <a
                data-testid="load-more"
                onClick={() => {
                  this.setState({
                    postsToShow: this.state.postsToShow + 6,
                    showingMore: true,
                  })
                }}
              >
                Load More
              </a>
            )}
        </Container>
      </Layout>
    )
  }
}

export default Index

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
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
          metaDescription {
            internal {
              content
            }
          }
          body {
            childMarkdownRemark {
              timeToRead
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
  }
`
