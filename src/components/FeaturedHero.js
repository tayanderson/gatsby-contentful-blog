// /components/Hero.js

import React from 'react'
import BgImg from 'gatsby-background-image'
import styled from 'styled-components'
import {Link} from 'gatsby'

const FeaturedHero = props => (
    <BgImg Tag="section"
      className="hero is-medium featured-hero"
      fluid={props.image.fluid}
       >
       <div className="hero-body has-text-centered">
         <Link to={props.slug} className="featured-hero-link">
           <Title>{props.title}</Title>
         </Link>
         <Excerpt>{props.metaDescription.internal.content}</Excerpt>
         <Link to={props.slug} className="button is-outlined is-uppercase is-white no-text-decoration">Check it out</Link>
       </div>
     </BgImg>
);

const StyledHero = styled(FeaturedHero)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

const Title = styled.h1`
  font-size: 3em;
  text-transform: capitalize;
  font-weight: 600;
  width: 100%;
  text-align: center;
  color: white;
  margin: 2rem 0;
`

const Excerpt = styled.p`
  text-align: center;
  color: white
`

export default StyledHero
