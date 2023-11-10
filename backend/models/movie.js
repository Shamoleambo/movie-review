import mongoose from 'mongoose'

const movieSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Movie = mongoose.model('Movie', movieSchema)

export default Movie
