/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import {Flex} from '@theme-ui/components'
import BackgroundImage from 'gatsby-background-image'

const renderThemeString = (theme = 'light') => {
  switch (theme) {
    case 'light':
      return 'sections.hpSectionLight'
    case 'paper':
      return 'sections.hpSectionPaper'
    case 'simple':
      return 'sections.hpSectionSimple'
  }
}

const Section2ColFull = ({fluidBgImg, content = <p>no content</p>, theme = 'light', reverse = false}) => {
  return (
    <section sx={{variant: renderThemeString(theme)}}>
      <Flex className='row' sx={{
        flexWrap: 'wrap',
        flexDirection: reverse ? 'row-reverse' : 'row',
        // maxWidth: '7xl',
        'h3': {
          fontFamily: 'body', fontWeight: 'normal', letterSpacing: '-0.1rem', fontSize: 4
        }
      }}>

        <div sx={{width: ['full', 'full', '1/2'], pt: [5, 5, 6], pb: [5, 5, 6], px: [3, 3, 4, 5]}}>

          <div sx={{
            maxWidth: '2xl',
            float: reverse ? 'left' : 'right'
          }}>
            {content}
          </div>
        </div>

        <BackgroundImage className='wtf' as='div' fluid={fluidBgImg}
          sx={{width: ['full', 'full', '1/2'],
            minHeight: '400px',
            display: 'block',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundColor: 'primaryDark'}} />
      </Flex>
    </section>
  )
}

export default Section2ColFull
