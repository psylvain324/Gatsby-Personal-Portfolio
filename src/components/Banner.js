/* eslint-disable no-unused-vars */
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import LinkButton from '../components/LinkButton'
import CustomStyle from '../assets/css/custom.css'
import CustomStyles from '../assets/scss/custom.scss'

const Banner = props => (
  <section id="banner">
    <div className="content">
        <header>
          <div className="custom-banner-body">
            <div className="custom-banner">
              <div className="luminence">
                <h1 className="custom-content">Phillip  Sylvain</h1>
              </div>
            </div>
          </div>
          <sub-section className="animation-box">
            <div className="top-fade-out">Web Developer/Designer</div><br />
            <div className="right-fade-in">ASP.NET | Angular | Java Spring Boot</div>
            <div className="left-fade-in">Coder, Traveler, Writer</div>
          </sub-section ><br /><br />
          <div>
            <LinkButton />
          </div>
        </header>
    </div>
    <div className="">
      <ScrollLink
          to="one"
          className="goto-next"
          activeClass="active"
          smooth={true}
          offset={50}
          duration={1000}
          spy={true}
      >
        Next
      </ScrollLink>
    </div>
  </section>
)

export default Banner
