const listHelper = require('../utils/listHelper')

const emptyList = []
const listWithOneBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  }
]
const listWithMultiple = [
  {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7,
    __v: 0
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5,
    __v: 0
  },
  {
    _id: '5a422b3a1b54a676234d17f9',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12,
    __v: 0
  }
]

test('dummy returns one', () => {
  const result = listHelper.dummy(emptyList)
  expect(result).toBe(1)
})

describe('totalLikes', () => {
  test('when list is empty', () => {
    const result = listHelper.totalLikes(emptyList)
    expect(result).toBe(0)
  })
  test('when list has one blog equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })
  test('when list has multiple blog entries', () => {
    const result = listHelper.totalLikes(listWithMultiple)
    expect(result).toBe(24)
  })
})

describe('favouriteBlog', () => {
  test('when list is empty', () => {
    const result = listHelper.favouriteBlog(emptyList)
    expect(result).toEqual(null)
  })
  test('when list has one entry', () => {
    const result = listHelper.favouriteBlog(listWithOneBlog)
    expect(result).toEqual(listWithOneBlog[0])
  })
  test('when list has multiple blog entries', () => {
    const expected = {
      _id: '5a422b3a1b54a676234d17f9',
      title: 'Canonical string reduction',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
      likes: 12,
      __v: 0
    }
    const result = listHelper.favouriteBlog(listWithMultiple)
    expect(result).toEqual(expected)
  })
})

describe('mostBlogs', () => {
  test('when list is empty', () => {
    const result = listHelper.mostBlogs(emptyList)
    expect(result).toEqual({})
  })
  test('when list has multiple entries', () => {
    const result = listHelper.mostBlogs(listWithMultiple)
    const expectedResult = {
      author: 'Edsger W. Dijkstra',
      blogs: 2
    }
    expect(result).toEqual(expectedResult)
  })
})

describe('mostLikes', () => {
  test('when list is empty', () => {
    const result = listHelper.mostLikes(emptyList)
    expect(result).toEqual({})
  })
  test('when list has multiple entries', () => {
    const result = listHelper.mostLikes(listWithMultiple)
    const expectedResult = {
      author: 'Edsger W. Dijkstra',
      likes: 17
    }
    expect(result).toEqual(expectedResult)
  })
})
