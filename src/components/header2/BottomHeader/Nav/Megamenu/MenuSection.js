/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {jsx, Container, Styled} from 'theme-ui'
// import {Link} from 'gatsby'

import MenuSectionColumnsWrapper from './MenuSectionColumnsWrapper'

const MenuSection = ({submenuTitle = 'About Us', subMenuColumns}) => {
  // TODO: need state management here to keep track of the submenu's state (hidden initially, show on: click for mobile, hover on desktop)
  const showSubNav = true

  return (
    <>
      {/* main menu item. on mobile it's very quiet, just another li. on desktop it needs to be spaced out correctly to fit logo. */}
      {/*  STATE/FUNCTION: it acts as the hover trigger for the sub-menu, on both mobile and desktop */}
      <li className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children wpmega-menu-megamenu wpmega-show-arrow wpmm-menu-align-left wpmega-hide-menu-icon wpmega-horizontal-full-width menu-item-8 menu-item-depth-0 no-dropdown' >
        <a><span>{submenuTitle}</span></a>
        {/* .wpmm-sub-menu-wrap:  initially hidden on all sizes! when visible, in mobile it stays nice and quiet, with no styles. on desktop this is the wide submenu wrapper that only appears on hover over it's parent main menu item, holding the hover-expanded main submenu, including any background. */}
        <div className='wpmm-sub-menu-wrap' sx={{display: ['block', 'block', showSubNav ? 'block' : 'hidden']}}>
          {/* .wpmm-sub-menu-wrapper: in mobile it stays completely quiet. In desktop this is the centered container for the hover-expanded main submenu */}
          <div className='wpmm-sub-menu-wrapper wpmm-menu0'>
            <MenuSectionColumnsWrapper />
          </div>
        </div>
      </li>
    </>
  )
}

export default MenuSection
