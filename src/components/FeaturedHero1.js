// /components/Hero.js

import React from 'react'
import BgImg from 'gatsby-background-image'
import {Link} from 'gatsby'
import styled from 'styled-components'

const StyledHero = styled.div`
  .featured-hero {
    height:500px;
  }
  .hero-body:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    z-index:-10;
    background-color: rgba(57, 5, 5,.6);
    transition: all .3s ease;
  }
  .hero-body:hover:after {
    background-color: rgba(57, 5, 5,.3);
  }
  .featured-hero button {
    transition: all 0.2s ease;
  }
`

const FeaturedHero = props => (
  <StyledHero>
    <BgImg
      className="featured-hero bg-cover bg-center"
      fluid={props.image.fluid}
       >
       <Link to={props.slug}>
       <div className="container mx-auto px-6 hero-body flex flex-col justify-end h-full py-20">
          <h1 className="font-heading font-bold text-white mb-4 lg:text-4xl md:text-3xl text-2xl">{props.title}</h1>
          <p className="text-white font-body text-xl">{props.metaDescription.internal.content}</p>
        </div>
      </Link>
    </BgImg>
  </StyledHero>
);

export default FeaturedHero
