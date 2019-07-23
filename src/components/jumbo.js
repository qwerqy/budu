import React from "react"
import { Typography, Box } from "@material-ui/core"

const Jumbo = () => {
  return (
    <div>
      <Typography component="div" variant="h4" style={{ marginBottom: "1rem" }}>
        <Box fontWeight="fontWeightBold">Hello, I'm Amin.</Box>
      </Typography>
      <Typography component="div" variant="body1">
        <Box>
          I am a software engineer and I specialize in writing solutions with
          Javascript & Dart.
        </Box>
        <Box>I am also a hardcore gamer.</Box>
      </Typography>
    </div>
  )
}

export default Jumbo
