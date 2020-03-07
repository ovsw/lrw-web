/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import {useStaticQuery, graphql, Link} from 'gatsby'
// import {jsx, Container, Styled} from 'theme-ui'

const MainLogo = () => {
  const {logoImage} = useStaticQuery(graphql`
  query{
    logoImage: file(relativePath: { eq: "camp-laurelwood-logo.png" }) {
      childImageSharp {
        original{
          width
          height
          src
        }
        fixed(width: 120) {
          ...GatsbyImageSharpFixed_noBase64
          srcSet
          src
        }
      }
    }
  }
`)
  return (
    <div sx={mainLogoStyles}>
      <Link to='/' title='Camp Laurelwood home page'>
        <img src={logoImage.childImageSharp.fixed.src} alt='Camp Laurelwood Logo' />
      </Link>
    </div>
  )
}

export default MainLogo

const mainLogoStyles = {
  position: 'absolute',
  top: ['0px', null, null, '0px'],
  width: ['100px', null, null, '115px'],
  height: ['102px', null, null, '116px'],
  left: '0',
  right: '0',
  bottom: '0',
  margin: '0 auto',
  padding: '3px',
  background: '#fff',
  zIndex: '1111',
  boxShadow: '0 3px 10px 0px rgba(0,0,0,0.2)'
}
