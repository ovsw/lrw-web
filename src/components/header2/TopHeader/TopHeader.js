/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {jsx, Container, Styled} from 'theme-ui'
// import {Link} from 'gatsby'

import Column1 from './Column1'
import Column2 from './Column2'

const TopHeader = () => {
  // STYLE CONFIG
  const logoSpace = '6rem'
  /// ////////////////////

  return (
    <div className='top-header' sx={{bg: 'primaryDark', a: {display: 'inline-block', color: 'white', textDecoration: 'none', textTransform: 'uppercase', px: 2, py: 1}}}>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12 header-wrap' sx={{display: 'flex'}}>
            {/* this column shows on all devices (full with on mobile, half on desktop), however the items inside change based on scren size. */}
            <div className='top-col' sx={{width: ['full', null, null, '1/2'], textAlign: [null, null, null, 'right'], pr: [null, null, null, logoSpace]}}>
              <Column1 />
            </div>
            {/* this column only shows on desktop, where it covers the right side */}
            <div className='top-col' sx={{display: ['none', null, null, 'block'], width: '1/2', pl: logoSpace}}>
              <Column2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
