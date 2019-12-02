import React from 'react'
import styled from 'styled-components'
import TagList from '../components/TagList'


const PostDetails = props => {
  return (
    <div className="m-auto mb-12 mt-6">
      {props.tags && <TagList tags={props.tags} />}
      <h2 className="font-heading font-semibold text-4xl lg:text-5xl xl:text-5xl capitalize mb-5 text-center">{props.title}</h2>
      <p className="font-body text-center text-sm text-gray-600">- Posted {props.date} -</p>
    </div>
  )
}

export default PostDetails
