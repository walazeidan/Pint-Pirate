import React, { useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { getTokenFromLocalStorage } from '../helpers/auth'
import { Helmet } from 'react-helmet'

const ReviewForm = () => {

  const history = useHistory()
  const token = getTokenFromLocalStorage()

  const [ formData, setFormData ] = useState({
    text: '',
    rating: '',
    imageUpload: '',
  })

  const [ errors, setErrors ] = useState({
    text: '',
    rating: '',
    imageUpload: '',
  })

  const { id } = useParams()

  const handleChange = (e) => {
    const newObject = { ...formData, [e.target.name]: e.target.value }
    setFormData(newObject)
    const newErrors = { ...errors, [e.target.name]: '' }
    setErrors(newErrors)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      await axios.post(`/api/cities/${id}/reviews`, 
        formData, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      history.push(`/cities/${id}`)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <><div>
      <Helmet>
        <title>Pint-Pirate | Review ✍️</title>
      </Helmet>
    </div>
    <div className="site-wrapper">
      <div className='review-page'>
        <Link to={`/cities/${id}`}>
          <h4 className='list-link'>Back to City</h4>
        </Link>
        <div className="form-page">
          <div className="container">
            <div className="row">
              <form className="review-form col-10 offset-1 mt-4 col-md-10 offset-md-3" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label className="review-label"><h3>Your Review</h3></label>
                  <div className="control">
                    <textarea onInput={handleChange}
                      className="textarea"
                      name="text"
                      value={formData.text} />
                  </div>
                </div>
                <div className="rating form-field">
                  <label className="review-label"><p>Your Rating</p></label>
                  <div className="control">
                    <select name="rating" onChange={handleChange} value={formData.rating}>
                      <option value="" disabled></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>
                <div className="form-field">
                </div>
                <div className="field">
                  <button className="button" type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div></>
  )
}

export default ReviewForm