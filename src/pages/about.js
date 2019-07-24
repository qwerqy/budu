import React from "react"
import Layout from "../components/layout"
import {
  Typography,
  Box,
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemText,
  Link,
} from "@material-ui/core"
import image from "../static/me.jpg"

const contacts = [
  {
    title: "Email",
    value: "amnrsln@gmail.com",
    url: "mailto:amnrsln@gmail.com",
  },
  {
    title: "Twitter",
    value: "aminroslan__",
    url: "https://twitter.com/aminroslan__",
  },
  {
    title: "Github",
    value: "qwerqy",
    url: "https://github.com/qwerqy",
  },
  {
    title: "LinkedIn",
    value: "Amin Roslan",
    url: "https://www.linkedin.com/in/aminroslan/",
  },
  {
    title: "Steam",
    value: "gc",
    url: "https://steamcommunity.com/id/amnrsln",
  },
  {
    title: "PSN",
    value: "amnrsln",
    url: "https://psnprofiles.com/amnrsln",
  },
]

const equipments = [
  {
    title: "Computer/Workstation",
    value: "Macbook Pro 15, Acer VX15 i7 GTX1050Ti",
  },
  {
    title: "Code Editor",
    value: "VSCode",
  },
  {
    title: "Hosting",
    value: "Heroku, AWS, Now.sh, Netlify",
  },
  {
    title: "Frameworks",
    value: "Next.js, Nuxt.js, Gatsby.js, React Native, Flutter",
  },
  {
    title: "Notes/Task Management",
    value: "Notion, Todoist",
  },
  {
    title: "Terminal",
    value: "iTerm2 with ZSH",
  },
]

const About = () => {
  return (
    <Layout>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <Typography
            component="div"
            variant="h5"
            style={{ marginBottom: "1rem" }}
          >
            <Box fontWeight="fontWeightBold">About Me</Box>
          </Typography>
          <Typography component="div" variant="body1">
            <Box>
              My name is Amin Roslan, you can call me Amin. I am a software
              engineer, a gaming enthusiast and a tech geek. I'm currently
              working at Vase.ai as the Team Lead for their respondents'
              project.
            </Box>
            <Box mt={2}>
              I did not graduate from any university. Ever since I left high
              school, I have been in various industries, working from one job to
              another, learning and seeking for answers along the way. I got
              interested in programming in 2018, after realising I can have the
              freedom to create almost anything with it.
            </Box>
            <Box mt={2}>
              When I'm not programming, I play games, mostly RPG genres. I am
              heavy on the storytelling. It's kind of like therapy. I can play
              for days when I'm immersed. I am also a binger when it comes to
              watching series on Netflix. In between times, I love listening to
              music. From metal to EDM to Lo-Fi.
            </Box>
          </Typography>
        </Grid>
        <Grid item>
          <Grid container justify="center" alignItems="center">
            <Avatar
              alt="My Picture"
              src={image}
              style={{
                width: "100%",
                height: "100%",
                margin: "4rem",
              }}
            />
          </Grid>
          <div>
            <Typography component="div" variant="h5">
              <Box fontWeight="fontWeightBold">Contact Me</Box>
            </Typography>
            <List>
              {contacts.map((contact, i) => {
                return (
                  <ListItem key={i} disableGutters dense style={{ margin: 0 }}>
                    <ListItemText>
                      <Typography component="div" variant="body1">
                        <Box>
                          {contact.title}:{" "}
                          <Link
                            style={{ fontWeight: "bold" }}
                            href={contact.url}
                            target="_blank"
                          >
                            {contact.value}
                          </Link>
                        </Box>
                      </Typography>
                    </ListItemText>
                  </ListItem>
                )
              })}
            </List>
          </div>
        </Grid>
        <Grid item>
          <Typography component="div" variant="h5">
            <Box fontWeight="fontWeightBold">What I use</Box>
          </Typography>
          <List>
            {equipments.map((equipment, i) => {
              return (
                <ListItem key={i} disableGutters dense style={{ margin: 0 }}>
                  <ListItemText>
                    <Typography component="div" variant="body1">
                      <Box>
                        {equipment.title}: <b>{equipment.value}</b>
                      </Box>
                    </Typography>
                  </ListItemText>
                </ListItem>
              )
            })}
          </List>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default About
