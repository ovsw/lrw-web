/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container, Styled} from 'theme-ui'
import {Link, useStaticQuery, graphql} from 'gatsby'
import {Flex} from '@theme-ui/components'
import PortableText from '../portableText'
import {format} from 'date-fns'
import Img from 'gatsby-image'

// containers
// import SectionWithSidebar from '../../containers/section-with-sidebar'
// import Section2ColFull from '../../containers/section-2col-full'

const LatestNewsSection = ({posts}) => {
  const post = posts[0]
  return (
    <section sx={{variant: 'sections.hpSectionLight'}}>
      <Container sx={{maxWidth: '7xl', py: 5}}>
        <Flex sx={{
          flexWrap: 'wrap',
          flexDirection: ['column-reverse', 'column-reverse', 'column-reverse', 'row']
        }}>
          <LatestNewsContent post={post} />
          <LatestNewsImage image={post.mainImage} />
        </Flex>
      </Container>
    </section>
  )
}

const LatestNewsContent = ({post}) => {
  return (
    <div sx={{
      width: ['full', 'full', 'full', '50%'],
      pr: [null, null, null, '2rem'],
      pt: [ '1rem', '1rem', '1rem', 0 ],
      p: {lineHeight: 'snug'}
    }}>
      <div sx={{color: 'gray.5', fontFamily: 'mono', fontSize: 1, borderTop: '1px solid', borderLeft: '1px solid', borderColor: 'gray.4', pl: 3, display: 'inline-block', pt: 3, mt: 2}}>{format(post.publishedAt, 'MMMM Do, YYYY')}</div>
      <Styled.h2 as='h2'>{post.title}</Styled.h2>
      {post._rawExcerpt && (
        <div>
          <PortableText blocks={post._rawExcerpt} sx={{fontFamily: 'body'}} />
        </div>
      )}
      <Link to='/' sx={{variant: 'buttons.3D', display: 'inline-block', my: 3, mr: 3, position: 'relative'}}>
        Read More
      </Link>
    </div>
  )
}

const LatestNewsImage = ({image}) => {
  // console.log(image)
  return (
    <Link to='/' sx={{width: ['full', 'full', 'full', '50%']}}>
      <Img fluid={image.asset.fluid} sx={{width: 'full', objectFit: 'cover', height: '100%'}} />
    </Link>
  )
}

export default LatestNewsSection
