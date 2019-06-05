import React from 'react'
import styled from 'styled-components'
import Masonry from 'react-masonry-css'
import Img from 'gatsby-image'
import {Link} from 'gatsby'


const MasonryGrid = ({posts}) => {
  const breakpointCols = {
    default: 3,
    1100: 2,
    700: 1,
    500: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointCols}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column">
      {posts.map(({ node: post }) => (
        <div className="masonry-grid-item">
          <Link to={`/${post.slug}/`}>
            <Img
              fluid={post.heroImage.fluid}
            />
          </Link>
          <div className="text-wrap">
            <Link to={`/${post.slug}/`}>
              <h4 className="title is-4 is-spaced">{post.title}</h4>
            </Link>
            <p className="subtitle is-6 is-spaced">{post.metaDescription.metaDescription}</p>
          </div>
        </div>
      ))}
    </Masonry>
  )
}

export default MasonryGrid
