/* eslint-disable no-unused-vars */
import React from 'react'
import KLPic from '../assets/images/kuala lumpur-1.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const One = props => (
  <section
    id="one"
    className="spotlight style1 bottom inactive"
    style={{ backgroundImage: `url(${KLPic})` }}
  >
    <span className="image fit main">
      <img src={KLPic} alt="" />
    </span>
    <Fade bottom big>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-4 col-12-medium">
              <header>
                <h2></h2>
                <p>
                  Coding in Asp.NET, Angular & Java Spring Boot
                </p>
              </header>
            </div>
            <div className="col-4 col-12-medium">
              <p>
                The majority of my career I have worked in Asp.NET
                with SQL databases. I was originally educated and 
                trained in this technology and it is still amongst
                my favorite technologies to implement to this day. I have
                kept up to date with Asp.NET Core and love the changes
                that have come and are still coming down the pipe.
              </p>
            </div>
            <div className="col-4 col-12-medium">
              <p>
                More recently I have worked in the Java Spring Boot
                and Angular space. I worked abroad in Malaysia - which was 
                an amazing experience. I have continued to develop my existing
                skillset while branching into the Javascript 
                world with Angular and React. This site was written
                in React utilizing the Gatsby framework and GraphQl for
                page queries and SEO data. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
    <ScrollLink
      to="two"
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
export default One
