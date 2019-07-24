export const fetchGithubRepo = async url => {
  const res = await fetch(url)
  const json = await res.json()
  return json
}

export const capitalizeFirstLetter = sentence => {
  return sentence.charAt(0).toUpperCase() + sentence.slice(1)
}
