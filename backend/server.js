import express from 'express'
import dotenv from 'dotenv'
import movieRouter from './routes/movieRoutes.js'
import userRouter from './routes/userRouter.js'
import { connectDB } from './config/db.js'
import errorHandler, { notFound } from './middleware/errorHandler.js'

dotenv.config()
connectDB()
const server = express()

const PORT = process.env.PORT || 5000

server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use('/api/users', userRouter)
server.use('/api/movies', movieRouter)

server.use(notFound)
server.use(errorHandler)

server.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
})
