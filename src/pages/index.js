import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        //src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        src="/Users/dimi/WebPage/my-gatsby-site/src/images/Bild1.jpg"      
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage