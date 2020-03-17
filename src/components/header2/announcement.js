/** @jsx jsx */
import React, { useContext } from 'react' // eslint-disable-line
import {Container, jsx} from 'theme-ui'
// import {Box, Flex} from '@theme-ui/components'
import PortableText from '../portableText'

import {FaTimes} from 'react-icons/fa'

const Announcement = ({closeAlert, alertText}) => {
  return (
    <div sx={{
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      bg: '#ffe636',
      color: 'light',
      textAlign: 'center',
      textTransform: 'none',
      'a': {
        color: 'accent',
        textTransform: 'none',
        textDecoration: 'underline'
      }
    }}>
      <Container sx={{
        maxWidth: 'none!important',
        p: 0,
        pb: 1,
        whiteSpace: ['normal', 'normal', 'nowrap'],
        overflow: 'hidden',
        '@keyframes marquee': {
          '0%': {
            transform: 'translate(0,0)'
          },
          '100%': {
            transform: 'translate(-100%,0)'
          }
        },
        '&:hover p': {
          animationPlayState: 'paused'
        }
      }}>
        <div sx={alertTextStyles}>
          {alertText && <PortableText blocks={alertText} />}
        </div>
      </Container>
      <button onClick={closeAlert} sx={{
        // position: 'absolute',
        px: '2',
        right: '0',
        top: '4px',
        zIndex: '10',
        bg: 'transparent',
        border: 'none',
        color: 'primaryDark',
        cursor: 'pointer'
      }}>
        <FaTimes sx={{fontSize: '1rem'}} />
        <span sx={{display: ['none', 'none', 'inline'], position: 'relative', top: '1px'}}> close</span>
      </button>
    </div>
  )
}

export default Announcement

const alertTextStyles = {
  p: {
    color: 'primaryDark',
    margin: 0,
    fontSize: [1, 1, 2],
    display: 'inline-block',
    pl: [3, 3, '100%'],
    ml: [1],
    animation: ['none', 'none', 'marquee 15s linear infinite']
  }
}
