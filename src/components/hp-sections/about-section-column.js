/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled} from 'theme-ui'
// import {Box, Flex} from '@theme-ui/components'
import BackgroundImage from 'gatsby-background-image'
import Icon from '../icon'

import TestImage from '../../images/swim-lessons.jpg'

const Column = ({title, text, icon, bgImage}) => {
  const backgroundFluidImageStack = [
    bgImage,
    `linear-gradient(
      rgba(62, 155, 0, 0.7) 0%, 
      rgba(62, 155, 0, 0.86) 80%
    )`
  ].reverse()
  return (
    <div sx={{
      variant: 'borders.drawn',
      p: 2,
      position: 'relative',
      // border: '1px dashed',
      // borderColor: 'primary',
      // borderRadius: 'lg',
      display: 'flex',
      textAlign: 'center'
      // '&::after': {
      //   content: '""',
      //   width: '197px',
      //   height: '197px',
      //   position: 'absolute',
      //   top: 0,
      //   left: 0,
      //   background: `url(${TopLeftLaurel}) no-repeat top right`,
      //   zIndex: '-1'
      // }
    }}>

      <BackgroundImage fluid={backgroundFluidImageStack} sx={{background: `,url(${TestImage})`,
        backgroundSize: 'cover',
        p: 4
      }}>
        <Styled.h3 sx={{my: 'auto', fontWeight: 'bold', color: 'white', lineHeight: 3, fontFamily: 'heading', fontSize: '3rem!important'}}>
          <Icon symbol={icon} sx={{color: 'white', height: '2em', verticalAlign: 'middle', pr: 3}} /> {title}
        </Styled.h3>
        <Styled.p sx={{
          gridColumnStart: '1',
          gridColumnEnd: '3',
          fontSize: 2,
          mb: '0',
          lineHeight: '1.8',
          px: [0, 0, 0, 2],
          pb: 2,
          fontStyle: 'italic',
          color: 'white'
        }}>{text}</Styled.p>
      </BackgroundImage>
    </div >
  )
}

export default Column
