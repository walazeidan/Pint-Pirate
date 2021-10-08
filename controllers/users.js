import User from '../models/users.js'

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.currentUser._id)
    if (!user) throw new Error('User not Found')
    return res.status(200).json(user)
  } catch (err) {
    console.log('🚨 Could not get user profile')
    console.log(err)
    return res.status(404).json({ message: err.message })
  }
}
