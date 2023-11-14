import asyncHandler from 'express-async-handler'
import User from '../models/user.js'

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, passwordConfirmation } = req.body
  if (!name || !email || !password || !passwordConfirmation) {
    res.status(400)
    throw new Error('Required param is missing')
  }

  const user = new User({ name, email, password, passwordConfirmation })
  const response = await user.save()

  res.status(201).json(response)
})
