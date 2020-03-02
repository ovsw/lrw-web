/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {Link, useStaticQuery, graphql} from 'gatsby'
// import Img from 'gatsby-image'
import {jsx, Styled} from 'theme-ui'
// import {Box, Flex} from '@theme-ui/components'

import {MdStars} from 'react-icons/md'

// import Section2ColFull from '../../../containers/section-2col-full'
import SectionGridOne from '../../../containers/sectionGridOne'

const TrialSessions = () => {
  const {specialtyCampImage} = useStaticQuery(
    graphql`
    query {
      specialtyCampImage: file(relativePath: { eq: "circus-2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 780, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
    `
  )

  return (
    <SectionGridOne content={<SpecialtyCampsContent />} fluidBgImg={specialtyCampImage.childImageSharp.fluid} imgValign='top' bgColor='primaryDark' />
  )
}

const SpecialtyCampsContent = () => {
  return (
    <div sx={{
      'div': {
        'p': {
          ml: 1,
          borderLeft: '2px solid',
          borderColor: 'accent',
          pl: 3
        }
      }
    }}>

      <Styled.h2>Specialty Camps </Styled.h2>

      <Styled.h3>Enhance your summer fun with Laurelwood Specialty Camps! </Styled.h3>

      <p> Each program will combine immersive, professional instruction and skill development with our high-energy summer camp fun for an intense, well-rounded experience.
        <br /> <br /> Campers will master new skills, make new friends and gain a stronger sense of community with an emphasis on the values of teamwork, cooperation and sportsmanship.
      </p>
      <Link to='/programs/specialty-camps/' sx={{variant: 'buttons.3DAccent', mt: 4, display: 'inline-block'}}>More about Specialty Camps</Link>
      <div sx={{variant: 'svgDeco.topRightBig'}}>
        <MdStars />
      </div>
    </div>
  )
}

export default TrialSessions
