import React from 'react'
import SGPic from '../assets/images/Singapore-2.jpg'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'

const BlogLink = () => (
  <section
    id="three"
    className="spotlight style3 left inactive"
    style={{ backgroundImage: `url(${SGPic})` }}
  >
    <span className="image fit main bottom">
      <img src={SGPic} alt="" />
    </span>
    <Fade left big>
      <div className="content">
        <header>
          <div className="custom-animated-header">
            <div className="header-luminence">
              <h1>Blog</h1>
            </div>
          </div>
          <p>
            Learn more about Technology, Travel, and many things in between!
          </p>
        </header>
        <p>
          As an avid writer and lover of technology I have begun to Blog on
          relevant topics to my own career, travel, nutrition, and many other
          topics of interest. I would love to get as much feedback assets
          possible and provide help or information on any requested topics!
        </p>
        <ul className="actions">
          <li>
            <a href="/" className="button">
              Visit Blog
            </a>
          </li>
        </ul>
      </div>
    </Fade>
    <ScrollLink
      to="four"
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
export default BlogLink
