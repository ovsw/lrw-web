/** @jsx jsx */
import React, {useState, useEffect} from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'

const ScrollDownAnimatedIcon = () => {
  const [unscrolled, setUnscrolled] = useState(true)

  useEffect(() => {
    // This gets called after every render, by default
    // (the first one, and every one after that)
    window.addEventListener('scroll', onScroll)

    // If you want to implement componentWillUnmount,
    // return a function from here, and React will call
    // it prior to unmounting.
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })

  const onScroll = () => {
    setUnscrolled(false)
  }
  return (
    <>
      {unscrolled && (
        <div sx={{position: 'relative', pb: 3}}>
          <svg sx={mouseStyles} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 75 130' preserveAspectRatio='xMidYMid meet'>
            <g fill='none' fillRule='evenodd'>
              <rect width='70' height='118' x='2.5' y='3.5' stroke='#ff6644' fill='rgba(255,255,255,1)' strokeWidth='6' rx='36' />
              <circle sx={scrollStyles} cx='36.5' cy='31.5' r='4.5' fill='#ff6644' />
              <line x1='36.5' y1='20' x2='36.5' y2='50' sx={{stroke: 'accent'}} strokeWidth='3' />
            </g>
          </svg>
          <span sx={{position: 'absolute', left: '50%', bottom: '0', transform: 'translateX(-50%)', color: 'light', fontSize: 1}}>scroll</span>
        </div>
      )}
    </>
  )
}

const mouseStyles = {
  maxWidth: '3rem',
  width: '100%',
  height: 'auto',
  zIndex: '500'
}

const scrollStyles = {
  animationName: 'scroll',
  animationDuration: '1.5s',
  animationTimingFunction: 'cubic-bezier(0.650, -0.550, 0.250, 1.500)',
  animationIterationCount: 'infinite',
  transformOrigin: '70% 20.5px',
  willChange: 'transform, opacity',
  opacity: '1',
  '@keyframes scroll': {
    '0%, 20%': {
      transform: 'translateY(0) scaleY(1)'
    },
    '100%': {
      transform: 'translateY(36px) scaleY(2)',
      opacity: '0'
    }
  }
}

export default ScrollDownAnimatedIcon
