import React from "react"
import { Typography, Box, List, ListItem, Grid } from "@material-ui/core"
import GitHubButton from "react-github-btn"

const acceptedProjects = [
  "budu",
  "orocle",
  "jobcrop",
  "thoughtlog",
  "basiccalculator",
]

const fetchGithubRepo = async url => {
  const res = await fetch(url)
  const json = await res.json()
  return json
}

const capitalizeFirstLetter = sentence => {
  return sentence.charAt(0).toUpperCase() + sentence.slice(1)
}

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
      <Typography variant="h5">
        <Box fontWeight="fontWeightBold">Open Source Projects</Box>
      </Typography>
      <List>
        {projects.map(project => {
          return (
            <>
              <ListItem
                key={project.id}
                style={{ marginTop: 2, marginBottom: 2, paddingLeft: 0 }}
              >
                <Grid container direction="row">
                  <Grid
                    item
                    xs={2}
                    alignItems="center"
                    style={{ display: "flex" }}
                  >
                    <Typography>
                      <Box fontWeight="fontWeightBold">
                        {capitalizeFirstLetter(project.name)}
                      </Box>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={5}
                    alignItems="center"
                    style={{ display: "flex", marginRight: "1rem" }}
                  >
                    <Typography>
                      <Box fontWeight="fontWeightLight">
                        {project.description}
                      </Box>
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={3}
                    alignItems="center"
                    style={{ display: "flex" }}
                  >
                    <GitHubButton
                      href={`https://github.com/qwerqy/${project.name}`}
                      data-size="large"
                      aria-label={`View ${project.name} source code`}
                    >
                      Source Code
                    </GitHubButton>
                  </Grid>
                </Grid>
              </ListItem>
            </>
          )
        })}
      </List>
    </div>
  )
}

export default OSP
