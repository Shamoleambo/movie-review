import asyncHandler from 'express-async-handler'

export const getMovies = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'hello getMovies' })
})

export const registerMovie = asyncHandler(async (req, res) => {
  const { name, year } = req.body
  res.status(201).json({ name, year })
})
