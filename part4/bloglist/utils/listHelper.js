const dummy = (blogs) => {
  if (!blogs) {
    console.log(blogs)
  }
  return 1
}

const totalLikes = (blogs) => {
  const summer = (prev, current) => prev + current.likes
  // let total = 0;
  // blogs.forEach(item => total += item.likes)
  return blogs.reduce(summer, 0)
}

const favouriteBlog = (blogs) => {
  if (blogs.length < 1) {
    return null
  }
  let favourite = blogs[0]
  for (let i = 0; i < blogs.length; i++) {
    if (blogs[i].likes > favourite.likes) {
      favourite = blogs[i]
    }
  }
  return favourite
}


module.exports = {
  dummy,
  totalLikes,
  favouriteBlog
}