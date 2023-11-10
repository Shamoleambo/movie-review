import express from 'express'
import dotenv from 'dotenv'
import movieRouter from './routes/movieRoutes.js'

dotenv.config()
const server = express()

const PORT = process.env.PORT || 5000

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use('/api/movies', movieRouter)

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
})
