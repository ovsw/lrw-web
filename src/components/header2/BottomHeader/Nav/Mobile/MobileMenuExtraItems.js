/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {jsx, Container, Styled} from 'theme-ui'
// import {Link} from 'gatsby'

const MobileMenuExtraItems = props => {
  return (
    <li className='mobile-li mobile-links' {...props}>
      <div className='col-md-12 header-wrap'>
        <div className='top-col'>
          <div className='contact-col'>
            <div className='enroll-link'>
              <a href='https://shibley.campintouch.com/ui/forms/application/camper/App' title='Enroll Now'>Enroll Now</a>
            </div>
            <div className='contact-link'>
              <a href='tel:5166218777' title='Call Us'>
                <span>Call Us</span> (516) 621-8777</a>
            </div>
          </div>
        </div>
        <div className='top-col'>
          <div className='top-right'>
            <ul>
              <li>
                <a href='https://www.shibleydaycamp.com/blog' title='Blog'>Blog</a>
              </li>
              <li>
                <a href='https://shibley.campintouch.com/v2/login.aspx' title='Login'>Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  )
}

export default MobileMenuExtraItems
