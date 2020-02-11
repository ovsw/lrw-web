/** @jsx jsx */
import React, { useState } from 'react' // eslint-disable-line
import {Container, jsx, Styled} from 'theme-ui'
import {Box} from '@theme-ui/components'
import HeroVideoBg from './hero-video-bg'
import ModalVideo from 'react-modal-video'

import {FaPlay} from 'react-icons/fa'

import VideoPoster from '../../images/hero-video-bg.jpg'
import BigLogo from '../../images/lrw-temp-simplified-logo-vector-bw.png'

import '../../../node_modules/react-modal-video/css/modal-video.min.css'

const Hero = () => {
  const [playFullVideo, setPlayFullVideo] = useState(false)

  return (
    <Box as='section' pt={[4, 4, 5, 5, 6]} pb={[2, 3, 4, 6]} mt={5} sx={{
      textAlign: 'center',
      borderBottom: '1px solid lightgrey',
      position: 'relative',
      zIndex: '1',
      // bg: 'gray.2',
      backgroundImage: `url('${VideoPoster}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'top right',
      minHeight: ['auto', 'auto', 'auto', 'calc(100vh - 130px)']
    }} className='Hero'>
      <div sx={{
        bg: 'rgba(0,0,0,.3)',
        display: ['none', 'none', 'block'],
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 1
      }} />
      <div sx={{
        display: ['none', 'none', 'block'],
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 0
      }}>
        <HeroVideoBg playFullVideo={playFullVideo} poster={VideoPoster} />
      </div>
      <Container className='container' sx={{
        maxWidth: '5xl',
        position: 'relative',
        zIndex: 10
        // my: [3, 4, 4, 3, 5]
        // bg: 'rgba(0,0,0,.32)'
      }}>
        <img src={BigLogo} alt='Camp Laurelwood Big Logo' />
        <Styled.h1 sx={{
          textTransform: 'lowercase',
          color: 'white',
          fontWeight: 'normal',
          textShadow: '2px 2px 2px rgba(0,0,0,.5)',
          fontSize: [3, 4],
          fontFamily: 'heading2',
          mb: 0
        }} onClick={() => console.log('click')}>Fun. Friends. Forever.</Styled.h1>
        <p sx={{
          textShadow: '1px 1px 2px rgba(0,0,0,.5)',
          fontSize: [1, 2],
          color: 'light',
          fontWeight: 'light',
          mt: 3,
          maxWidth: '2xl',
          mx: 'auto'
        }}>
          Wonderful experiences await your child at Camp Laurelwood, Connecticut's Premier Jewish Co-ed Overnight Camp. </p>
        <button onClick={() => setPlayFullVideo(true)} sx={{
          variant: 'buttons.3DAccent',
          display: 'inline-block',
          py: 3,
          mt: 4
        }}>
          <FaPlay sx={{position: 'relative', top: '2px'}} /> &nbsp; Watch our Video
        </button>
        <ModalVideo channel='youtube' isOpen={playFullVideo} videoId='gcJfsUztrGE' onClose={() => setPlayFullVideo(!setPlayFullVideo)} />

      </Container>
    </Box>
  )
}

export default Hero
