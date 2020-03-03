/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'

import {FaFacebookSquare, FaYoutubeSquare, FaInstagram} from 'react-icons/fa'

const SocialLinks = () => {
  return (
    <ul sx={{
      variant: 'lists.reset',
      textAlign: ['right', 'center'],
      mt: [5, 5, 3],
      mb: [5, 5, 4],
      li: {
        display: 'inline-block',
        mr: 4
      },
      a: {
        display: 'inline-block',
        fontSize: 7,
        '& svg': {
          bg: 'white',
          borderRadius: '5px'
        }
      }
    }}>
      <li><a title='Camp Laurelwood Instagram page' href='https://www.instagram.com/camplaurelwood/' sx={{color: '#8134AF'}} target='_blank' rel='noopener noreferrer'><FaInstagram /></a></li>
      <li><a title='Camp Laurelwood Facebook page' href='https://www.facebook.com/CampLaurelwood/' sx={{color: '#3b5998'}} target='_blank' rel='noopener noreferrer'><FaFacebookSquare /></a></li>
      <li><a title='Camp Laurelwood YouTube channel' href='https://www.youtube.com/channel/UC_Kr62M5Wdnoe6U3YLXoFhg' target='_blank' sx={{color: '#ff0000'}} rel='noopener noreferrer'><FaYoutubeSquare /></a></li>
      {/* <li><a href='https://twitter.com/camp_laurelwood' sx={{color: '#00acee'}} target='_blank' rel='noopener noreferrer'><FaTwitterSquare /></a></li> */}
    </ul>
  )
}

export default SocialLinks
