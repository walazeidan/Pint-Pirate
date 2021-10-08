import React, { useState, useEffect } from 'react'
import { getTokenFromLocalStorage } from '../helpers/auth'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import gif from '../../assets/beerfail.gif'

const Profile = () => {

  const token = getTokenFromLocalStorage()

  const [ details, setDetails ] = useState(null)
  const [ hasError, setHasError ] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios('/api/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setDetails(data)
        console.log(data)
      } catch (err) {
        console.log(err)
        setHasError(true)
      }
    }
    getData()
  }, [token])

  const getImage = () => {
    if (!details.image) {
      return 'https://i.imgur.com/hmWvp9e.jpg'
    } else {
      return details.image
    }
  }

  return (
    <><div>
      <Helmet>
        <title>Pint-Pirate | Profile 👤</title>
      </Helmet>
    </div>
    <div className="site-wrapper">
      <div className="beer-page">
        { details ? 
          <>
            <h1 className='profile-title'>My Profile</h1>
            <div className="details d-flex justify-content-center">
              <div className="profile-pic">
                <img src={getImage()} alt="" />
              </div>
              <div className='profile-info d-flex flex-column justify-content-center'>
                <h3>👤 {details.username}</h3>
                <h3>📧 {details.email}</h3>
              </div>
            </div>
          </>
          :
          <>
            {hasError ? 
              <>
                <h2 className="error-heading">Something Went Wrong</h2> 
                <div className="d-flex align-content-center">
                  <img className="fail-gif" src={gif}/>
                </div>
                <div className="d-flex justify-content-center">
                  <Link to={'/'}>
                    <h4 className='error-btn'>Take me Home!</h4>
                  </Link>
                </div>
              </>
              :
              <>
                <h2>Loading</h2>
              </>
            }
          </>
        }
      </div>
    </div></>
  )
}

export default Profile