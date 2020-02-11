/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled} from 'theme-ui'
import {format} from 'date-fns'
import {Link} from 'gatsby'
import {buildImageObj, cn, getBlogUrl} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'

import styles from './blog-post-preview.module.css'

function BlogPostPreview (props) {
  return (
    <Link
      className={styles.inList}
      to={`/news/${props.slug.current}/`}
    >
      <div className={styles.leadMediaThumb}>
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
      <div className={styles.text}>
        <Styled.h3>{props.title}</Styled.h3>
        {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <PortableText blocks={props._rawExcerpt} sx={{fontFamily: 'body'}} />
          </div>
        )}
        <div className={styles.date}>{format(props.publishedAt, 'MMMM Do, YYYY')}</div>
      </div>
    </Link>
  )
}

export default BlogPostPreview
