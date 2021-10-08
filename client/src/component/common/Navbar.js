import React, { useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { userIsAuthenticated } from '../helpers/auth'

const Navbar = () => {

  const history = useHistory()
  const location = useLocation()

  useEffect(() => {
  }, [location.pathname])

  console.log('User is authenticated -->', userIsAuthenticated())

  const handleLogout = () => {
    window.localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <>
      <div className="navbar navbar-expand-sm">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/"><i className="fas fa-beer"></i></Link>
          </div>
          <ul className="navbar-nav">
            { 
              userIsAuthenticated() ?
                <>
                  <li className="nav-item">
                    <Link to="/cities">City List</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/map">Map</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/profile">My Profile</Link>
                  </li>
                  <li className="nav-item">
                    <span className="logout"onClick={handleLogout}>Logout</span>
                  </li>
                </>
                :
                <>
                  <li className="nav-item">
                    <Link to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register">Register</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about">About</Link>
                  </li>
                </>
            }
          </ul>
        </div>
      </div>
    </>
  ) 
}

export default Navbar