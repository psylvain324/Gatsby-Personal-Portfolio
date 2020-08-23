/* eslint-disable no-unused-vars */
import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

const About = props => (
  <Layout>
    <Helmet>
      <title>About Page</title>
      <meta name="description" content="Skills Page" />
    </Helmet>
    <div id="main" className="wrapper style1">
      <div className="container">
        <header className="major">
          <h2>About Me</h2>
          <p>
            Ipsum dolor feugiat aliquam tempus sed magna lorem consequat
            accumsan
          </p>
        </header>

        <h4>Blockquote</h4>
          <blockquote>
            Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
            sagittis eget tempus euismod. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan faucibus. Vestibulum ante ipsum primis in
            faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.
          </blockquote>

        <section>
          <header>
            <h3>Heading with a Subtitle</h3>
            <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
          </header>
          <p>
            Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
            porttitor sem non mi integer non faucibus ornare mi ut ante amet
            placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
            varius montes viverra nibh in adipiscing blandit tempus accumsan.
          </p>

        </section>
      </div>
    </div>
  </Layout>
)

export default About
