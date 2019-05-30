import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import TagList from '../components/TagList'

const Post = styled.li`
  position: relative;
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background 0.2s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  a {
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      overflow: hidden;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
      img {
        transition: all .3s ease !important;
      }
      &:hover img {
        transform: scale(1.02);
        -webkit-filter: brightness(110%); /* Safari 6.0 - 9.0 */
        filter: brightness(110%);
      }
    }
  }
`

const Title = styled.h2`
  font-size: 1.5em;
  font-weight: 600;
  text-transform: capitalize;
  margin: 1rem 0 0.5rem 0;
`

const Date = styled.h3`
  margin: 0 0 0.5rem 0;
  color: gray;
`

const Excerpt = styled.p`
  margin: 0 0 1rem 0;
  line-height: 1.6;
`

const Card = ({
  slug,
  heroImage,
  title,
  publishDate,
  tags,
  metaDescription,
  ...props
}) => {
  return (
    <Post featured={props.featured}>
      <Link to={`/${slug}/`}>
        <Img fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
      </Link>
      <Link to={`/${slug}/`}>
        <Title>{title}</Title>
      </Link>
      <Excerpt>{metaDescription.internal.content}</Excerpt>
      <Date>{publishDate}</Date>
    </Post>
  )
}

export default Card
