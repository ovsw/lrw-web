/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import {Flex} from '@theme-ui/components'
import {Link, useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

// components
import MobileMenu from './mobile-menu'
import MegaMenu from './mega-menu'

const MainNav = ({navStructure, showNav, onHideNav}) => {
  const {logoImage} = useStaticQuery(graphql`
  query{
    logoImage: file(relativePath: { eq: "camp-laurelwood-logo.png" }) {
      childImageSharp {
        fixed(width: 119) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`)

  return (
    <>
      {/* mobile */}
      <nav
        sx={{
          bg: 'primary',
          maxHeight: showNav ? '1000px' : '0',
          transition: 'all 400ms ease-out',
          position: ['absolute', 'absolute'],
          width: 'auto',
          height: ['88vh', '90vh'],
          overflow: 'scroll',
          top: ['5.15rem', '5.15rem'],
          left: 0,
          right: 0,
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)'
        }}
      >
        <Flex as='ul' sx={{
          variant: 'lists.reset',
          m: 0,
          pt: [0, 0],
          pb: [0, 4],
          px: 0,
          display: ['block', 'block', 'flex'],
          justifyContent: 'flex-end'
        }}>
          {navStructure.map((mainMenuItem, i) => {
            return (
              <MobileMenu key={mainMenuItem.slug} menuTitle={mainMenuItem.title} mainLink={mainMenuItem.slug} menuColumns={mainMenuItem.children} onHideNav={onHideNav} />
            )
          })}
        </Flex>

      </nav>

      {/* desktop */}
      <nav
        sx={{
          display: ['none', 'none', 'block'],
          width: 'full'
        }}
      >
        <Flex as='ul' sx={{
          variant: 'lists.reset',
          m: 0,
          pt: [3, 3, 1],
          pb: [4, 4, 1],
          px: [0, 0, 0, 2, 3],
          display: ['block', 'block', 'flex'],
          justifyContent: 'space-around'
        }}>
          {navStructure.map((mainMenuItem, i) => {
            if (i > 3) { return } // only show the first 4 items in the desktop menu
            if (i === 2) {
              return (
                <React.Fragment key={mainMenuItem.slug}>
                  <li sx={{
                    flexGrow: '1',
                    position: 'relative',
                    display: ['none', 'none', 'block']
                  }}>
                    <Link to='/' sx={{
                      display: 'block',
                      position: 'absolute',
                      width: '100%',
                      left: '100px',
                      marginLeft: '-100px',
                      top: '-45px',
                      textAlign: 'center'
                    }}>
                      <Img fixed={logoImage.childImageSharp.fixed} fadeIn={false} critical sx={{
                        width: '120px', position: 'relative', top: '-12px'
                      }} alt='Camp Laurelwood Logo' />
                    </Link></li>
                  <MegaMenu menuTitle={mainMenuItem.title} mainLink={mainMenuItem.slug} menuColumns={mainMenuItem.children} key={mainMenuItem.slug} />
                </React.Fragment>
              )
            } else {
              return (
                <MegaMenu key={mainMenuItem.slug} menuTitle={mainMenuItem.title} mainLink={mainMenuItem.slug} menuColumns={mainMenuItem.children} />
              )
            }
          })}
        </Flex>

      </nav>
    </>
  )
}

export default MainNav
