/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {Link} from 'gatsby'
import styled from '@emotion/styled'

import isAbsoluteURL from 'is-absolute-url'
import {jsx} from 'theme-ui'
import Figure from './Figure'
import AvatarImage from './AvatarImage'
import File from './File'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import Table from './Table'
import Embed from './Embed'
import DatesRatesLinks from './DatesRatesLinks'
import getVideoId from 'get-video-id'
import VimeoPlayer from '@u-wave/react-vimeo'
import FaqBlock from './FaqBlock'

import {GoLinkExternal} from 'react-icons/go'

const Vimeo = styled(VimeoPlayer)`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 0;
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const YTopts = {
  width: '100%',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    modestbranding: 1,
    rel: 0
  }
}

const button = props => {
  const url = props.mark.href
  const isExternal = isAbsoluteURL(url)
  if (isExternal) {
    return <a href={url} rel='noopener noreferrer' target='_blank' className='contentButton'>{props.children}  <GoLinkExternal /></a>
  } else {
    return <Link to={url} activeClassName='active' className='contentButton'>{props.children}</Link>
  }
}

const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    mainImage: Figure,
    avatarImage: AvatarImage,
    localFile: File,

    youtube: ({node}) => {
      const {url} = node
      const id = getYouTubeId(url)
      return (<YouTube videoId={id} opts={YTopts} />)
    },
    vimeo: ({node}) => {
      const {url} = node
      if (url) {
        const {id} = getVideoId(url)
        return (<Vimeo video={id} className='fuuuuu' style={{textAlign: 'center', width: '100%'}} />)
      }
      return <p>problem</p>
    },
    mytable: Table,
    iframeEmbed: Embed,
    datesRatesLinks: DatesRatesLinks,
    faqBlock: FaqBlock
  },
  marks: {
    button,
    link: ({mark, children}) => {
      // Read https://css-tricks.com/use-target_blank/
      const {blank, href} = mark
      const isExternal = isAbsoluteURL(href)
      if (isExternal) {
        return blank
          ? <a href={href} className='externalLink' rel='noopener noreferrer' target='_blank'>{children}</a>
          : <a href={href}>{children}</a>
      } else {
        return <Link to={href}>{children}</Link>
      }
    }
  }
}

export default serializers
