/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {jsx, Container, Styled} from 'theme-ui'
import {Link} from 'gatsby'
// import {useBreakpointIndex} from '@theme-ui/match-media'

const Column1 = () => {
  // const responsiveIndex = useBreakpointIndex()

  return (
    <div className='contact-col'>

      {/* MOBILE ONLY */}
      <div className='mobile-menu' sx={{display: ['block', null, null, 'none'], a: {fontSize: ['0.8rem', 1], lineHeight: 2}}}>
        <ul sx={{variant: 'lists.reset', display: 'flex', justifyContent: 'space-between', li: {display: 'inline-block'}}}>
          <li>
            <Link to='/dates-and-rates/' title='Dates &amp; Rates'><span>Dates &amp; Rates</span></Link>
          </li>
          <li>
            <a href='https://laurelwood.campintouch.com/ui/forms/application/camper/App' title='Enroll Now' rel='noopener noreferrer' target='_blank'><span> Enroll Now</span></a>
          </li>
        </ul>
      </div>
      {/* END MOBILE ONLY */}

      {/* DESKTOP ONLY */}
      <div sx={{display: ['none', null, null, 'block']}}>
        <ul sx={{variant: 'lists.reset', li: {display: 'inline-block'}}}>
          <li>
            <Link to='/dates-and-rates/' sx={{variant: 'links.topBar'}}>Dates &amp; Rates</Link>
          </li>
          <li>
            <Link to='/interactive-map/' sx={{variant: 'links.topBar'}}>Interactive Map</Link>
          </li>
          <li>
            <Link to='/request-info/' sx={{variant: 'links.topBar'}} rel='noopener noreferrer' target='_blank'>Request Info</Link>
          </li>
        </ul>
      </div>
      {/*  DESKTOP ONLY */}

      {/* <div className='enroll-link'>
        <span className='svg-ic'><svg xmlns='http://www.w3.org/2000/svg' id='Layer_1' data-name='Layer 1' viewBox='0 0 18.57 18.59'><title>SDC_Icons_Final_JV</title><polygon points='13.88 17.69 0.9 17.69 0.9 4.7 6.17 4.7 6.17 3.8 0 3.8 0 18.59 14.78 18.59 14.78 11.6 13.88 11.6 13.88 17.69' /><path d='M4.2,14.41,9,13.63l9.52-9.55L14.48,0,5,9.56ZM14.48,1.27,17.3,4.08l-1.59,1.6L12.89,2.86ZM5.8,10,12.26,3.5l2.81,2.81L8.62,12.79l-3.34.53Z' /></svg></span>
        <a href='/' title='Enroll Now'>Enroll Now</a>
      </div> */}
    </div>
  )
}

export default Column1
