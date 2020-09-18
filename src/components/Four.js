/* eslint-disable no-unused-vars */
import React from 'react'
import Fade from 'react-reveal/Fade'
import { Petronas } from '../assets/images/Petronas.jpg'
import CustomStyle from '../assets/css/custom.css'
import CustomStyles from '../assets/scss/custom.scss'

const Four = props => (
  <Fade up>
    <section 
      id="four" 
      className="wrapper style1 special fade-up"
      style={{ backgroundImage: `url(${Petronas})`}} 
    >
    <span className="image fit main">
      <img src={Petronas} alt="" />
    </span>
      <div className="container">
        {/* <header className="major"> */}
        <div className="custom-animated-header">
            <div className="header-luminence">
              <h1>Proficient Technologies</h1>
            </div>
        </div>
        {/* </header> */}
        <div className="box alt">
          <div className="row gtr-uniform">
            <section className="col-4 col-6-medium col-12-xsmall">
              <div id="asp-net" className="image-animation"></div>
              <div>
                <p>
                  C#, ASP.Net Core, Visual Studio, MVC, Entity Framework, Razor Pages, LINQ, XUnit, NUnit
                </p>
              </div>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <div id="spring-boot" className="image-animation"></div>
              <div>
                <p>
                  Java, Spring Boot, Hibernate, JPA, JDBC, AOP, Reactive Spring, Intellij, Eclipse
                </p>
              </div>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <div id="angular" className="image-animation"></div>
              <div>
                <p>
                  Angular2, Typescript, RxJs, NgRx, Reactive Forms, Angular Material, Jasmine
                </p>
              </div>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <div id="sql" className="image-animation"></div>
                <div>
                  <p>
                    SQL Management Studio, Oracle, MySQL, Complex Queries, Database Design
                  </p>
              </div>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <div id="javascript" className="image-animation"></div>
                <div>
                  <p>
                    Javascript, ES6, Ajax, jQuery, Visual Studio Code
                  </p>
              </div>
            </section>
            <section className="col-4 col-6-medium col-12-xsmall">
              <div id="react" className="image-animation"></div>
                <div>
                  <p>
                    React, JSX, Babel, Material UI, Redux, GatsbyJS
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
