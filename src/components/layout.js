/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "typeface-roboto"

import Header from "./header"
import "./layout.css"
import { Typography, Grid } from "@material-ui/core"

const footerItems = [
  {
    title: "Twitter",
    url: "https://twitter.com/aminroslan__",
  },
  {
    title: "Github",
    url: "https://github.com/qwerqy",
  },
  {
    title: "Site Source",
    url: "https://github.com/qwerqy/budu",
  },
]

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
      </div>
      <footer>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          {footerItems.map((item, i) => {
            return (
              <Grid item>
                <Typography align="center" variant={"body2"}>
                  <a
                    href={item.url}
                    style={{
                      color: `grey`,
                      textDecoration: `none`,
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.title}
                  </a>
                </Typography>
              </Grid>
            )
          })}
        </Grid>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
