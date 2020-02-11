/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled, Container} from 'theme-ui'
import {Flex, Box} from '@theme-ui/components'

import {Link, useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

import {FaMap, FaPhone} from 'react-icons/fa'

// containers
import SectionWithSidebar from '../../containers/section-with-sidebar'

const TransportationSection = () => {
  return (
    <section sx={{variant: 'sections.hpSectionLight'}}>
      <SectionWithSidebar mainContent={<MainContent />} sidebar={<Sidebar />} />
    </section>
  )
}

const MainContent = () => {
  const {transportationImage} = useStaticQuery(
    graphql`
    query {
      transportationImage: file(relativePath: { eq: "transportation-illustration.png" }) {
        childImageSharp {
          fluid(maxWidth: 726) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
    `
  )
  return (
    <>
      {/* <Img fluid={transportationImage.childImageSharp.fluid} /> */}
      <img src='https://via.placeholder.com/726' sx={{paddingLeft: 4}} />
    </>
  )
}

const Sidebar = () => {
  return (
    <div sx={{p: {lineHeight: 'snug'}}}>
      <Styled.h1 as='h2'>First Section Title Here</Styled.h1>
      <p>Parents wish for a quality summer day camp near them. With door to door busing, it is.</p>
      <p>Transportation is provided using air-conditioned, 24 passenger mini-buses.</p>
      <p>All buses are professionally driven and have seatbelts. There is a bus aid on each bus. Transportation is included in the camp tuition.</p>
      {/* <Link to='/transportation/' sx={{variant: 'buttons.3D', display: 'inline-block', my: 3, mr: 3, position: 'relative', pl: '3.5rem'}}>
        <FaMap sx={{position: 'absolute', top: '0.7rem', left: '1rem', fontSize: 4}} /> Read More
      </Link> */}
      <a href='tel:2034213736' sx={{variant: 'buttons.3DAccent', display: 'inline-block'}}>
        <FaPhone /> Call Us: (203) 421-3736
      </a>
    </div>
  )
}

export default TransportationSection
