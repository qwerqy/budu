import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbo from "../components/jumbo"
import Social from "../components/social_link"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbo />
    <Social />
  </Layout>
)

export default IndexPage
