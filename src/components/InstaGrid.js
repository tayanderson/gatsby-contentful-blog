import React from 'react'
import Masonry from 'react-masonry-css'
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import styled from 'styled-components'
import { FaInstagram } from 'react-icons/fa';

const GridItem = styled.div`
  a:hover {
    img {
      transform: scale(1.02);
      -webkit-filter: brightness(110%); /* Safari 6.0 - 9.0 */
      filter: brightness(110%);
    }
  }
  .gatsby-image-wrapper {
    @apply overflow-hidden;
    img {
      transition: all .3s ease !important;
    }
  }
`

const InstaGrid = ({posts}) => {
  const breakpointCols = {
    default: 3,
    1100: 3,
    700: 2,
    500: 2
  };

  return (
    <Masonry
      breakpointCols={breakpointCols}
      className="flex -ml-12 w-auto"
      columnClassName="pl-12">
      {posts.map(({ node: post }) => (
        <GridItem className="mb-12 insta-grid-item relative">
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
