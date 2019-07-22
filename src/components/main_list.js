import React from "react"
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"
const MainList = props => {
  return (
    <div>
      <Typography variant="h5">
        <Box fontWeight="fontWeightBold">{props.title}</Box>
      </Typography>
      <List>
        {props.list &&
          props.list.map((item, i) => {
            return (
              <ListItem
                disableGutters
                button
                key={i}
                style={{ marginTop: 2, marginBottom: 2, paddingLeft: 2 }}
                onClick={() => window.open(item.url, "_blank")}
              >
                <ListItemText
                  primary={item.title}
                  secondary={`${item.event}, ${item.date}`}
                />
              </ListItem>
            )
          })}
      </List>
    </div>
  )
}

export default MainList
