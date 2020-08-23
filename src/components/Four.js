/* eslint-disable no-unused-vars */
import React from 'react'
import Fade from 'react-reveal/Fade'
import CustomStyle from '../assets/css/custom.css'
import CustomStyles from '../assets/scss/custom.scss'

const Four = props => (
  <Fade up>
    <section id="four" className="wrapper style1 special fade-up">
      <div className="container">
        <header className="major">
          <h2>Proficient Technologies</h2>
        </header>
        <div className="box alt">
          <div className="row gtr-uniform">
            <section className="col-4 col-6-medium col-12-xsmall">
              <div id="asp-net" className="image-animation"></div>
              <div>
                <p>
                  Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                  orci porttitor.
                </p>
              </div>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <div id="spring-boot" className="image-animation"></div>
              <div>
                <p>
                  Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                  orci porttitor.
                </p>
              </div>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <div id="angular" className="image-animation"></div>
              <div>
                <p>
                  Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                  orci porttitor.
                </p>
              </div>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <div id="sql" className="image-animation"></div>
                <div>
                  <p>
                    Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                    orci porttitor.
                  </p>
              </div>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <div id="javascript" className="image-animation"></div>
                <div>
                  <p>
                    Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                    orci porttitor.
                  </p>
              </div>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <div id="react" className="image-animation"></div>
                <div>
                  <p>
                    Feugiat accumsan lorem eu ac lorem amet accumsan donec. Blandit
                    orci porttitor.
                  </p>
              </div>
            </section>
          </div>
        </div>
        <footer className="major">
          <ul className="actions special">
            <li>
              <a href="/contact" className="button">
                Contact Me
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </section>
  </Fade>
)

export default Four
