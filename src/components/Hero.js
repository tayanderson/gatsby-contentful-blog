// /components/Hero.js

import React from 'react'
import Img from 'gatsby-image'

const Hero = props => (
    <Img
      className="min-w-full h-auto md-auto lg:h-screen xl:h-screen mb-16"
      fluid={props.image.fluid}
       >
     </Img>
);

export default Hero
