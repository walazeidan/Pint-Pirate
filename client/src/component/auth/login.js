import React, { useState } from 'react'
import axios from 'axios' 
import { Link, useHistory } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Login = () => {

  const history = useHistory() 

  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const newObj = { ...formData, [event.target.name]: event.target.value }
    setFormData(newObj)
  }

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('token', token) 
    history.push('/cities') 
  }

  const handleSubmit = async (event) => {
    event.preventDefault() 
    try {
      const { data } = await axios.post('/api/login', formData)
      setTokenToLocalStorage(data.token) 
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <><div>
      <Helmet>
        <title>Pint-Pirate | Login 📝</title>
      </Helmet>
    </div>
    <div className="site-wrapper">
      <div className="login-page">
        <div className="form-page">
          <div className="container">
            <div className="row">
              <form onSubmit={handleSubmit} className="col-10 offset-1 mt-4 col-md-6 offset-md-3">
                <h3>Login</h3>
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input onChange={handleChange} type="email" name="email" placeholder="Email" />
                </div>
                <div className="form-field">
                  <label htmlFor="password">Password</label>
                  <input onChange={handleChange} type="password" name="password" placeholder="Password" />
                </div>
                <button className="btn btn-yellow w-100">Login</button>
                <p className="no-account">Don&apos;t have an Account?<Link to="/register"><span> Click Here</span></Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div></>
  )
}

export default Login