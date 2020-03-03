/** @jsx jsx */
import React, {useContext} from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {jsx, Container, Styled} from 'theme-ui'
// import {Link} from 'gatsby'
import NavLink from '../../../../../elements/nav-link'

import {appContext} from '../../../../../context'

const MenuSectionColumnsItem = ({items, onNavClick}) => {
  const {closeMobileNav} = useContext(appContext)
  return (
    <ul sx={{
      variant: 'lists.reset',
      mx: [null, null, null, 3]
    }}>
      {/* ^ keep quiet on mobile, on desktop we need space between the columns */}
      {items.map(item => (
        <li key={item.slug}>
          <NavLink to={`${item.slug}`} onClick={closeMobileNav}><span>{item.title}</span></NavLink>
          {(item.children !== []) && (
            <ul className='wp-mega-sub-menu' sx={{variant: 'lists.reset', pl: 3, a: {fontWeight: 'normal!important'}}}>
              {item.children.map(item => (
                <li key={item.slug}>
                  <NavLink to={`${item.slug}`} onClick={closeMobileNav}><span>{item.title}</span></NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}

export default MenuSectionColumnsItem
