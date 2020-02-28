// /** @jsx jsx */
import React from 'react' // eslint-disable-line
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
        <span className='svg-ic'>mailico</span>
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
              <div className='sub-nav-ul'>
                <ul>
                  <li style="background-image: url('http://shibley.829-devl2.com/wp-content/uploads/2018/03/speak-with-director.jpg')">

                    <a href='/' title='speak with a director'>
                      <h2>SPEAK</h2>
                      <h5>WITH A DIRECTOR</h5>
                    </a>
                  </li>
                  <li className='desktop-link' style="background-image: url('https://www.shibleydaycamp.com/wp-content/uploads/2018/04/special-event-kids.jpg')">

                    <a href='https://shibley.campintouch.com/v2/family/inquiryForm.aspx' title='Request A CAMP TOUR '>
                      <h2>Request</h2>
                      <h5>A CAMP TOUR</h5>
                    </a>
                  </li>
                  <li className='mobile-link' style="background-image: url('https://www.shibleydaycamp.com/wp-content/uploads/2018/04/special-event-kids.jpg')">

                    <a href='https://www.shibleydaycamp.com/request-information/' title='Request A CAMP TOUR '>
                      <h2>Request</h2>
                      <h5>A CAMP TOUR</h5>
                    </a>
                  </li>

                  <li className='desktop-link' style="background-image: url('https://www.shibleydaycamp.com/wp-content/uploads/2018/03/off-season-events.jpg')">

                    <a href='https://www.shibleydaycamp.com/summer-camp/year-round-events/' title='Attend YEAR-ROUND EVENTS '>
                      <h2>Attend</h2>
                      <h5>YEAR-ROUND EVENTS</h5>
                    </a>
                  </li>
                  <li className='mobile-link' style="background-image: url('https://www.shibleydaycamp.com/wp-content/uploads/2018/03/off-season-events.jpg')">

                    <a href='https://www.shibleydaycamp.com/summer-camp/year-round-events/' title='Attend YEAR-ROUND EVENTS '>
                      <h2>Attend</h2>
                      <h5>YEAR-ROUND EVENTS</h5>
                    </a>
                  </li>

                  <li className='desktop-link' style="background-image: url('https://www.shibleydaycamp.com/wp-content/uploads/2018/05/crossing-ropes-course-bridge.jpg')">

                    <a href='https://www.shibleydaycamp.com/contact-shibley/' title='Contact PHONE OR EMAIL '>
                      <h2>Contact</h2>
                      <h5>PHONE OR EMAIL</h5>
                    </a>
                  </li>
                  <li className='mobile-link' style="background-image: url('https://www.shibleydaycamp.com/wp-content/uploads/2018/05/crossing-ropes-course-bridge.jpg')">

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
      </div>
      {/* END MOBILE ONLY */}

    </div>
  )
}

export default Column1
