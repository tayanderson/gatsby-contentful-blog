// /components/Hero.js

import React from 'react'
import BgImg from 'gatsby-background-image'
import styled from 'styled-components'

const Hero = props => (
    <BgImg Tag="section"
      className="hero is-medium home-hero"
      fluid={props.image.fluid}
       >
       <div className="hero-body">
         <Date>Posted {props.date}</Date>
         <Title>{props.title}</Title>
         <Excerpt>{props.metaDescription.internal.content}</Excerpt>
       </div>
     </BgImg>
);

const StyledHero = styled(Hero)`
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

const Date = styled.p`
  text-align:center;
  color: white;
`

const Excerpt = styled.p`
  text-align: center;
  color: white
`

export default StyledHero
