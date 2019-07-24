import React from "react"
import {
  Typography,
  Box,
  List,
  ListItem,
  Grid,
  Hidden,
  Button,
} from "@material-ui/core"
import GitHubButton from "react-github-btn"
import { fetchGithubRepo, capitalizeFirstLetter } from "../utils"

const acceptedProjects = [
  "budu",
  "orocle",
  "jobcrop",
  "thoughtlog",
  "basiccalculator",
]

const OSP = () => {
  const [projects, setProjects] = React.useState([])

  React.useEffect(() => {
    fetchGithubRepo(
      "https://api.github.com/users/qwerqy/repos?type=owner&sort=updated&affiliation=owner"
    ).then(json => {
      const result = json.filter(project =>
        acceptedProjects.includes(project.name)
      )
      setProjects(result)
    })
  }, [])

  return (
    <div>
      <Typography component="div" variant="h5">
        <Box fontWeight="fontWeightBold">Open Source Projects</Box>
      </Typography>
      <List>
        {projects.map((project, i) => {
          return (
            <ListItem
              key={i}
              style={{ marginTop: 2, marginBottom: 2, paddingLeft: 0 }}
            >
              <Grid container direction="row">
                <Grid
                  item
                  sm={3}
                  xs={6}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Typography component="div" variant="body1">
                    <Box fontWeight="fontWeightBold">
                      {capitalizeFirstLetter(project.name)}
                    </Box>
                  </Typography>
                </Grid>
                <Hidden xsDown>
                  <Grid
                    item
                    xs={5}
                    style={{
                      display: "flex",
                      marginRight: "1rem",
                      alignItems: "center",
                    }}
                  >
                    <Typography component="div" variant="body1">
                      <Box fontWeight="fontWeightLight">
                        {project.description}
                      </Box>
                    </Typography>
                  </Grid>
                </Hidden>
                <Grid
                  item
                  xs={3}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <Grid
                    container
                    direction="row"
                    spacing={2}
                    alignItems="center"
                  >
                    <Grid item>
                      <GitHubButton
                        href={`https://github.com/qwerqy/${project.name}`}
                        // data-size="large"
                        aria-label={`View ${project.name} source code`}
                      >
                        Source Code
                      </GitHubButton>
                    </Grid>
                    <Grid>
                      {project.homepage && (
                        <Button
                          className="live-button"
                          href={project.homepage}
                          target="_blank"
                          variant="contained"
                          size="small"
                          variant="text"
                          color="secondary"
                        >
                          Live
                        </Button>
                      )}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}

export default OSP
