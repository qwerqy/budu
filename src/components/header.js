import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import logo from "../static/logo.png"
import { Hidden } from "@material-ui/core"
import Tukang from "./Logo"
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid container direction="row" alignItems="center" spacing={2}>
          <Grid item>
            <Link to="/">
              <img src={logo} width="50" alt="site logo" />
            </Link>
          </Grid>
          <Grid item>
            <Hidden xsDown>
              <Typography align="left" variant={"h6"}>
                <Link
                  className="site-title"
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
            </Hidden>
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          alignItems="center"
          justify="flex-end"
          spacing={2}
        >
          <Grid item>
            <Typography align="center" variant={"body2"}>
              <Link
                className="site-menu"
                to="/about"
                style={{
                  color: `black`,
                  textDecoration: `none`,
                  // padding: "1rem",
                }}
              >
                About
              </Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography align="center" variant={"body2"}>
              <a
                className="site-menu"
                href="https://tukang.dev"
                style={{
                  color: `black`,
                  textDecoration: `none`,
                }}
                target="_blank"
              >
                Tukang Dev
              </a>
            </Typography>
          </Grid>
        </Grid>
      </div>
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
