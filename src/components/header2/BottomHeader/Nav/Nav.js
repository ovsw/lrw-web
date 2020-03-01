/** @jsx jsx */
import React, {useContext} from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {Link} from 'gatsby'

// components
import MenuSection from './Megamenu/MenuSection'
// import MainQuickLinks from './MainQuickLinks'

import {useSiteMetadata} from '../../../../hooks/use-site-metadata'

import MobileMainLinks from './Mobile/MobileMainLinks' // these are the items that appear in place of the main menu on mobile (usually contact link icons )
import MobileMenuToggle from './Mobile/MobileMenuToggle'
import MobileMenuExtraItems from './Mobile/MobileMenuExtraItems' // appear at the bottom of the expanded mobile menu as quick links
import MobileQuickLinks from './Mobile/MobileQuickLinks' // appear at the bottom of the expanded mobile menu as quick links

import {appContext} from '../../../../context'

const Nav = ({menuSections}) => {
  const {siteNav} = useSiteMetadata()
  const {isMobileNavOpen} = useContext(appContext)
  return (
    <nav sx={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      px: [2, null, null, 0]
      // alignItems: 'flex-start'
    }}>
      {/* ONLY NEEDED IF WE HAVE THE MAIN QUICK LINKS, along with an extra paerent to manage their flex layout <div id='wpmm-wrap-top' className='wp-megamenu-main-wrapper wpmm-askins-wrapper wpmega-clean-white wpmega-enabled-mobile-menu wpmm-toggle-standard wpmm-orientation-horizontal  wpmm-fade wpmm-onclick'> */}

      {/* only shows on mobile, where it  shows contact items usually, to the left side of the main menu */}
      <MobileMainLinks sx={{display: ['flex', null, null, 'none']}} />

      {/* MAIN NAV WRAPPER: on mobile it's initially hidden. toggled by the hamburger menu (MobileMenuToggle). On desktop, always visible. */}
      <ul data-trigger-effect='wpmm-onhover' sx={{
        variant: 'lists.reset',
        display: [null, null, null, 'flex'],
        visibility: [isMobileNavOpen ? 'visible' : 'hidden', null, null, 'visible'],
        // positioning
        position: ['absolute', null, null, 'static'],
        zIndex: 1000,
        bg: 'white',
        borderTop: ['5px solid', null, null, 'none'],
        borderBottom: ['5px solid', null, null, 'none'],
        borderColor: 'accent',
        top: '50px',
        right: '0',
        width: ['full', '324px', '424px', '100%!important'],
        maxWidth: ['full', '324px', '424px', 'none!important'],
        // animation
        height: [isMobileNavOpen ? '1000px' : '0px', isMobileNavOpen ? '500px' : '0px', isMobileNavOpen ? '700px' : '0px', 'auto!important'],
        maxHeight: ['calc(100vh - 83px)', '80vh', 'none'],
        overflowY: ['scroll', null, null, 'auto'],
        transition: 'all 300ms ease-out',
        boxShadow: ['inset 0 19px 10px -20px rgba(0, 0, 0, 0.5)', 'inset 0 19px 10px -20px rgba(0, 0, 0, 0.5),0 3px 10px 0px rgba(0,0,0,0.1)', null, 'none'], // '0 12px 10px 0px rgba(0,0,0,0.2)'
        // spacing
        px: [2, 4, null, 0],
        py: [isMobileNavOpen ? 4 : 0, null, null, 0],
        pt: 2,
        // links
        li: {
          // bg: 'blue',
          fontSize: 2
        },
        // link styles
        a: {
          color: 'dark',
          display: 'block',
          fontSize: '15px',
          fontWeight: 'bold',
          textDecoration: 'none',
          // bg: 'red',
          pb: '12px',
          '&.menuTitle': {
            fontFamily: 'heading',
            fontSize: [3, 4],
            fontWeight: 'bold',
            letterSpacing: ['0.012em', null, null, '0'],
            py: 3
          }
        }
        // list styles

      }}>
        <MenuSection navData={siteNav[0]} />
        <MenuSection navData={siteNav[1]} />
        <MenuSection navData={siteNav[2]} />
        <MenuSection navData={siteNav[3]} />
        <MobileMenuExtraItems sx={{display: ['block', null, null, 'none']}} />
        <MobileQuickLinks sx={{display: ['block', null, null, 'none']}} />
      </ul>
      {/* </div> */}

      {/* only visible on desktop, in case we want highlighted quick links at the top right (a la MDC) */}
      {/* <MainQuickLinks /> */}
      <MobileMenuToggle />
    </nav>
  )
}

export default Nav
