import React from 'react'
import { Link } from 'gatsby'

const PostLinks = props => {
  return (
    <div className="mt-16 px-1 pb-4 post-links">
      <div className="flex justify-between my-0 mx-auto w-full max-w-centered">
        {props.previous && (
          <Link to={`/${props.previous.slug}/`} className="text-primary transition-ease transition-250">
            &#8592; Prev Post
          </Link>
        )}
        {props.next && (
          <Link to={`/${props.next.slug}/`} className="text-primary transition-ease transition-250">Next Post &#8594;</Link>
        )}
      </div>
    </div>
  )
}

export default PostLinks
