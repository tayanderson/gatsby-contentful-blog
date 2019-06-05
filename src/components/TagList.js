import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const List = styled.ul`
  width: 100%;
  margin: 0 auto 1em auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  text-align:center;
`

const Tag = styled.li`
  display: inline-block;
  margin: 0 0.25em 0.25em 0;
  border: 2px solid ${props => props.theme.colors.base};
  padding: 3px 10px;
  font-weight: 500;
  a {
    text-decoration: none;
    float: left;
    text-transform: uppercase;
    color: ${props => props.theme.colors.base};
  }
`

const TagList = props => {
  return (
    <List>
      {props.tags.map(tag => (
        <Tag key={tag.id}>
          <Link to={`/tag/${tag.slug}/`}>{tag.title}</Link>
        </Tag>
      ))}
    </List>
  )
}

export default TagList
