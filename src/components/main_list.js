import React from "react"
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@material-ui/core"
import withWidth from "@material-ui/core/withWidth"

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
                // disableGutters
                button
                key={i}
                style={{ marginTop: 2, marginBottom: 2, paddingLeft: 2 }}
                onClick={() =>
                  window.open(
                    props.github
                      ? `https://github.com/qwerqy/${item.name}`
                      : item.url || "/"
                  )
                }
              >
                {item.thumbnail && (
                  <ListItemAvatar style={{ marginRight: "1rem" }}>
                    <img
                      src={item.thumbnail}
                      width={props.width === "xs" ? "100" : "200"}
                      style={{ borderRadius: "15%" }}
                    />
                  </ListItemAvatar>
                )}
                <ListItemText
                  primary={props.github ? item.name : item.title}
                  secondary={
                    props.github
                      ? ""
                      : item.event && item.date
                      ? `${item.event}, ${item.date}`
                      : item.secondary
                  }
                />
              </ListItem>
            )
          })}
      </List>
    </div>
  )
}

export default withWidth()(MainList)
