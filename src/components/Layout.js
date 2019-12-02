import React from 'react'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.ico'
import config from '../utils/siteConfig'
import Footer from '../components/Footer'
import '../styles/style.css'
import Navbar from '../components/Navbar'

const Template = ({ children }) => {
  return (
    <div className="siteRoot">
      <Helmet
        bodyAttributes={{
        class: 'has-navbar-fixed-top'
        }}
        >
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Navbar />
      <div className="siteContent">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Template
