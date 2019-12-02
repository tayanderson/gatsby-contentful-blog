import React from 'react'
import { Link } from 'gatsby'

class Pagination extends React.Component {
  render() {
    const { numPages, currentPage, slug } = this.props.context
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const isNotPaginated = isFirst & isLast

    const prevPageNum = currentPage - 1 === 1 ? `` : currentPage - 1
    const nextPageNum = currentPage + 1

    const pathPrefix = typeof slug === 'string' ? `/tag/${slug}` : ''
    const prevPageLink = isFirst ? null : `${pathPrefix}/${prevPageNum}/`
    const nextPageLink = isLast ? null : `${pathPrefix}/${nextPageNum}/`

    return (
      <div className="relative flex justify-between w-full max-w-centered -mt-2 mx-auto mb-0 pt-0 px-2 pb-2">
        {!isFirst && (
          <Link to={prevPageLink} className="bg-primary text-white rounded p-1 hover:bg-secondary mr-auto order-1">&#8592; Prev Page</Link>
        )}
        {!isNotPaginated && (
          <span className="text-grey absolute left-0 right-0 w-full text-center py-1 px-2 -z-10 opacity-75">
            {currentPage}/{numPages}
          </span>
        )}
        {!isLast && <Link to={nextPageLink} className="bg-primary text-white rounded p-1 hover:bg-secondary ml-auto order-3">Next Page &#8594;</Link>}
      </div>
    )
  }
}

export default Pagination
