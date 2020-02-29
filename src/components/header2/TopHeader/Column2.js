/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {jsx, Container, Styled} from 'theme-ui'
import {Link} from 'gatsby'

const Column2 = () => {
  return (
    <div className='top-right'>
      <a href='https://laurelwood.campintouch.com/ui/forms/application/camper/App' rel='noopener noreferrer' sx={{variant: 'links.topBar'}}target='_blank'>Enroll Now</a>
      <Link to='/blog/' sx={{variant: 'links.topBar'}}>Camp Blog</Link>
      <Link to='/donate-now/' sx={{variant: 'links.topBar'}} rel='noopener noreferrer' target='_blank'>Donate Now</Link>

    </div>
  )
}

export default Column2
