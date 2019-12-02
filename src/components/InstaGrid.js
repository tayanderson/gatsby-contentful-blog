import React from 'react'
import Masonry from 'react-masonry-css'
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import styled from 'styled-components'
import { FaInstagram } from 'react-icons/fa';

const GridItem = styled.div`
`

const InstaGrid = ({posts}) => {
  const breakpointCols = {
    default: 6,
    1100: 3,
    700: 2,
    500: 2
  };

  return (
    <Masonry
      breakpointCols={breakpointCols}
      className="flex -ml-4 w-auto"
      columnClassName="pl-4">
      {posts.map(({ node: post }) => (
        <GridItem className="mb-12 masonry-grid-item insta-grid-item relative">
          <a href={`https://www.instagram.com/p/${post.id}`}>
            <Img
              fluid={post.localFile.childImageSharp.fluid}
            />
          </a>
        </GridItem>
      ))}
    </Masonry>
  )
}

export default InstaGrid
