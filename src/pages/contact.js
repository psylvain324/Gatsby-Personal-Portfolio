/* eslint-disable no-unused-vars */
import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'

const Contact = props => (
    <Layout>
      <Helmet>
        <title>Phillip Sylvain - Technical Skills</title>
        <meta name="description" content="Skills Page" />
      </Helmet>
      <div className="container">
        <header className="major">
          <h2>Contact</h2>
          <p>
            Let`@apos`s connect and collaborate
          </p>
        </header>
      <section>
          <h3>Form</h3>
          <form method="post" action="#">
            <div className="row gtr-uniform gtr-50">
              <div className="col-6 col-12-xsmall">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="col-12">
                <select name="category" id="category">
                  <option value="">- Category -</option>
                  <option value="1">Fulltime Employment Inquiry</option>
                  <option value="2">Contract Employment Inquiry</option>
                  <option value="3">Freelance Opportunity Inquiry</option>
                  <option value="4">Networking Connection Inquiry</option>
                </select>
              </div>
            
              <div className="col-12">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  rows="6"
                ></textarea>
              </div>
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      value="Send Message"
                      className="primary"
                    />
                  </li>
                  <li>
                    <input type="reset" value="Reset" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </section>
        </div>
    </Layout>
)

export default Contact