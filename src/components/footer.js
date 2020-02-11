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
  const {footerBgImage, acaLogoImage} = useStaticQuery(
    graphql`
    query {
      footerBgImage: file(relativePath: { eq: "cl_summer_2016_web_files-73.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024, quality: 80) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      acaLogoImage: file(relativePath: { eq: "aca-logo.png" }) {
        childImageSharp {
          fixed(width: 192, quality: 90) {
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
      <Container>
        <Flex sx={{flexWrap: 'wrap', pt: [4, 4, 5, 6], pb: [3, 3, 3, 5]}}>
          <Box sx={{width: ['full', '1/2'], px: [0, 4], py: [4, 0], textAlign: ['center', 'right'], borderRight: ['none', '1px solid lightgray']}}>
            <div className='vcard'>
              <div className='org'><Styled.h3 as='h3' sx={{mt: 0, color: 'light'}}>Camp Laurelwood</Styled.h3></div>
              <div className='tel'>
                Call Now <a sx={{variant: 'links.footerLinks'}} href='tel:2034213736'>(203) 421-3736</a>
              </div>
              <a className='email' sx={{variant: 'links.footerLinks'}} href='mailto:info@camplaurelwood.org'>info@camplaurelwood.org</a>
              <div className='adr' sx={{mt: 4, color: 'gray.4'}}>
                <div className='street-address'>463 Summer Hill Rd.</div>
                <span className='locality'>Madison</span>,{' '}
                <span className='region'>CT</span>2{' '}
                <span className='postal-code'>06443</span>{' '}
                <span className='country-name'>United States</span>
              </div>

            </div>
          </Box>
          <Box sx={{width: ['full', '1/2'], px: 4, textAlign: 'center'}}>
            <SocialLinks />
            <Img fixed={acaLogoImage.childImageSharp.fixed} sx={{maxWidth: 'full', width: '48'}} />
          </Box>
        </Flex>
        <p sx={{
          textAlign: 'center',
          color: 'gray.5',
          a: {
            color: 'light'
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
