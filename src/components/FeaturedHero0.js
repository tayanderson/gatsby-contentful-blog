// /components/Hero.js

import React from 'react'
import BgImg from 'gatsby-background-image'
import {Link} from 'gatsby'
import Img from 'gatsby-image'

const FeaturedHero = props => (
  <div className="flex">
    <div className="w-full md:w-1/2 bg-pink">
      <div className="container mx-auto px-6 hero-body py-20 lg:py-32 text-primary">
        <h1 className="font-heading font-bold my-8 lg:text-5xl md:text-4xl text-3xl">{props.title}</h1>
        <p className="font-body text-2xl font-semibold">{props.metaDescription.internal.content}</p>
        <Link to={props.slug}>
          <button className="font-body bg-primary border-2 border-solid border-primary rounded-full hover:bg-transparent hover:text-primary text-white py-3 px-16 my-0 block mt-12 font-base lg:text-2xl text-lg focus:outline-none">Read more</button>
       </Link>
      </div>
    </div>
    <Img
      className="w-full md:w-1/2"
      fluid={props.image.fluid}
    />
  </div>
);

export default FeaturedHero
