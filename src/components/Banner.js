/* eslint-disable no-unused-vars */
import React from 'react'
import Img from "gatsby-image"
import BannerPic from '../assets/images/IMG_2104_Enhanced.jpg'
import { Link as ScrollLink } from 'react-scroll'
import CustomStyle from '../assets/css/custom.css'
import CustomStyles from '../assets/scss/custom.scss'

const Banner = props => (
  <section id="banner">
    <div className="content">
        <header>
          <div className="custom-banner-body">
            <div className="custom-banner">
              <div className="luminence">
                <h1 className="custom-content">Phillip Sylvain</h1>
              </div>
            </div>
          </div>
          <div className="speed-1">
            <p className="speed-1">Web Developer/Designer</p>
          </div>
          <div className="speed-2">
            <p className="speed-2">Asp.Net | Angular | Java/Kotlin Spring Boot</p>
          </div>
          <div className="speed-3">
            <p className="speed-3">Coder, Traveler, Writer</p>
          </div>
        </header>
      <div>
        <Img fixed={BannerPic} />
      </div>
    </div>
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
  </section>
)

export default Banner
