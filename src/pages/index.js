import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home" pageHeading="Cheers 🥂 I'm Casey Jo">
      <p>I help wineries share their stories online.</p>
      <StaticImage
        alt="Stylized image of Casey Jo Noble savoring a glass of white wine"
        src="../images/casey-jo-noble-napa-wine-pro.png"
      />
      </Layout>
  )
}

export default IndexPage
