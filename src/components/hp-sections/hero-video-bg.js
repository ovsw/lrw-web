/** @jsx jsx */
import {jsx} from 'theme-ui'
import React, { useRef, useEffect } from 'react' // eslint-disable-line
import VideoCover from 'react-video-cover'

class HeroVideoBg extends React.Component {
  componentDidUpdate (prevProps) {
    if (this.props.playFullVideo) {
      this.videoRef.pause()
    } else {
      this.videoRef.play()
    }
  }

  render () {
    const videoOptions = {
      src: 'https://lrw-ac97.kxcdn.com/laurelwood-med-res-bg-video.mp4',
      autoPlay: true,
      loop: true,
      muted: true,
      poster: '',
      ref: videoRef => {
        this.videoRef = videoRef
      }

    }

    return (
      <div sx={{
        '&::after': {
          content: '""',
          bg: 'rgba(0,0,0,0.3)',
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0'
        }
      }}>
        <VideoCover videoOptions={videoOptions} />
      </div>

    )
  }
}

export default HeroVideoBg
