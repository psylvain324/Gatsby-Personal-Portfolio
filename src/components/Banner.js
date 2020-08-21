/* eslint-disable no-unused-vars */
import React from 'react'
import Img from "gatsby-image"
import BannerPic from '../assets/images/IMG_2104.jpg'
import { Link as ScrollLink } from 'react-scroll'
import TitleStyle from '../assets/css/title.css'
import PseudoStyle from '../assets/css/pseudo.css'

const Banner = props => (
  <section id="banner">
    <div className="content">
        <header>
          <div className="custom-banner-body">
            <div className="custom-banner">
              <h1>Phillip Sylvain</h1>
            </div>
          </div>
          <div className="pseudo-body">
            <div className="home-title">
              <h2 className="pseudo-span">Web Developer/Designer</h2>
              <span className="pseudo-span">Asp.Net | Angular | Java/Kotlin Spring Boot</span>
              <span className="pseudo-span">Coder, Traveler, Writer</span>
            </div>
          </div>
          {/* <h2>Web Developer/Designer</h2>
            <p>
              Asp.Net | Angular | Java/Kotlin Spring Boot
            </p>
            <p>
              Coder, Traveler, Writer
            </p> */}
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
      duration={1500}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
)

export default Banner
