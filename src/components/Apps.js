import React from "react"
import MainList from "./main_list"

const projects = [
  {
    title: "Turbot (Staging)",
    secondary: "A Discord bot with an interface web app built with React",
    url: "https://staging.turbot.wtf/",
    thumbnail:
      "https://image.thum.io/get/width/200/https://develop.d2bfghe754xkas.amplifyapp.com/",
  },
  {
    title: "Kountr",
    secondary:
      "A counter app that can be hosted by a host and create a shareable link for people to join.",
    url: "https://kountr.now.sh/",
    thumbnail: "https://image.thum.io/get/width/200/https://kountr.now.sh",
  },
]

const Apps = () => {
  // const [projects, setProjects] = React.useState([])

  // React.useEffect(() => {
  //   fetchGithubRepo(
  //     "https://api.github.com/users/qwerqy/repos?type=private&sort=updated"
  //   ).then(json => {
  //     // const result = json.filter(project =>
  //     //   acceptedProjects.includes(project.name)
  //     // )
  //     console.log(json)
  //     setProjects(json)
  //   })
  // }, [])

  return <MainList title="Apps" list={projects} />
}

export default Apps
