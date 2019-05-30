import React from 'react'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import ContactForm from '../components/ContactForm'
import SEO from '../components/SEO'
import styled from 'styled-components'

const Text = styled.p`
  text-align: center;
  margin: 0 0 3rem 0;
`

const Contact = ({ data }) => {
  const postNode = {
    title: `Contact - ${config.siteTitle}`,
  }
  return (
    <Layout>
      <Helmet>
        <title>{`Contact - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO postNode={postNode} pagePath="contact" customTitle />

      <Container>
        <PageTitle small>Contact</PageTitle>
        <Text>Questions? Comments? Just want to say hello? Hit me up. I’d love to hear from you!</Text>
        <ContactForm />
      </Container>
    </Layout>
  )
}

export default Contact
