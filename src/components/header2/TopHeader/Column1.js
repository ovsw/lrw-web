/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {jsx, Container, Styled} from 'theme-ui'
// import {Link} from 'gatsby'

const Column1 = () => {
  return (
    <div className='contact-col'>

      {/* <div className='enroll-link'>
        <span className='svg-ic'><svg xmlns='http://www.w3.org/2000/svg' id='Layer_1' data-name='Layer 1' viewBox='0 0 18.57 18.59'><title>SDC_Icons_Final_JV</title><polygon points='13.88 17.69 0.9 17.69 0.9 4.7 6.17 4.7 6.17 3.8 0 3.8 0 18.59 14.78 18.59 14.78 11.6 13.88 11.6 13.88 17.69' /><path d='M4.2,14.41,9,13.63l9.52-9.55L14.48,0,5,9.56ZM14.48,1.27,17.3,4.08l-1.59,1.6L12.89,2.86ZM5.8,10,12.26,3.5l2.81,2.81L8.62,12.79l-3.34.53Z' /></svg></span>
        <a href='https://shibley.campintouch.com/ui/forms/application/camper/App' title='Enroll Now'>Enroll Now</a>
      </div> */}

      {/* DESKTOP ONLY */}
      <div className='contact-link'>
        <a href='tel:5166218777' title='Call Us'>
          <span>Call Us</span> (516) 621-8777</a>
      </div>
      {/*  DESKTOP ONLY */}

      {/* MOBILE ONLY */}
      <div className='mobile-menu'>
        <div className='sub-nav'>
          <ul>
            <li><a href='https://www.shibleydaycamp.com/dates-enrollment/' title='Dates &amp; Rates'><span>Dates &amp; Rates</span></a></li>
            <li><a href='https://shibley.campintouch.com/ui/forms/application/camper/App' title='Enroll Now'><span>Enroll Now</span></a></li>
            <li>
              <a href='/' title='Request Info' data-hover='CLOSE'><span>Request Info</span></a>
            </li>
          </ul>
        </div>
      </div>
      {/* END MOBILE ONLY */}

    </div>
  )
}

export default Column1
