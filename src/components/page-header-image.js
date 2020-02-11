/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'

import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

function GenericPage ({_rawBody, title, section, headerImage = null}) {
  return (
    <>
      {headerImage && (
        <div sx={{
          paddingBottom: ['calc(12 / 16 * 100%)', 'calc(10 / 16 * 100%)', 'calc(6 / 16 * 100%)', 'calc(6 / 16 * 100%)', 'calc(6 / 16 * 100%)', 'calc(6 / 16 * 100%)'],
          position: 'relative',
          backgroundImage: `url(${headerImage.asset.metadata.lqip})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
          <picture
            sx={{
              width: '100%',
              height: '100%'
            }}>
            <source media='(min-width: 1600px)' srcSet={imageUrlFor(buildImageObj(headerImage))
              .width(1920)
              .height(Math.floor((5 / 16) * 1920))
              .fit('crop')
              .auto('format')
              .url()} />
            <source media='(min-width: 1280px)' srcSet={imageUrlFor(buildImageObj(headerImage))
              .width(1600)
              .height(Math.floor((6 / 16) * 1600))
              .fit('crop')
              .auto('format')
              .url()} />
            <source media='(min-width: 640px)' srcSet={imageUrlFor(buildImageObj(headerImage))
              .width(769)
              .height(Math.floor((6 / 16) * 769))
              .fit('crop')
              .auto('format')
              .url()} />
            <img
              src={imageUrlFor(buildImageObj(headerImage))
                .width(400)
                .height(Math.floor((12 / 16) * 400))
                .fit('crop')
                .auto('format')
                .url()}
              alt={headerImage.alt}
              sx={{
                display: 'block',
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                verticalAlign: 'top',
                objectFit: 'cover'
              }}
            />
          </picture>
        </div>
      )}

      {!headerImage &&

        <div sx={{
          paddingBottom: ['calc(12 / 16 * 100%)', 'calc(10 / 16 * 100%)', 'calc(6 / 16 * 100%)', 'calc(6 / 16 * 100%)', 'calc(6 / 16 * 100%)', 'calc(5 / 16 * 100%)'],
          position: 'relative'
        }}>

          <picture
            sx={{
              width: '100%',
              height: '100%'
            }}>
            <source media='(min-width: 1600px)' srcSet='https://via.placeholder.com/1920x600?text=missing+image' />
            <source media='(min-width: 1280px)' srcSet='https://via.placeholder.com/1600x600?text=missing+image' />
            <source media='(min-width: 640px)' srcSet='https://via.placeholder.com/769x288?text=missing+image' />
            <img src='https://via.placeholder.com/400x300?text=missing+image'
              alt='placeholder'
              sx={{
                display: 'block',
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                verticalAlign: 'top',
                objectFit: 'cover'
              }}
            />
          </picture>
        </div>

      }
    </>
  )
}

export default GenericPage
