/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container, Styled} from 'theme-ui'
import {Link} from 'gatsby'
import {Flex} from '@theme-ui/components'
import PortableText from '../portableText'
import {format} from 'date-fns'
import Img from 'gatsby-image'

import {GiNewspaper} from 'react-icons/gi'

// containers
// import SectionWithSidebar from '../../containers/section-with-sidebar'
// import Section2ColFull from '../../containers/section-2col-full'

const LatestNewsSection = ({posts}) => {
  const post = posts[0]
  return (
    <section sx={{variant: 'sections.hpSectionLight'}}>
      <Container sx={{maxWidth: '7xl'}}>
        <h2 sx={{variant: 'headings.mainSectionHeading'}}>
          <Link to='/blog/' sx={{color: 'primaryDark', textDecoration: 'none'}} >
            <GiNewspaper sx={{position: 'relative', bottom: '0.6rem'}} /> From Our Blog</Link>
        </h2>
        <Flex sx={{
          flexWrap: 'wrap',
          flexDirection: ['column', 'column', 'column', 'row']
        }}>
          <div sx={{width: ['full', 'full', 'full', '50%']}}>
            <LatestNewsImage image={post.mainImage} link={`/news/${post.slug.current}`} />
          </div>
          <LatestNewsContent post={post} />
        </Flex>
      </Container>
      {/* <Container sx={{textAlign: 'center'}}>
        <Link to='/blog/' sx={{variant: 'buttons.3D'}}>More from our Blog</Link>
      </Container> */}
    </section>
  )
}

const LatestNewsContent = ({post}) => {
  return (
    <div sx={{
      width: ['full', 'full', 'full', '50%'],
      px: [0, null, '2rem'],
      'p': {lineHeight: 'snug'}
    }}>
      <Styled.h3 sx={{
        mt: 0,
        borderBottom: '3px solid',
        borderTop: '3px solid',
        borderColor: 'primary',
        py: 3
      }}>{post.title}</Styled.h3>
      <div sx={{color: 'muted', fontFamily: 'mono', fontSize: 1, display: 'inline-block', mt: 2}}>{format(post.publishedAt, 'MMMM Do, YYYY')}</div>
      {post._rawExcerpt && (
        <div sx={{color: 'muted'}}>
          <PortableText blocks={post._rawExcerpt} sx={{fontFamily: 'body'}} />
        </div>
      )}
      <Link to={`/news/${post.slug.current}`} sx={{variant: 'buttons.3DAccent', display: 'inline-block', my: 3, mr: 3, position: 'relative'}}>
        Read More
      </Link>
    </div>
  )
}

const LatestNewsImage = ({image, link}) => {
  // console.log(image)
  return (
    <Link to={link} sx={{width: ['full', 'full', 'full', '50%']}}>
      <Img fluid={image.asset.fluid} sx={{width: 'full', objectFit: 'cover', height: '100%'}} />
    </Link>
  )
}

export default LatestNewsSection
