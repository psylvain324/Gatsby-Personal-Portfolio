import React from 'react'
import PGPic from '../assets/images/Pittsburgh-1.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const ResumePortfolioLink = () => (
  <section
    id="two"
    className="spotlight style2 right inactive"
    style={{ backgroundImage: `url(${PGPic})` }}
  >
    <span className="image fit main">
      <img src={PGPic} alt="" />
    </span>
    <Fade right big>
      <div className="content">
        <header>
          <div className="custom-animated-header">
            <div className="header-luminence">
              <h1>Resume</h1>
            </div>
          </div>
          <p>Here you will find my update to Date Resume in React Form!</p>
        </header>
        <p>
          Recently I have worked for companies in cities like Pittsburgh,
          Singapore, and Kuala Lumpur, Malaysia. I have worked in multiple
          Technologies on both the front and back end in several different
          programming languages. I have a great passion for Technology, Travel,
          and meeting new people!
        </p>
        <ul className="actions">
          <li>
            <a href="/resume" className="button">
              Resume
            </a>
          </li>
          <li>
            <a href="/portfolio" className="button">
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </Fade>
    <ScrollLink
      to="three"
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
export default ResumePortfolioLink
