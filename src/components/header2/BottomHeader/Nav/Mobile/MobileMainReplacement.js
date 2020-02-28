/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {jsx, Container, Styled} from 'theme-ui'
// import {Link} from 'gatsby'

const MobileMainReplacement = () => {
  return (
    <div className='mobile-info'>
      <ul>
        <li><a href='tel:5166218777' title='Call Us'>Call Us</a></li>
        <li><a href='mailto:info@shibleydaycamp.com' title='Email Us'>Email Us</a></li>
      </ul>
    </div>
  )
}

export default MobileMainReplacement
