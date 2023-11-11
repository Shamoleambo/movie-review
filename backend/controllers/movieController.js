import asyncHandler from 'express-async-handler'
import Movie from '../models/movie.js'

export const getMovies = asyncHandler(async (req, res) => {
  try {
    const movies = await Movie.find({})
    
    res.status(200).json(movies)
  } catch (error) {
    res.status(400)
    throw new Error('pegar filmes deu ruim')
  }
})

export const registerMovie = asyncHandler(async (req, res) => {
  const { name, year } = req.body

  try {
    const movie = await Movie.create({ name, year })
    res.status(201).json(movie)
  } catch (error) {
    res.status(400)
    throw new Error('criar filme deu ruim')
  }
})
