// /** @jsx jsx */
import React from 'react' // eslint-disable-line
// import {jsx, Container, Styled} from 'theme-ui'
// import {Link} from 'gatsby'

import MenuSectionColumnsItem from './MenuSectionColumnsItem'

const MenuSectionColumnsWrapper = () => {
  return (
    <>
      {/* COLUMNS CONTAINER START */}
      {/* ul: container for the main sub-menu COLUMNS. display flex always */}
      <ul className='wp-mega-sub-menu'>

        {/* COLUMNS.MAP => COLUMN.... */}

        {/* COLUMN START */}
        {/* li: this is a column for the main sub-menu. on mobile it's quiet with 100% width, on desktop it's side by side with the other columns, equal width */}
        <li className='menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children wp-mega-menu-header wpmega-show-arrow wpmm-submenu-align-left wpmm-menu-align-left wpmega-hide-menu-icon wpmega-1columns-3total menu-item-446 menu-item-depth-1 no-dropdown'>
          <MenuSectionColumnsItem />
        </li>
        {/* COLUMN END */}

        {/* END COLUMNS.MAP => COLUMN.... */}

      </ul>
      {/* COLUMNS CONTAINER END */}
    </>)
}

export default MenuSectionColumnsWrapper
