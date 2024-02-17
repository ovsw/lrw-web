/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled, Container} from 'theme-ui'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import BackgroundImage from 'gatsby-background-image'
import {Box, Flex} from '@theme-ui/components'

// components
import SocialLinks from './socialLinks'

const Footer = () => {
  const {footerBgImage, acaLogo, asocIndependentJewishCampLogo, jfgnhLogo} = useStaticQuery(
    graphql`
    query {
      footerBgImage: file(relativePath: { eq: "cl_summer_2016_web_files-73.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024, quality: 80) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      acaLogo: file(relativePath: { eq: "aca-logo.png" }) {
        childImageSharp {
          fixed(height:100, quality: 90) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
      asocIndependentJewishCampLogo: file(relativePath: { eq: "association-of-independent-jewish-camps.png" }) {
        childImageSharp {
          fixed(height:100, quality: 90) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
      jfgnhLogo: file(relativePath: { eq: "jewish-federation-of-greater-new-haven-logo.png" }) {
        childImageSharp {
          fixed(height:100, quality: 90) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
      jfghLogo: file(relativePath: { eq: "jfgh-logo-color-stacked.png" }) {
        childImageSharp {
          fixed(height:100, quality: 90) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
    `
  )
  return (
    <BackgroundImage fadeIn={false} as='ThemeFooter' fluid={footerBgImage.childImageSharp.fluid} sx={{
      display: 'block',
      // background: `url('${FooterBg}') no-repeat top center`,
      backgroundPosition: 'top center',
      backgroundSize: 'cover',
      backgroundColor: 'primaryDark',
      color: 'gray.4'}}>
      <Container sx={{px: [1, null]}}>
        <Flex sx={{flexWrap: 'wrap', pt: [4, 4, 5], pb: [3, 3, 3, 4]}}>
          <Box sx={{width: ['full', 'full', '2/5'], px: [0, 4], py: [4, 0], textAlign: ['center', 'center', 'right'], borderRight: ['none', 'none', '1px solid lightgray']}}>
            <div className='vcard' sx={{color: 'light', a: {color: 'light'}}}>
              <div className='org'><Styled.h3 as='h3' sx={{mt: 0, color: 'light'}}>Camp Laurelwood</Styled.h3></div>
              <div className='tel'>
                Call Now <a sx={{variant: 'links.footerLinks'}} href='tel:12034213736'>(203) 421-3736</a>
              </div>
              <a className='email' sx={{variant: 'links.footerLinks'}} href='mailto:info@camplaurelwood.org'>info@camplaurelwood.org</a>
              <div className='adr' sx={{mt: 4}}>
                <div className='street-address'>463 Summer Hill Rd.</div>
                <span className='locality'>Madison</span>,{' '}
                <span className='region'>CT</span>{' '}
                <span className='postal-code'>06443</span>{' '}
                <span className='country-name'>United States</span>
              </div>
              <SocialLinks />
            </div>
          </Box>
          <Box sx={{width: ['full', 'full', '3/5'], px: [0, 1, 4], textAlign: 'center', display: "grid", "grid-template-columns": "1fr 1fr"}}>
            
            <div sx={{
              a: {
                px: 1,
                display: 'inline-block'
              }
            }}>
              <a title='Association of Independent Jewish Camps' href='https://www.aijcamps.org/' target='_blank' rel='noopener noreferrer'>
                <Img fixed={asocIndependentJewishCampLogo.childImageSharp.fixed} />
              </a>
              <a title='Jewish federation of Greater New Haven' href='https://www.jewishnewhaven.org/' target='_blank' rel='noopener noreferrer'>
                <Img fixed={jfgnhLogo.childImageSharp.fixed} />
              </a>
              <a title='Jewish federation of Greater Hartford' href='https://www.jewishhartford.org/' target='_blank' rel='noopener noreferrer'>
                <Img fixed={jfghLogo.childImageSharp.fixed} />
              </a>
              <a title='American Camp Association' href='https://www.acacamps.org/' target='_blank' rel='noopener noreferrer'>
                <Img fixed={acaLogo.childImageSharp.fixed} />
              </a>
              
            </div>
          </Box>
        </Flex>
        <p sx={{
          textAlign: 'center',
          color: 'gray.5',
          a: {
            color: 'gray.4'
          }
        }}>
          <Link to='/staff/'>Staff</Link> |{' '}
          <Link to='/terms-and-conditions/'>Terms &amp; Conditions</Link> |{' '}
          <Link to='/privacy-policy/'>Privacy Policy</Link> |{' '}
          <Link to='/ada-compliance/'>ADA Compliance</Link> |{' '}
          <Link to='/contact/'>Contact</Link>
        </p>
      </Container>
      <div sx={{textAlign: 'center', p: 3, fontSize: 1, color: 'muted', bg: 'rgba(0,0,0,0.5)'}}>
        &copy; {new Date().getFullYear()}, Camp Laurelwood
          |
        Website by <a href='https://ovswebsites.com' sx={{color: '#f36'}}>OVS Websites</a>
      </div>
    </BackgroundImage>
  )
}

export default Footer
