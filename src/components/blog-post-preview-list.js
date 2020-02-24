/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled} from 'theme-ui'
import {Link} from 'gatsby'
import BlogPostPreview from './blog-post-preview'

function BlogPostPreviewGrid (props) {
  return (
    <div>
      {props.title && <Styled.h1>{props.title}</Styled.h1>}
      <ul>
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
    </div>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
