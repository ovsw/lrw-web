/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {jsx, Container, Styled} from 'theme-ui'
import {Link} from 'gatsby'

const MobileQuickLinks = props => {
  return (
    <li>
      <div sx={{
        py: 4
      }}>
        <Link to='/donate-now/' sx={{
          variant: 'buttons.simple'
        }}>Donate Now</Link>
      </div>
      {/* <div className='mobile-menu' {...props}>
        <div className='mobile-nav'>
          <ul>
            <li><a href='https://www.shibleydaycamp.com/summer-camp/program/' title='Our Program'>Our Program</a></li>
            <li><a href='https://www.shibleydaycamp.com/enrolled-families/camp-calendars/' title='Camp Calendar'>Camp Calendar</a></li>
            <li><a href='https://www.shibleydaycamp.com/request-information/' title='Request A Camp Tour'>Request A Camp Tour</a></li>
          </ul>
        </div>
      </div> */}
    </li>
  )
}

export default MobileQuickLinks
