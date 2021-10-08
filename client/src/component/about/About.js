import React from 'react' 
import { Helmet } from 'react-helmet'

const About = () => {
  return (
    <><div>
      <Helmet>
        <title>Pint-Pirate | About 📖</title>
      </Helmet>
    </div>
    <div className="site-wrapper1">
      <div className="about-page">
        <div className="about-info d-flex flex-column">
          <h1>About</h1>
          <p>Welcome to Pint Pirate! <br /> A project created during General Assembly&apos;s SEI by Dan, Wala and Kwasi.<br />
              A simple easy to use web application to find the cheapest pint in all major UK cities.<br />Simply share your drinking expriences at different cities!
          </p>
          <div className="tech">
            <h3>Technologies Used</h3>
            <div className="bullet-list d-flex justify-content-center">
              <i className="devicon-html5-plain-wordmark colored"></i>
              <i className="devicon-css3-plain-wordmark colored"></i>
              <i className="devicon-sass-original colored"></i>
              <i className="devicon-bootstrap-plain-wordmark colored"></i>
              <i className="devicon-javascript-plain colored"></i>
              <i className="devicon-react-original-wordmark colored"></i>
              <i className="devicon-nodejs-plain colored"></i>
              <i className="devicon-express-original colored"></i>
              <i className="devicon-mongodb-plain-wordmark colored"></i>
              <i className="devicon-yarn-plain-wordmark colored"></i>
              <i className="devicon-npm-original-wordmark colored"></i>
            </div>
          </div>
          <div className="contact-info d-flex justify-content-center">
            <div className="dan-info d-flex flex-column">
              <h3>Dan</h3>
              <hr />
              <a href="https://www.linkedin.com/in/danlaurie98/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/dan-laurie" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
            </div>
            <div className="wala-info d-flex flex-column">
              <h3>Wala</h3>
              <hr />
              <a href="https://www.linkedin.com/in/wala-zeidan-315198214/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/walazeidan" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
            </div>
            <div className="kwasi-info d-flex flex-column">
              <h3>Kwasi</h3>
              <hr />
              <a href="https://www.linkedin.com/in/kwasi-appiah-kubi/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/Kwasiiii" rel="noreferrer" target="_blank"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div></>
  )
}
export default About