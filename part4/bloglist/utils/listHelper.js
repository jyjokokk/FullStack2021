const _ = require('lodash')

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

const mostBlogs = (blogs) => {
  if (blogs.length < 1) {
    return {}
  }
  const groupedByAuthor = _.groupBy(blogs, 'author')
  const mapped = _.mapValues(groupedByAuthor, (obj) => obj.length)
  const maxKey = _.maxBy(_.keys(mapped), o => mapped[o])
  const maxValue = mapped[maxKey]
  return {
    author: maxKey,
    blogs: maxValue
  }
}

const mostLikes = (blogs) => {
  if (blogs.length < 1) {
    return {}
  }
  const groupedByAuthor = _.groupBy(blogs, 'author')
  const mapped = _.mapValues(groupedByAuthor, (o) => {
    o.reduce((total, blog) => total + blog.likes, 0)
  })
  const maxKey = _.maxBy(_.keys(mapped), o => mapped[o])
  const maxValue = mapped[maxKey]
  return {
    author: maxKey,
    likes: maxValue
  }
}


module.exports = {
  dummy,
  totalLikes,
  mostBlogs,
  mostLikes,
  favouriteBlog
}