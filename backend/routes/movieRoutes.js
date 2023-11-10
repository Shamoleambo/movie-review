import express from 'express'
import { getMovies, registerMovie } from '../controllers/movieController.js'

const router = express.Router()

router.get('', getMovies)
router.post('/register', registerMovie)

export default router
