import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import blueGrey from "@material-ui/core/colors/blueGrey"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: blueGrey[900],
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.8rem 1.0875rem`,
      }}
    >
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs3>
          <Typography align="center" variant={"h5"}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </Typography>
        </Grid>
        <Grid item xs3>
          <Grid container direction="row" spacing="2">
            <Grid item xs>
              <Typography align="center" variant={"body2"}>
                <Link
                  to="/"
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                  }}
                >
                  About
                </Link>
              </Typography>
            </Grid>
            <Grid item xs>
              <Typography align="center" variant={"body2"}>
                <Link
                  to="/"
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                  }}
                >
                  Work
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header