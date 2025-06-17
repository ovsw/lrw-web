/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {jsx, Container, Styled} from 'theme-ui'
import {Link} from 'gatsby'
import {FaHeart} from 'react-icons/fa'

const Column2 = () => {
  return (
    <div className='top-right'>
      <a href='https://laurelwood.campintouch.com/ui/forms/application/camper/App' rel='noopener noreferrer' sx={{variant: 'links.topBar'}}target='_blank'>Enroll Now</a>
      <Link to='/blog/' sx={{variant: 'links.topBar'}}>Camp Blog</Link>
      <Link 
        to='/donate-now/' 
        sx={{
          variant: 'links.topBar',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          borderRadius: '4px',
          '&:hover': {
            color: 'white',
            backgroundColor: '#e74c3c',
            '& svg': {
              color: 'white',
              animation: 'heartbeat 1s ease-in-out infinite'
            }
          },
          '@keyframes heartbeat': {
            '0%': {
              transform: 'scale(1)'
            },
            '50%': {
              transform: 'scale(1.2)'
            },
            '100%': {
              transform: 'scale(1)'
            }
          }
        }} 
        rel='noopener noreferrer' 
        target='_blank'
      >
        <FaHeart sx={{fontSize: '0.9em', color: '#ff0000'}} />
        {' '}Donate Now
      </Link>

    </div>
  )
}

export default Column2
