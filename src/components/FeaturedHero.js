// /components/Hero.js

import React from 'react'
import BgImg from 'gatsby-background-image'
import {Link} from 'gatsby'
import styled from 'styled-components'

const StyledHero = styled.div`
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
       <div className="container mx-auto px-6 hero-body py-20 lg:py-32">
           <h1 className="font-heading font-bold text-center text-white my-8 lg:text-5xl md:text-4xl text-3xl">{props.title}</h1>
         <p className="text-center text-white font-body">{props.metaDescription.internal.content}</p>
           <button className="font-body bg-transparent border-2 border-solid border-white hover:bg-white hover:text-black text-white py-2 px-4 my-0 mx-auto block lg:w-40 mt-12 tracking-wider uppercase font-base lg:text-base text-sm focus:outline-none">Read more</button>
       </div>
      </Link>
    </BgImg>
  </StyledHero>
);

export default FeaturedHero
