/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {jsx, Container, Styled} from 'theme-ui'
// import {Link} from 'gatsby'

// components
import MenuSection from './Megamenu/MenuSection'
// import MainQuickLinks from './MainQuickLinks'

import MobileMainReplacement from './Mobile/MobileMainReplacement' // these are the items that appear in place of the main menu on mobile (usually contact link icons )
import MobileMenuToggle from './Mobile/MobileMenuToggle'
import MobileMenuExtraItems from './Mobile/MobileMenuExtraItems' // appear at the bottom of the expanded mobile menu as quick links
import MobileQuickLinks from './Mobile/MobileQuickLinks' // appear at the bottom of the expanded mobile menu as quick links

const Nav = ({menuSections}) => {
  // TODO: need state management (hook) to control showing the mobile menu
  const showMobileMenu = false
  return (
    <nav>
      {/* ONLY NEEDED IF WE HAVE THE MAIN QUICK LINKS, along with an extra paerent to manage their flex layout <div id='wpmm-wrap-top' className='wp-megamenu-main-wrapper wpmm-askins-wrapper wpmega-clean-white wpmega-enabled-mobile-menu wpmm-toggle-standard wpmm-orientation-horizontal  wpmm-fade wpmm-onclick'> */}
      <MobileMenuToggle />
      {/* MAIN NAV WRAPPER: on mobile it's initially hidden. toggled by the hamburger menu (MobileMenuToggle). On desktop, always visible. */}
      <ul id='wpmega-menu-top' className='wpmm-mega-wrapper hide-menu' data-advanced-click='wpmm-click-submenu' data-trigger-effect='wpmm-onhover' sx={{
        display: [showMobileMenu ? 'block' : 'none', null, 'block']
      }}>
        <MenuSection />
        <MenuSection />
        <MenuSection />
        <MobileMenuExtraItems />
        <MobileQuickLinks />
      </ul>
      {/* </div> */}
      {/* only shows on mobile, where it  shows contact items usually, to the left side of the main menu */}
      <MobileMainReplacement />
      {/* only visible on desktop, in case we want highlighted quick links at the top right (a la MDC) */}
      {/* <MainQuickLinks /> */}
    </nav>
  )
}

export default Nav
