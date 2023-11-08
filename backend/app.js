import express from 'express'
import movieRouter from './routes/movieRoutes.js'

const app = express()

app.use('/api/movies', movieRouter)

app.listen(3000, () => {
  console.log('hello world')
})
