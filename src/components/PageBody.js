import React from 'react'

const PageBody = props => {
  return (
    <div
      className="my-0 mx-auto max-w-centered pg-body text-lg"
      dangerouslySetInnerHTML={{ __html: props.body.childMarkdownRemark.html }}
    />
  )
}

export default PageBody
