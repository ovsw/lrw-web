/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container} from 'theme-ui'
import {Link, useStaticQuery, graphql} from 'gatsby'
import {Box, Flex} from '@theme-ui/components'

import Countdown from '../Countdown'
import Column from './about-section-column'

// import DecoImg1 from '../../images/deco/laurelwood-deco1-3.png'

const SectionThreeColumns = () => {
  const {bgImageMission, bgImageVision} = useStaticQuery(
    graphql`
    query {
      bgImageMission: file(relativePath: { eq: "paintitude.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      bgImageVision: file(relativePath: { eq: "old-camp.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
    `
  )

  const columnsContent = [
    {
      title: 'Our Mission',
      icon: 'teenagers',
      text: 'To provide a fun, safe and inclusive environment that builds self-esteem and encourages personal growth for children ages 5-15: Jewish identity and values, healthy lifestyle choices, and the foundation for lifelong friendships.',
      // was : To provide a fun, safe and inclusive environment that builds self-esteem and encourages personal growth for children ages 5-15: explore and enhance Jewish identity and values, encourage healthy lifestyle choices, and lay the foundation for positive, lifelong friendships.
      bgImage: bgImageMission.childImageSharp.fluid
    },
    {
      title: 'Our Vision',
      icon: 'starOfDavid',
      text: 'A vibrant, nurturing community rooted in Jewish values and traditions that inspire campers and staff to learn, grow and explore, creating lasting memories that strengthen the community.',
      bgImage: bgImageVision.childImageSharp.fluid
    }
  ]

  return (
    <section sx={{variant: 'sections.hpSectionLight'}}>
      <Container sx={{px: 0, position: 'relative', zIndex: 0, maxWidth: '7xl'}}>
        <Countdown
          timeTillDate='06 28 2020, 8:00 am'
          timeFormat='MM DD YYYY, h:mm a'
        />
        <h2 sx={{variant: 'headings.mainSectionHeading'}}>Connecticut's Premier Jewish Summer Camp</h2>
        <div sx={{px: 2, textAlign: 'center', maxWidth: 'xl', mx: 'auto', a: {color: 'primaryDark', textDecoration: 'none', px: 1, borderBottom: '3px solid', borderColor: 'accent'}}}>
          <p sx={{color: 'muted'}}>We offer both Overnight and Day Camp <Link to='/programs/'>programs</Link>, lots of fun <Link to='/activities/'>activities</Link> and a warm welcoming community. </p>
        </div>
        <Flex sx={{mt: 5, flexWrap: 'wrap'}}>
          {columnsContent.map(column => (
            <Box key={column.title} sx={{width: ['full', '1/2'], px: 3, display: 'flex'}}>
              <Column {...column} />
            </Box>
          ))}
        </Flex>
      </Container>
    </section >
  )
}

export default SectionThreeColumns
