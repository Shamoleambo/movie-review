import asyncHandler from 'express-async-handler'

export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, passwordConfirmation } = req.body

  if (!name || !email || !password || !passwordConfirmation) {
    res.status(400)
    throw new Error('Required param is missing')
  }
})
