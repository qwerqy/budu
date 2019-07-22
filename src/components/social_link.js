import React from "react"
import { TwitterFollowButton } from "react-twitter-embed"
import GitHubButton from "react-github-btn"
import { Grid } from "@material-ui/core"
import withWidth from "@material-ui/core/withWidth"

const SocialLink = props => {
  return (
    <Grid
      style={{ marginTop: "1rem" }}
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      spacing={2}
    >
      <Grid item>
        <TwitterFollowButton
          screenName={"aminroslan__"}
          options={{
            showScreenName: "false",
            size: "large",
            showCount: props.width === "xs" ? "false" : "true",
          }}
        />
      </Grid>
      <Grid item>
        <GitHubButton
          href="https://github.com/qwerqy"
          data-show-count={props.width === "xs" ? "false" : "true"}
          data-text="Follow"
          data-size="large"
          aria-label="Follow @qwerqy on GitHub"
        >
          Follow @qwerqy
        </GitHubButton>
      </Grid>
    </Grid>
  )
}

export default withWidth()(SocialLink)
