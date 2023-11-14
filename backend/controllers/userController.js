import asyncHandler from 'express-async-handler'
import User from '../models/user.js'

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, passwordConfirmation } = req.body

  if (!name || !email || !password || !passwordConfirmation) {
    res.status(400)
    throw new Error('Required param is missing')
  }

  const response = await User.create({
    name,
    email,
    password,
    passwordConfirmation
  })
  res.status(201).json(response)
})
