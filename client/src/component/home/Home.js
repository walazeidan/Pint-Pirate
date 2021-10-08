import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const Home = () => {
  return ( 
    <><div>
      <Helmet>
        <title>Pint-Pirate | Home 🏠</title>
      </Helmet>
    </div>
    <div className="site-wrapper">
      <div className="home-background">
        <div className="home-container d-flex flex-column">
          <div className="container title-screen d-flex flex-column align-items-center">
            <h1>Pint-Pirate</h1>
            <p>Find UK travel destinations based off the price of a pint! 🍺 </p>
            <Link className="btn explore-btn" to="/cities"><span>Explore </span>   🧭 </Link>
          </div>
          <div className="home-cards d-flex">
            <a href='https://untappd.com/' rel="noreferrer" target="_blank">
              <div className="untappd-card">
                <p>Go to Untappd for further beer ratings and find like minded drinkers!</p>
              </div>
            </a>
            <a href="https://www.beerhawk.co.uk/" rel="noreferrer" target="_blank">
              <div className="hawk-card">
                <p>Fancy a draught at home? Check out Beer Hawk!</p>
              </div>
            </a>
            <a href="https://puritybrewing.com/" rel="noreferrer" target="_blank">
              <div className="purity-card">
                <p>For completely carbon-neutral brewing, check out Purity Brewing Co.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div></>
  )
}

export default Home