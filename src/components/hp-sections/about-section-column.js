/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled, Flex} from 'theme-ui'
// import {Box, Flex} from '@theme-ui/components'
import Icon from '../icon'

const Column = ({title, text, icon}) => {
  return (
    <Flex sx={{
      variant: 'links.programListLink',
      flexDirection: 'column',
      textAlign: 'center',
      boxShadow: '0 0 6px 2px rgba(0,0,0,0.1)',
      p: 3,
      border: '1px dashed',
      borderColor: 'primary',
      borderRadius: 'lg'
    }}>
      <div sx={{
        fontSize: 6,
        color: 'primary',
        borderRadius: '1000px'
      }}>
        <div className='iconBg' sx={{
          borderRadius: '1000px',
          width: '6rem',
          height: '6rem',
          bg: 'background',
          border: '1px dashed red',
          borderColor: 'white',
          p: '1.5rem',
          color: 'primaryDark',
          mx: 'auto',
          transition: 'all 0.1s ease-out'
        }}>
          <Icon symbol={icon} />
        </div>
      </div>
      <Styled.h3 sx={{fontWeight: 'bold', my: 0, color: 'accent'}}>{title}</Styled.h3>
      <Styled.p sx={{fontSize: '0.9rem', color: 'textMuted', mb: '0', lineHeight: '1.8', px: [0, 0, 0, 2], pb: 2}}>{text}</Styled.p>
    </Flex >
  )
}

export default Column
