import asyncHandler from 'express-async-handler'
import Movie from '../models/movie.js'

export const getMovies = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'hello getMovies' })
})

export const registerMovie = asyncHandler(async (req, res) => {
  const { name, year } = req.body

  try {
    const movie = await Movie.create({ name, year })
    res.status(201).json(movie)
  } catch (error) {
    res.status(403)
    throw new Error('criar filme deu ruim')
  }
})
