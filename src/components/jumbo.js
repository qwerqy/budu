import React from "react"
import { Typography, Box } from "@material-ui/core"

const Jumbo = () => {
  return (
    <div>
      <Typography component="div" variant="h4" style={{ marginBottom: "1rem" }}>
        <Box fontWeight="fontWeightBold">Hello, I'm Amin.</Box>
      </Typography>
      <Typography component="div" variant="body1">
        <Box mt={2}>
          I am a software engineer, a gaming enthusiast and a tech geek. At{" "}
          <a href="https://vase.ai">Vase.ai</a>, I am the Engineering Lead for
          the Respondents Platform.
        </Box>
        <Box mt={2}>
          I did not graduate from any university. Ever since I left high school,
          I have been in various industries, working from one job to another,
          learning and seeking for answers along the way. I got interested in
          programming in 2018, after realising I can have the freedom to create
          almost anything with it.
        </Box>
        <Box mt={2}>
          When I'm not programming, I play games, mostly RPG genres. I am heavy
          on the storytelling. It's kind of like therapy. I can play for days
          when I'm immersed. I am also a binger when it comes to watching series
          on Netflix. In between times, I love listening to music. From metal to
          EDM to Lo-Fi.
        </Box>
      </Typography>
    </div>
  )
}

export default Jumbo
