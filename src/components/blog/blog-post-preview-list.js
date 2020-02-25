/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled, Container} from 'theme-ui'
import {Link} from 'gatsby'
import BlogPostPreview from './blog-post-preview'

function BlogPostPreviewGrid (props) {
  return (
    <Container sx={{pt: ['10rem'], pb: 5}}>
      {props.title && <Styled.h1 sx={{textAlign: 'center', mb: '5'}}>{props.title}</Styled.h1>}
      <ul sx={postsList}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreview {...node} isInList />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </Container>
  )
}

export default BlogPostPreviewGrid

const postsList = {
  margin: '0',
  padding: '0',
  listStyle: 'none',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridColumnGap: '3rem',
  gridRowGap: '3rem',
  a: {
    textDecoration: 'none',
    color: 'text'
  }
}
