import React from 'react'
import styled from 'styled-components'
import TagList from '../components/TagList'


const Wrapper = styled.div`
  margin: 0 auto 2em;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  span {
    margin: 0 0.5rem;
  }
`

const Date = styled.p`
  text-align:center;
`

const Title = styled.h1`
  font-size: 3em;
  text-transform: capitalize;
  font-weight: 600;
  align:center;
  padding: 0 1rem;
  text-align: center;
  color: black;
`

const PostDetails = props => {
  return (
    <Wrapper>
      {props.tags && <TagList tags={props.tags} />}
      <Title>{props.title}</Title>
      <Date>Posted {props.date}</Date>
    </Wrapper>
  )
}

export default PostDetails
