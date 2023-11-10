import asyncHandler from 'express-async-handler'

export const getMovies = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'hello getMovies' })
})
