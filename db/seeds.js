import mongoose from 'mongoose'
import 'dotenv/config'

//Models
import City from '../models/cities.js'
import User from '../models/users.js'

//Data
import cityData from './data/cities.js'
import userData from './data/users.js'

const seedDatabase = async () => {

  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.dbURI)
    console.log('🤝 Database connected!🤝')
    // Drop current database
    await mongoose.connection.db.dropDatabase()
    console.log('❌ Dropped database ❌')
    const users = await User.create(userData)
    console.log(`✅  ${users.length} users created`)
    const citiesWithOwners = cityData.map(c => {
      c.owner = users[0]._id
      return c
    })
    // Create Cities
    const cities = await City.create(citiesWithOwners)
    console.log(`🌱 Database seeded with ${cities.length} cities 🌱`)
    // Close connection to MongoDB
    await mongoose.connection.close()
    console.log('👋 Bye')
  } catch (err) {
    console.log('🆘 Something went wrong')
    console.log(err)
    // Close connection to MongoDB
    await mongoose.connection.close()
    console.log('👋 Bye')
  }
}
seedDatabase()