import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { getTokenFromLocalStorage, getPayload } from '../helpers/auth'
import { Helmet } from 'react-helmet'
import gif from '../../assets/beerfail.gif'

const CityCard = () => {
  const [city, setCity] = useState(null)
  const [hasError, setHasError] = useState(false)

  const { id } = useParams()

  const token = getTokenFromLocalStorage() 
  
  useEffect(() => {
    const getCity = async () => {
      try {
        const { data } = await axios(`/api/cities/${id}`)
        setCity(data)
        console.log(data)
      } catch (err) {
        setHasError(true)
        console.log(err)
      }
    }
    getCity()
  },[id])

  const handleDelete = async (e) => {
    try {
      await axios.delete(`/api/cities/${id}/reviews/${e.target.name}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      window.location.reload(false)
    } catch (err) {
      console.log(err)
    }
  }

  const userIsOwner = (ownerId) => {
    const payload = getPayload()
    if (!payload) return
    return ownerId === payload.sub
  }

  const ratingColor = (rating) => {
    if (city.avgRating >= 0 && city.avgRating < 5) {
      rating = 'red-color'
    } else if (city.avgRating >= 5 && city.avgRating < 7.5) {
      rating = 'amber-color'
    } else {
      rating = 'green-color'
    }
    return rating
  } 

  return (
    <div className="beer-page"> 
      <div>
        <Link to={'/cities'}>
          <h4 className='list-link'>Back to List</h4>
        </Link>
      </div>
      {city ?
        <>
          <div>
            <Helmet>
              <title>Pint-Pirate | {city.name} 🍺</title>
            </Helmet>
          </div>
          <div className="container-city">
            <div className="city-info d-flex flex-column">
              <h2>{city.name}</h2>
              <div className="city-image-single">
                <img className="city-pic" src={city.image} alt={city.name}></img>
              </div>
              <p>{city.bio}</p>
            </div>
            <div className="beers-side d-flex justify-content-center">
              <div className="beer-pic">
                <img className="beer-pic-image" src={city.pint.image} alt={city.pint.name} />
              </div>
              <div className="beer-info">
                <h2>{city.pint.name}</h2>
                <p>£{city.pint.price.toFixed(2)}</p>
                <p>{city.pint.abv}%</p>
                <p>{city.pint.bio}</p>
                <h3>Where you can find it</h3>
                <ul>
                  {city.pint.locations.map((city, i) => {
                    return <li key={i}>{city}</li>
                  })}
                </ul>
                <Link to={`/cities/${city.id}/reviews`}>
                  <h4 className='review-link'>Post a review!</h4>
                </Link>
              </div>
            </div>
            <div className="review d-flex flex-column align-items-center flex-wrap">
              {city.review.length > 0 ?
                <><h2>Reviews ✍️</h2>
                  <h3>Average User Rating <span className={ratingColor()}> {city.avgRating}</span></h3>
                  <div className="div review-box d-flex flex-wrap justify-content-center">
                    {city.review.map(c => {
                      const time = new Date(c.createdAt)
                      return (
                        <div className="review-post" key={c._id}>
                          <p>👤 - {c.username}</p>
                          <p className="text-post">📝 - {c.text}</p>
                          <p>📈 - {c.rating}</p>
                          <p>📬 - {time.toLocaleString()}</p>
                          {userIsOwner(c.owner) && 
                      <button className='delete-button' onClick={handleDelete} name={c._id}>❌</button>
                          }
                        </div>
                      )
                    })}
                  </div></>
                :
                <h2></h2>
              }
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
  )
}

export default CityCard