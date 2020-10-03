/* eslint-disable no-unused-vars */
import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import CareerOverview from '../components/CareerOverview'
import ResumePortfolioLink from '../components/ResumePortfolioLink'
import TechStackOverview from '../components/TechStackOverview'
import BlogLink from '../components/BlogLink'

class Home extends React.Component {
  render() {
    return (
      <Layout location="/">
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title="Phillip Sylvain - Personal Portfolio"
          meta={[
            {
              name: 'description',
              content: 'Phillip Sylvain - Personal Portfolio',
            },
            {
              name: 'keywords',
              content:
                'portfolio, resume, web, developer, designer, gatsby, react, javascript, typescript, angular, spring, java, asp.net, c#',
            },
          ]}
        ></Helmet>
        <Banner />
        {/* <CareerOverview petronasImage={this.props.img.petronasImage} /> */}
        <CareerOverview />
        <hr className="page-break" />
        <ResumePortfolioLink />
        <hr className="page-break" />
        <BlogLink />
        <TechStackOverview />
      </Layout>
    )
  }
}

export default Home
