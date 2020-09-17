import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import One from '../components/One'
import Two from '../components/Two'
import Three from '../components/Three'
import Four from '../components/Four'

class Home extends React.Component {
  render() {
    return (
      <Layout location="/">
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title="Phillip Sylvain - Personal Portfolio"
          meta={[
            { name: 'description', content: 'Phillip Sylvain - Personal Portfolio' },
            { name: 'keywords', content: 'portfolio, resume, web, developer, designer, gatsby, react, javascript, typescript, angular, spring, java, asp.net, c#' },
          ]}
        ></Helmet>
        <Banner />
        <One />
        <hr className="page-break" />
        <Two />
        <hr className="page-break" />
        <Three />
        <Four />
      </Layout>
    )
  }
}

export default Home
