/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'

import {FaFacebookSquare, FaYoutubeSquare, FaTwitterSquare} from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <ul sx={{
      variant: 'lists.reset',
      mb: 3,
      li: {
        display: 'inline-block',
        mr: 2
      },
      a: {
        display: 'inline-block',
        fontSize: 5,
        '& svg': {
          bg: 'white',
          borderRadius: '5px'
        }
      }
    }}>
      <li><a href='https://facebook.com' sx={{color: '#3b5998'}} rel='noopener noreferrer'><FaFacebookSquare /></a></li>
      <li><a href='https://youtube.com' sx={{color: '#ff0000'}} rel='noopener noreferrer'><FaYoutubeSquare /></a></li>
      <li><a href='https://twitter.com' sx={{color: '#00acee'}} rel='noopener noreferrer'><FaTwitterSquare /></a></li>
    </ul>
  )
}

export default SocialLinks
