/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {jsx, Container, Styled} from 'theme-ui'
// import {Link} from 'gatsby'

const MenuSectionColumnsItem = () => {
  return (
    <ul>
      {/* column nav item */}
      <li>
        <a href='https://www.shibleydaycamp.com/summer-camp/'><span>The Camper Experience</span></a>
      </li>
      {/* column nav item with sub-items */}
      <li>
        <a href='https://www.shibleydaycamp.com/summer-camp/program/'><span>Our Program</span></a>
        <ul className='wp-mega-sub-menu'>
          <li><a href='https://www.shibleydaycamp.com/summer-camp/program/junior-camp/'><span>Junior Camp</span></a></li>
          <li><a href='https://www.shibleydaycamp.com/summer-camp/program/senior-camp/'><span>Senior Camp</span></a></li>
          <li><a href='https://www.shibleydaycamp.com/summer-camp/program/sleepaway-week/'><span>Sleepaway Week</span></a></li>
          <li><a href='https://www.shibleydaycamp.com/summer-camp/program/cit-program/'><span>CIT Program</span></a></li>
        </ul>
      </li>
    </ul>
  )
}

export default MenuSectionColumnsItem
