import * as React from 'react'
import Layout from '../components/layout'

const AboutPage = () => {
  return (
    <Layout pageTitle="About" pageHeading="About Casey Jo Noble">
      <p>My name is Casey and I really like wine.</p>
      <ul>
          <li>🏔 I was born in a ski town in sunny Southern California</li>
          <li>🍷 My current homebase is in Napa, CA</li>
          <li>🌕 When I grow up I want to be a Jedi Knight</li>
      </ul>
    </Layout>   
  )
}

export default AboutPage