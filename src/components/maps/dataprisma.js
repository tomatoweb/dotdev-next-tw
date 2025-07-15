export default async function Geos() {
    let data = await fetch('api/geo')
    let posts = await data.json()
    return posts
  }