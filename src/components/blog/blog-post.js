import {format, distanceInWords, differenceInDays} from 'date-fns'
/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container} from 'theme-ui'
// import {buildImageObj} from '../../lib/helpers'
// import {imageUrlFor} from '../../lib/image-url'
import {Link} from 'gatsby'
import PortableText from '../portableText'
import PageHeaderImage from '../page-header-image'

import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'

function BlogPost (props) {
  const {_rawBody, categories, title, mainImage, publishedAt, prevSlug, nextSlug} = props

  return (
    <article>
      { mainImage && mainImage.asset && <PageHeaderImage headerImage={mainImage} />}
      <div sx={{variant: 'sections.hpSectionLight'}}>
        <Container sx={{maxWidth: '4xl', pt: 0}}>

          {/* {mainImage && mainImage.asset && (
          <div>
            <img
              src={imageUrlFor(buildImageObj(mainImage))
                .width(1200)
                .height(Math.floor((9 / 16) * 1200))
                .fit('crop')
                .auto('format')
                .url()}
              alt={mainImage.alt}
            />
          </div>
        )} */}
          <div sx={{variant: 'styles'}}>
            <h1>{title}</h1>
            {_rawBody && <PortableText blocks={_rawBody} />}
          </div>
          <aside>
            {publishedAt && (
              <div>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
              </div>
            )}
            {categories && (
              <div >
                <h3>Categories</h3>
                <ul>
                  {categories.map(category => (
                    <li key={category._id}>{category.title}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
          <p>
            { prevSlug !== '' ? <Link sx={{variant: 'buttons.3DAccent', display: 'inline-block', my: 3, mr: 3, position: 'relative'}} to={'/blog/' + prevSlug}><FaChevronLeft /> previous post</Link> : ''}
            { nextSlug !== '' ? <Link sx={{variant: 'buttons.3DAccent', display: 'inline-block', my: 3, mr: 3, position: 'relative'}} to={'/blog/' + nextSlug}>next post <FaChevronRight /></Link> : ''}
          </p>
        </Container>
      </div>
    </article>
  )
}

export default BlogPost
