// /** @jsx jsx */
import React from 'react' // eslint-disable-line
// import {jsx, Container, Styled} from 'theme-ui'
// import {Link} from 'gatsby'

const MainQuickLinks = () => {
  return (
    <div className='sub-nav'>
      <ul>
        <li><a href='https://www.shibleydaycamp.com/dates-enrollment/' title='Dates &amp; Rates'><span>Dates &amp; Rates</span></a></li>
        <li><a href='https://shibley.campintouch.com/ui/forms/application/camper/App' title='Enroll Now'><span>Enroll Now</span></a></li>
        <li>
          <a href='/' title='Request Info' data-hover='CLOSE'><span>Request Info</span></a>
          <div className='sub-nav-ul'>
            <ul>
              <li>

                <a href='/' onClick="olark('api.box.expand')" title='title=' speak='speak with a director'>
                  <h2>SPEAK</h2>
                  <h5>WITH A DIRECTOR</h5>
                </a>
              </li>
              <li className='desktop-link'>

                <a href='https://shibley.campintouch.com/v2/family/inquiryForm.aspx' title='Request A CAMP TOUR '>
                  <h2>Request</h2>
                  <h5>A CAMP TOUR</h5>
                </a>
              </li>
              <li className='mobile-link'>

                <a href='https://www.shibleydaycamp.com/request-information/' title='Request A CAMP TOUR '>
                  <h2>Request</h2>
                  <h5>A CAMP TOUR</h5>
                </a>
              </li>

              <li className='desktop-link'>

                <a href='https://www.shibleydaycamp.com/summer-camp/year-round-events/' title='Attend YEAR-ROUND EVENTS '>
                  <h2>Attend</h2>
                  <h5>YEAR-ROUND EVENTS</h5>
                </a>
              </li>
              <li className='mobile-link'>

                <a href='https://www.shibleydaycamp.com/summer-camp/year-round-events/' title='Attend YEAR-ROUND EVENTS '>
                  <h2>Attend</h2>
                  <h5>YEAR-ROUND EVENTS</h5>
                </a>
              </li>

              <li className='desktop-link'>

                <a href='https://www.shibleydaycamp.com/contact-shibley/' title='Contact PHONE OR EMAIL '>
                  <h2>Contact</h2>
                  <h5>PHONE OR EMAIL</h5>
                </a>
              </li>
              <li className='mobile-link'>

                <a href='https://www.shibleydaycamp.com/contact-shibley/' title='Contact PHONE OR EMAIL '>
                  <h2>Contact</h2>
                  <h5>PHONE OR EMAIL</h5>
                </a>
              </li>

            </ul>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default MainQuickLinks
