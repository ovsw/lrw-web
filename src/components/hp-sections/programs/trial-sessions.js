/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {Link, useStaticQuery, graphql} from 'gatsby'
// import Img from 'gatsby-image'
import {jsx, Styled} from 'theme-ui'
// import {Box, Flex} from '@theme-ui/components'

import Section2ColFull from '../../../containers/section-2col-full'

const TrialSessions = () => {
  const {trialSessionsImage} = useStaticQuery(
    graphql`
    query {
      trialSessionsImage: file(relativePath: { eq: "ropes-jordan.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 780, quality: 90) {
            ...GatsbyImageSharpFluid_noBase64
          }
          fixed(width: 700, height: 600, quality: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    `
  )

  return (
    <Section2ColFull content={<TrialSessionsContent />} fluidBgImg={trialSessionsImage.childImageSharp.fluid} theme='paper' />
  )
}

const TrialSessionsContent = () => {
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
      <Styled.h2 as='h2' sx={{mb: 2, mt: 0}}>Trial Sessions</Styled.h2>

      <div>
        <Styled.h3>Rookie Camp:</Styled.h3>
        <p> An opportunity for rookie or first time campers to fully immerse themselves in the excitement and wonder of the Laurelwood sleepaway experience.</p>
      </div>
      <div>
        <Styled.h3>Taste of Laurelwood:</Styled.h3>
        <p> Three wonderful days to introduce your camper to Laurelwood and the sleepaway camp experience. Drop off is Thursday at 10 am and pick up is Sunday at 1:00 pm.
        </p>

      </div>
      <Link to='/programs/trial-sessions/' sx={{variant: 'buttons.3DAccent', mt: 4, display: 'inline-block'}}>More about Trial Sessions</Link>

    </div>
  )
}

export default TrialSessions
