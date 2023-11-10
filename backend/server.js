import express from 'express'
import movieRouter from './routes/movieRoutes.js'

const server = express()
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use('/api/movies', movieRouter)

server.listen(3000, () => {
  console.log('hello express')
})
