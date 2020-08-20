import React from 'react'
import Img from "gatsby-image"
import KL from '../assets/images/Custom/kuala lumpur-1.jpg'
import { Link as ScrollLink } from 'react-scroll'

const Banner = props => (
  <section id="banner">
    <div className="content">
      <header>
        <h2>Phillip Sylvain</h2> <br></br>
        <h2>Web Developer/Designer</h2>
        <p>
          Asp.Net | Angular | Java Spring Boot
          <br />
          I code, I write, I design.
        </p>
      </header>
      <div className="image">
      <Img fixed={KL} />
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
