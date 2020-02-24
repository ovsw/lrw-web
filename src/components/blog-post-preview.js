/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled} from 'theme-ui'
import {format} from 'date-fns'
import {Link} from 'gatsby'
import {buildImageObj, cn, getBlogUrl} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'

function BlogPostPreview (props) {
  return (
    <Link>
      <div>
        {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .auto('format')
              .url()}
            alt={props.mainImage.alt}
          // sx={{
          //   position: 'absolute',
          //   top: '0',
          //   left: '0',
          //   width: '100%',
          //   height: '100%',
          //   objectFit: 'cover'
          // }}
          />
        )}
      </div>
      <div>
        <Styled.h3>{props.title}</Styled.h3>
        {props._rawExcerpt && (
          <div>
            <PortableText blocks={props._rawExcerpt} sx={{fontFamily: 'body'}} />
          </div>
        )}
        <div>{format(props.publishedAt, 'MMMM Do, YYYY')}</div>
      </div>
    </Link>
  )
}

export default BlogPostPreview
