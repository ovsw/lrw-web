/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled} from 'theme-ui'

const TestimonialItem = ({name = 'missing name', text = 'missing content'}) => {
  return (
    <div sx={{
      variant: 'borders.drawn',
      px: 3,
      py: 4,
      mx: 2,
      borderRadius: 'lg',
      bg: 'light',
      height: '100%',
      boxShadow: '0 0 12px -2px rgba(0,0,0,0.1)'
    }}>
      <p sx={{mt: 0, fontStyle: 'italic', lineHeight: 'normal', fontSize: [1, 1, 1, 1]}}>"{text}"</p>
      <h5 as='h3' sx={{color: 'dark', fontSize: '4', m: 0, fontFamily: 'heading'}}>~{name}</h5>
    </div>
  )
}

export default TestimonialItem
