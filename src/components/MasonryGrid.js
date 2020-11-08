import React from 'react'
import Masonry from 'react-masonry-css'
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import styled from 'styled-components'

const GridItem = styled.div`
  .post-link {
    line-height: 1;
    padding-left: 38px;
    transition: transform .6s cubic-bezier(.19,1,.22,1);
    @media (min-width: 51.875em) {
      padding-left: 46px;
    }

    &:after {
      content: "";
      display: block;
      height: 2px;
      background: #A53333;
      position: absolute;
      top: 5px;
      left: 0;
      width: 28px;
      transition: transform .6s cubic-bezier(.19,1,.22,1);
      transform-origin: 100% center;
      @media (min-width: 51.875em) {
          top: 7px;
          width: 36px;
      }
    }
  }
  a:hover {
    h3,p:not(.post-link) {color: #A53333; transition: color .3s ease;}
    .post-link {
      transform: translateX(36px);
      &:after {
        transform: scaleX(2);
      }
    }
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
      className="flex -ml-8 w-auto"
      columnClassName="pl-8">
      {posts.map(({ node: post }) => (
        <GridItem className="mb-12 masonry-grid-item">
          <Link to={`/${post.slug}/`}>
            <Img
              fluid={post.heroImage.fluid}
              className='img-wrapper'
            />
            <p className="font-body font-medium uppercase mt-6 mb-2 text-sm">{post.publishDate}</p>
            <h3 className="font-heading text-2xl font-semibold mb-2">{post.title}</h3>
            <p className="post-link font-body text-sm tracking-wide uppercase font-semibold text-primary relative inline-block">Read More</p>
          </Link>
        </GridItem>
      ))}
    </Masonry>
  )
}

export default MasonryGrid
