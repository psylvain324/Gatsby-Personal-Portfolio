import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Link as ScrollLink } from 'react-scroll'
import Fade from 'react-reveal/Fade'
import Img from 'gatsby-image'

const data = useStaticQuery(
  graphql`
    query {
      Petronas: file(relativePath: { eq: "Petronas.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1240) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `
)
const CareerOverview = () => (
  <section
    id="one"
    className="spotlight style1 bottom inactive"
  >
    <span className="image fit main">
      <Img fluid={data.Petronas.childImageSharp.fluid} alt="" />
    </span>
    <Fade right big>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-4 col-12-medium">
              <p>
                The majority of my career I have worked primarily as a backed
                developer in ASP.NET in C# with SQL databases. I was originally
                educated and trained in this technology and it is still amongst
                my favorite technologies to implement to this day. I have kept
                up to date with Asp.NET Core and love the changes that have come
                and coming soon in the upcoming framework releases.
              </p>
            </div>
            <header className="profile-pic">
              <div className="heading-frame">
                <h3 contentEditable="false">
                  Career
                  <br />
                  Overview
                </h3>
              </div>
            </header>
            <div className="col-4 col-12-medium">
              <p>
                Most recently I have worked in Java Spring Boot and Angular. I
                worked abroad in Malaysia - which was an amazing experience as
                well as in Pittsburgh, PA. I have continued to develop my
                existing skillset while branching into the Javascript world with
                Angular and React. This site was written in React utilizing the
                Gatsby framework and GraphQl for page queries and SEO data.
              </p>
            </div>
            {/* <SocialSideBar /> */}
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
      duration={1000}
      spy={true}
    >
      Next
    </ScrollLink>
  </section>
)
export default CareerOverview
