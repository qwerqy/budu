import React from "react"
import { Typography, Box } from "@material-ui/core"

const Jumbo = () => {
  return (
    <div>
      <Typography variant="h4" style={{ marginBottom: "1rem" }}>
        <Box fontWeight="fontWeightBold">Hello, I'm Amin.</Box>
      </Typography>
      <Typography variant="body1">
        <Box>
          I am a software engineer and I specialize in writing solutions with
          Javascript & Dart.
        </Box>
        <Box>
          I am currently leading a team of software engineers that are working
          on a product for my company. I am also a hardcore gamer.
        </Box>
      </Typography>
    </div>
  )
}

export default Jumbo
