import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

const Header = ({ siteTitle }) => (
  <header
    style={{
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
        <Grid item>
          <Typography align="center" variant={"h6"}>
            <Link
              to="/"
              style={{
                color: `black`,
                fontWeight: "bold",
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </Typography>
        </Grid>
        <Grid item>
          <Grid container direction="row" spacing={2}>
            <Grid item xs>
              <Typography align="center" variant={"body2"}>
                <Link
                  to="/about"
                  style={{
                    color: `black`,
                    textDecoration: `none`,
                  }}
                >
                  About
                </Link>
              </Typography>
            </Grid>
            {/* <Grid item xs>
              <Typography align="center" variant={"body2"}>
                <Link
                  to="/contact"
                  style={{
                    color: `black`,
                    textDecoration: `none`,
                  }}
                >
                  Contact
                </Link>
              </Typography>
            </Grid> */}
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
