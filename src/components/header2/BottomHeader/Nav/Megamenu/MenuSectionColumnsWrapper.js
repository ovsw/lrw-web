/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {jsx, Container, Styled} from 'theme-ui'
// import {Link} from 'gatsby'

import MenuSectionColumnsItem from './MenuSectionColumnsItem'

const MenuSectionColumnsWrapper = ({subMenuColumns}) => {
  return (
    <>
      {/* COLUMNS CONTAINER START */}
      {/* ul: container for the main sub-menu COLUMNS. display flex on desktop */}
      <ul className='wp-mega-sub-menu' sx={{variant: 'lists.reset', display: [null, null, null, null, 'flex']}}>

        {/* {subMenuColumns.map((column, i) => (
          <> */}
        {/* li: this is a column for the main sub-menu. on mobile it's quiet with 100% width, on desktop it's side by side with the other columns, equal width */}
        <li className='menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children wp-mega-menu-header wpmega-show-arrow wpmm-submenu-align-left wpmm-menu-align-left wpmega-hide-menu-icon wpmega-1columns-3total menu-item-446 menu-item-depth-1 no-dropdown'>
          <MenuSectionColumnsItem />
        </li>
        {/* </>
        ))} */}

      </ul>
      {/* COLUMNS CONTAINER END */}
    </>)
}

export default MenuSectionColumnsWrapper
