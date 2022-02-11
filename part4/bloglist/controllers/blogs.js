const blogsRouter = require('express').Router
const { Router } = require('express')
const Blog = require('../models/blog')

blogsRouter.get('/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
    })
})

blogsRouter.post('/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

module.exports = blogsRouter