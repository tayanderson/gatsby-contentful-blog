import React from 'react'
import * as PropTypes from 'prop-types'
import Link from 'gatsby-link'

const RelatedPosts = ({ posts }) => (
  <section className="sidebar-section">
    <h2 className="section-title separator-below">Read next</h2>
    <section className="section-content">
      <p>Here are a couple of related posts you will enjoy reading.</p>
      {/* <ul> */}
      {posts.map(post => (
        <p key={post.id || post.node.id}>
          <Link
            className="custom-link"
            to={`${post.slug || post.node.slug}`}
          >
            {post.title || post.node.title}
          </Link>
        </p>
      ))}
      {/* </ul> */}
    </section>
  </section>
)

export default RelatedPosts
