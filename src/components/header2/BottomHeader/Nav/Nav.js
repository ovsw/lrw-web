/** @jsx jsx */
import React, {useContext} from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {jsx, Container, Styled} from 'theme-ui'
// import {Link} from 'gatsby'

// components
import MenuSection from './Megamenu/MenuSection'
// import MainQuickLinks from './MainQuickLinks'

import MobileMainLinks from './Mobile/MobileMainLinks' // these are the items that appear in place of the main menu on mobile (usually contact link icons )
import MobileMenuToggle from './Mobile/MobileMenuToggle'
import MobileMenuExtraItems from './Mobile/MobileMenuExtraItems' // appear at the bottom of the expanded mobile menu as quick links
import MobileQuickLinks from './Mobile/MobileQuickLinks' // appear at the bottom of the expanded mobile menu as quick links

import {appContext} from '../../../../context'

const Nav = ({menuSections}) => {
  const {isMobileNavOpen, openMobileNav, closeMobileNav} = useContext(appContext)

  return (
    <nav sx={{
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between'
      // alignItems: 'flex-start'
    }}>
      {/* ONLY NEEDED IF WE HAVE THE MAIN QUICK LINKS, along with an extra paerent to manage their flex layout <div id='wpmm-wrap-top' className='wp-megamenu-main-wrapper wpmm-askins-wrapper wpmega-clean-white wpmega-enabled-mobile-menu wpmm-toggle-standard wpmm-orientation-horizontal  wpmm-fade wpmm-onclick'> */}

      {/* only shows on mobile, where it  shows contact items usually, to the left side of the main menu */}
      <MobileMainLinks sx={{display: ['flex', null, null, 'none']}} />

      {/* MAIN NAV WRAPPER: on mobile it's initially hidden. toggled by the hamburger menu (MobileMenuToggle). On desktop, always visible. */}
      <ul id='wpmega-menu-top' className='wpmm-mega-wrapper hide-menu' data-advanced-click='wpmm-click-submenu' data-trigger-effect='wpmm-onhover' sx={{
        variant: 'lists.reset',
        display: [isMobileNavOpen ? 'block' : 'none', null, null, 'flex'],
        position: ['absolute', null, null, 'static'],
        zIndex: 1000,
        bg: 'background',
        top: '50px',
        right: '0',
        width: ['full', 'auto', null, '100%!important'],
        maxWidth: ['full', '324px', 'none'],
        height: [isMobileNavOpen ? '1000px' : '0px', null, 'auto'],
        maxHeight: ['calc(100vh - 80px)', '80vh', 'none'],
        overflowY: ['scroll', null, null, 'auto'],
        transition: 'height 900ms ease-out',
        boxShadow: ['0 12px 10px 0px rgba(0,0,0,0.2)', null, 'none']
      }}>
        <MenuSection />
        <MenuSection />
        <MenuSection />
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
