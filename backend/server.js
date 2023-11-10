import express from 'express'
import movieRouter from './routes/movieRoutes.js'

const server = express()

server.use('/api/movies', movieRouter)

server.listen(3000, () => {
  console.log('hello express')
})
