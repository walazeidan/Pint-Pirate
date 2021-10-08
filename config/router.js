import express from 'express'
import { getAllCities, createCity, getSingleCity, updateCity, deleteCity, postReview, deleteReview } from '../controllers/cities.js'
import { loginUser, registerUser } from '../controllers/auth.js'
import { secureRoute } from './secureRoute.js'
import { getProfile } from '../controllers/users.js'

const router = express.Router()

router.route('/cities')
  .get(getAllCities)
  .post(secureRoute, createCity)

router.route('/cities/:id')
  .get(getSingleCity)
  .put(secureRoute ,updateCity)
  .delete(secureRoute, deleteCity)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

router.route('/cities/:id/reviews')
  .post(secureRoute, postReview)

router.route('/cities/:id/reviews/:reviewId')
  .delete(secureRoute, deleteReview)

router.route('/profile')
  .get(secureRoute, getProfile)


export default router