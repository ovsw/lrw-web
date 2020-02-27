/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'

import {buildImageObj} from '../../lib/helpers'
import {imageUrlFor} from '../../lib/image-url'

import Img from 'gatsby-image'
import {getFixedGatsbyImage} from 'gatsby-source-sanity'
import clientConfig from '../../../client-config'

export default ({node}) => {
  // console.log(node.asset.metadata.dimensions.width)
  let fixedProps = getFixedGatsbyImage(
    node.asset._id,
    {width: 200, height: 200},
    clientConfig.sanity
  )

  let imageClassName = 'contentAvatarImage'

  return (
    <figure sx={{
      margin: '0',
      float: ['none', 'left'],
      textAlign: 'center',
      borderRadius: '100%',
      shapeOutside: 'circle()',
      marginRight: '2rem',
      shapeMargin: '5px'
    }}>
      <picture sx={{
        display: 'block'
      }}>
        {/* <source media='(min-width: 1600px)' srcSet={imageUrlFor(buildImageObj(node))
          .width(1920)
          .height(Math.floor((5 / 16) * 1920))
          .fit('crop')
          .auto('format')
          .url()} />
        <source media='(min-width: 1280px)' srcSet={imageUrlFor(buildImageObj(node))
          .width(1600)
          .height(Math.floor((6 / 16) * 1600))
          .fit('crop')
          .auto('format')
          .url()} />
        <source media='(min-width: 640px)' srcSet={imageUrlFor(buildImageObj(node))
          .width(769)
          .height(Math.floor((6 / 16) * 769))
          .fit('crop')
          .auto('format')
          .url()} /> */}
        <img
          src={imageUrlFor(buildImageObj(node))
            .width(200)
            .height(200)
            .fit('crop')
            .auto('format')
            .url()}
          alt={node.alt}
          sx={{
            marginTop: '0!important',
            marginBottom: '0!important',
            borderRadius: '100%',
            shapeOutside: 'circle()',
            clipPath: 'circle()',
            border: '3px solid',
            borderColor: '#6ebf34',
            shapeMargin: '3px'
          }}
        />
      </picture>
      {/* <Img fixed={fixedProps} alt={node.alt} sx={{
        borderRadius: '100%'
      }} /> */}
      { node.caption && <figcaption>{node.caption}</figcaption>}
    </figure>
  )
}
