import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const SALT_WORK_FACTOR = 10

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    passwordConfirmation: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

userSchema.pre('save',async function (next) {
  const user = this
  if (!user.isModified('password')) return next()

  const salt = await bcrypt.genSalt(SALT_WORK_FACTOR)
  user.password = await bcrypt.hash(user.password, salt)
  user.passwordConfirmation = user.password
})

const user = mongoose.model('User', userSchema)

export default user
