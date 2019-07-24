import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbo from "../components/jumbo"
import Social from "../components/social_link"
import OSP from "../components/open_source_projects"
import MainList from "../components/main_list"
import CSP from "../components/close_source_projects"
const speakingList = [
  {
    title: "Implementing Server Side Rendering logic to a CRA production app",
    event: "JS Wednesday - KualaLumpurJS",
    date: "27 February 2019",
    url: "https://youtu.be/mUbjiH4vYdI?t=1h11m",
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbo />
    <Social />
    <CSP />
    <OSP />
    <MainList title="Speaking" list={speakingList} />
  </Layout>
)

export default IndexPage
