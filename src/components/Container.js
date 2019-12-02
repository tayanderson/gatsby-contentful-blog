import React from 'react'

const Container = props => {
  return <div className="container mx-auto max-w-full flex-grow pt-8 px-8 pb-16">{props.children}</div>
}

export default Container
