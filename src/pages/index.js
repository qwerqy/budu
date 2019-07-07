import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Jumbo } from "../components/jumbo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbo />
  </Layout>
)

export default IndexPage
