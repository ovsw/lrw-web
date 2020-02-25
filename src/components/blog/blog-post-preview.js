/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled} from 'theme-ui'
import {format} from 'date-fns'
import {Link} from 'gatsby'
import {buildImageObj, cn, getBlogUrl} from '../../lib/helpers'
import {imageUrlFor} from '../../lib/image-url'
import PortableText from '../portableText'

function BlogPostPreview ({title, publishedAt, mainImage, slug, _rawExcerpt}) {
  return (
    <Link to={`/blog/${slug.current}`} sx={wrappingLink}>
      <div sx={imageWrapper}>
        {mainImage && mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(600)
              .height(Math.floor((9 / 16) * 600))
              .auto('format')
              .url()}
            alt={mainImage.alt}
          />
        )}
      </div>
      <div sx={textWrapper}>

        <Styled.h3 as='h2'>{title}</Styled.h3>
        <div className='date'>{format(publishedAt, 'MMMM Do, YYYY')}</div>
        {_rawExcerpt && (
          <div>
            <PortableText blocks={_rawExcerpt} sx={{fontFamily: 'body'}} />
          </div>
        )}
      </div>
    </Link>
  )
}

export default BlogPostPreview

const wrappingLink = {
  display: ['block', 'grid'],
  gridTemplateColumns: '3fr 5fr',
  gridGap: '2.5rem',
  h2: {
    mt: [2, '0'],
    borderBottom: '3px solid',
    borderTop: '3px solid',
    borderColor: 'primary',
    py: 3
  }
}

const imageWrapper = {
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
}

const textWrapper = {
  display: ['block', 'block', 'grid'],
  '.date': {
    fontSize: 1,
    color: 'gray.5',
    my: 2,
    fontFamily: 'mono'
  }
}
