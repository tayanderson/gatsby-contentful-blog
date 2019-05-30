// /components/Hero.js

import React from 'react'
import BgImg from 'gatsby-background-image'
import styled from 'styled-components'

const Hero = props => (
    <BgImg Tag="section"
      className="hero is-large"
      fluid={props.image.fluid}
       >
       <div className="hero-body">
       </div>
     </BgImg>
);

const StyledHero = styled(Hero)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`
export default StyledHero
