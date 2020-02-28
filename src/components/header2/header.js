// /** @jsx jsx */
import React from 'react' // eslint-disable-line
// import {jsx, Container, Styled} from 'theme-ui'
// import {Link} from 'gatsby'

// components
import TopHeader from './TopHeader'
import BottomHeader from './BottomHeader'

const Header = () => {
  return (
    <header className='site-header' role='banner'>
      <TopHeader />
      <BottomHeader />
    </header>
  )
}

export default Header
