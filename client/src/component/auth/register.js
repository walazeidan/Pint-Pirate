import React, { useState } from 'react' 
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import ImageUpload from '../profile/ImageUpload'
import { Helmet } from 'react-helmet'

const Register = () => {

  const history = useHistory()

  const [ formData, setFormData ] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    image: '',
  })

  const [ errors, setErrors ] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    image: '',
  })

  const handleChange = (event) => {
    const newObj = { ...formData, [event.target.name]: event.target.value }
    setFormData(newObj)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {                 
      await axios.post('/api/register', formData) 
      history.push('/login')
    } catch (err) {
      console.log('ERROR!', err.response.data.errors)
      setErrors(err.response.data.errors)
      console.log(errors) 
    }
  }

  const handleImageUrl = (url) => {
    setFormData({ ...formData, image: url })
  }

  return (
    <><div>
      <Helmet>
        <title>Pint-Pirate | Register 📝</title>
      </Helmet>
    </div>
    <div className="site-wrapper">
      <div className="register-page">
        <div className="form-page">
          <div className="container">
            <div className="row">
              <form onSubmit={handleSubmit} className="col-10 offset-1 mt-4 col-md-6 offset-md-3">
                <h3>Register</h3>
                <div className="form-field">
                  <label htmlFor="username">Username</label>
                  <input onInput={handleChange} type="text" name="username" placeholder="Username" value={formData.username} />
                  {errors.username && <p className="error">{errors.username.message}</p>}
                </div>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input onInput={handleChange} type="email" name="email" placeholder="Email" value={formData.email} />
                  {errors.email && <p className="error">{errors.email.message}</p>}
                </div>
                <div className="form-field">
                  <label htmlFor="password">Password</label>
                  <input onInput={handleChange} type="password" name="password" placeholder="Password" value={formData.password} />
                  {errors.password && <p className="error">{errors.password.message}</p>}
                </div>
                <div className="form-field">
                  <label htmlFor="passwordConfirmation">Password Confirmation</label>
                  <input onInput={handleChange} type="password" name="passwordConfirmation" placeholder="Password Confirmation" value={formData.passwordConfirmation} />
                  {errors.passwordConfirmation && <p className="error">{errors.passwordConfirmation.message}</p>}
                </div>
                <div className="form-field">
                  <ImageUpload
                    value={formData.image}
                    name='image'
                    handleImageUrl={handleImageUrl} />
                </div>
                <button className="btn btn-yellow w-100">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div></>
  )
}

export default Register