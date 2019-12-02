import React from 'react'
import { Link } from 'gatsby'

const TagList = props => {
  return (
    <ul className="w-full mx-auto mb-5 max-w-centered text-center">
      {props.tags.map(tag => (
        <li key={tag.id} className="inline-block border-2 border-solid border-primary py-1 px-5 font-medium">
          <Link to={`/tag/${tag.slug}/`} className="float-left uppercase text-primary">{tag.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default TagList
