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


module.exports = {
  dummy,
  totalLikes
}