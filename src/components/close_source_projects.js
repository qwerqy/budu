import React from "react"
import MainList from "./main_list"

const projects = [
  {
    title: "Battlev",
    secondary: "A Discord bot with an interface web app built with Nuxt",
  },
]

const CSP = () => {
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

  return <MainList title="Close Source Projects" list={projects} />
}

export default CSP
