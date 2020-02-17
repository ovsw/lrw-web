/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'

import {FaFacebookSquare, FaYoutubeSquare, FaTwitterSquare, FaInstagram} from 'react-icons/fa'

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
      <li><a href='https://www.instagram.com/camplaurelwood/' sx={{color: '#8134AF'}} rel='noopener noreferrer'><FaInstagram /></a></li>
      <li><a href='https://www.facebook.com/CampLaurelwood/' sx={{color: '#3b5998'}} rel='noopener noreferrer'><FaFacebookSquare /></a></li>
      <li><a href='https://www.youtube.com/channel/UC_Kr62M5Wdnoe6U3YLXoFhg' sx={{color: '#ff0000'}} rel='noopener noreferrer'><FaYoutubeSquare /></a></li>
      <li><a href='https://twitter.com/camp_laurelwood' sx={{color: '#00acee'}} rel='noopener noreferrer'><FaTwitterSquare /></a></li>
    </ul>
  )
}

export default SocialLinks
