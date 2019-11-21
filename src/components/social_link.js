import React from "react"
import { Grid } from "@material-ui/core"
import withWidth from "@material-ui/core/withWidth"
import { FaTwitter, FaGithub, FaDev, FaCode } from "react-icons/fa"
const SocialLink = props => {
  return (
    <Grid
      style={{ marginTop: "1rem" }}
      container
      direction="row"
      justify="flex-end"
      alignItems="flex-start"
      spacing={2}
    >
      <Grid item>
        <h3>
          <a className={"social-icon"} href="https://twitter.com/aminroslan__">
            <FaTwitter />
          </a>
        </h3>
      </Grid>
      <Grid item>
        <h3>
          <a className={"social-icon"} href="https://github.com/qwerqy">
            <FaGithub />
          </a>
        </h3>
      </Grid>
      <Grid item>
        <h3>
          <a className={"social-icon"} href="https://dev.to/qwerqy">
            <FaDev />
          </a>
        </h3>
      </Grid>
      <Grid item>
        <h3>
          <a className={"social-icon"} href="https://tukang.dev">
            <FaCode />
          </a>
        </h3>
      </Grid>
    </Grid>
  )
}

export default withWidth()(SocialLink)
