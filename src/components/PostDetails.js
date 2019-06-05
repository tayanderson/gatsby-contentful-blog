import React from 'react'
import styled from 'styled-components'
import TagList from '../components/TagList'


const Wrapper = styled.div`
  margin: 0 auto;
  text-align:center;
`

const Date = styled.p`
  text-align:center;
`

const PostDetails = props => {
  return (
    <Wrapper className="has-text-centered">
      {props.tags && <TagList tags={props.tags} />}
      <h3 className="title is-3 is-spaced">{props.title}</h3>
      <p className="subtitle is-6">{props.description.internal.content}</p>
      <Date className="subtitle is-6">~ Posted {props.date} ~</Date>

    </Wrapper>
  )
}

export default PostDetails
