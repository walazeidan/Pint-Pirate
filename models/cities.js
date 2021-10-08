import mongoose from 'mongoose'

//REVIEW SCHEMA
const reviewSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 300 },
  rating: { type: Number, required: true, min: 1, max: 10 },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  username: { type: String, ref: 'User' }
},
{
  timestamps: true
})

//CITY SCHEMA
const citySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  bio: { type: String, required: true, maxlength: 500 },
  image: { type: String, required: true },
  pint: {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    abv: { type: Number, required: true },
    image: { type: String, required: true },
    bio: { type: String, required: true, maxlength: 500 },
    locations: []
  },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  review: [reviewSchema]
})

citySchema.virtual('avgRating')
  .get(function(){
    if (!this.review.length) return 'No reviews'
    const sum = this.review.reduce((acc, r) => {
      return acc + r.rating
    }, 0)
    return (sum / this.review.length).toFixed(2)
  })

citySchema.set('toJSON', { virtuals: true })

export default mongoose.model('City', citySchema)