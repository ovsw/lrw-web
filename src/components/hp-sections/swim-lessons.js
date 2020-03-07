/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled} from 'theme-ui'
import {Link, useStaticQuery, graphql} from 'gatsby'
// import Img from 'gatsby-image'

import {FaSwimmer} from 'react-icons/fa'

// containers
// import SectionWithSidebar from '../../containers/section-with-sidebar'
// import Section2ColFull from '../../containers/section-2col-full'
import SectionGridOne from '../../containers/sectionGridOne'

const SwimSection = () => {
  const {swimImage} = useStaticQuery(
    graphql`
    query {
      swimImage: file(relativePath: { eq: "swim-lessons.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
    `
  )
  return (
    <SectionGridOne theme='simple' content={<SwimSectionContent />} fluidBgImg={swimImage.childImageSharp.fluid} reverse bgColor='#344926' />
  )
}

const SwimSectionContent = () => {
  return (
    <div sx={{p: {lineHeight: 'snug'}}}>
      <Styled.h2 as='h2'>Swim Lessons</Styled.h2>
      <p>Camp Laurelwood is a great place for your child to learn to swim!  We have a beautiful lake, 2 pools, and lots of opportunity for campers to participate in aquatics programming.  </p>
      <p>In addition to recreational swimming, campers in grades K-7 have instructional swim approximately 5 times throughout the week.  Our qualified instructors teach them on their level, and provide safe and fun activities to promote swim development.</p>
      <Link to='/activities/' sx={{variant: 'buttons.3DAccent', display: 'inline-block', my: 3, mr: 3, position: 'relative'}}>
        Our Swimming Program
      </Link>
      <div sx={{variant: 'svgDeco.topRightBig'}}>
        <FaSwimmer />
      </div>
    </div>
  )
}

export default SwimSection
