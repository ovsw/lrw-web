/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {jsx, Container, Styled} from 'theme-ui'
// import {Link} from 'gatsby'

import Column1 from './Column1'
import Column2 from './Column2'

const TopHeader = () => {
  return (
    <div className='top-header'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12 header-wrap'>
            <div className='top-col'>
              {/* this column shows on all devices (full with on mobile, half on desktop), however the items inside change based on scren size. */}
              <Column1 />
            </div>
            <div className='top-col'>
              {/* this column only shows on desktop, where it covers the right side */}
              <Column2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopHeader
