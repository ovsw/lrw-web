/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled, Container} from 'theme-ui'
// import {Box, Flex} from '@theme-ui/components'

import {graphql} from 'gatsby'
import {mapEdgesToNodes} from '../lib/helpers'
import BlogPostPreviewList from '../components/blog-post-preview-list'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'

export const query = graphql`
  query ArchivePageQuery {
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const ArchivePage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <>
        <GraphQLErrorList errors={errors} />
      </>
    )
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <>
      <SEO title='News' />
      <Container sx={{pt: ['10rem'], pb: 5}}>
        <Styled.h1 sx={{mb: 4}}>News</Styled.h1>
        {postNodes && postNodes.length > 0 && <BlogPostPreviewList nodes={postNodes} />}
      </Container>
    </>
  )
}

export default ArchivePage
