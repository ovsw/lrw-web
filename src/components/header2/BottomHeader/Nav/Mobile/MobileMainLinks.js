/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {jsx, Container, Styled} from 'theme-ui'
// import {Link} from 'gatsby'

// icons
import {FiPhoneCall, FiMail} from 'react-icons/fi'

const MobileMainReplacement = props => {
  return (
    // <div className='mobile-info' >
    <ul {...props} sx={{
      variant: 'lists.reset',
      'li, a': {
        display: 'flex'
      },
      'a': {
        px: 3,
        textDecoration: 'none',
        color: 'secondary'
      },
      span: {
        margin: 'auto',
        '@media (max-width: 575px)': {
          fontSize: '0px'
        }
      },
      svg: {
        fontSize: '2',
        position: 'relative',
        top: '.1rem'
      }
    }}>
      <li sx={{borderRight: '1px solid', borderColor: 'muted'}}>
        <a href='tel:203-421-3736' title='Call Us'>
          <span><FiPhoneCall /> Call Us</span>
        </a>
      </li>
      <li>
        <a href='mailto:info@camplaurelwood.com' title='Email Us'>

          <span> <FiMail /> Email Us</span>
        </a>
      </li>
    </ul>
    // </div>
  )
}

export default MobileMainReplacement
