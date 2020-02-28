/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {jsx, Container, Styled} from 'theme-ui'
// import {Link} from 'gatsby'

import Nav from './Nav/'

const BottomHeder = () => {
  return (
    <div className='bottom-header'>
      <div className='container-fluid'>
        {/* THIS CONTROLS THE MAX-WIDTH and CENTERING OF THE BOTTOMHEADER CONTENT. */}
        <div className='col-md-12 header-wrap'>
          {/* THIS CONTROLS THE PADDING OF THE BOTTOMHEADER CONTENT */}
          <div className='header-main'>
            <Nav />
            <div className='main-logo'>
              <a href='https://www.shibleydaycamp.com' title='Shibley Day Camp'>
                <img src='https://www.shibleydaycamp.com/wp-content/uploads/2018/02/logo.png' alt='Shibley Day Camp' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomHeder
