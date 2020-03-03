import React from 'react'
import {graphql} from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import GenericPage from '../components/generic-page'
import Layout from '../containers/layout'

// import {toPlainText} from '../lib/helpers'

const GenericPageTemplate = props => {
  const {data, errors} = props //  also location
  const page = data && data.page
  const section = data && (data.page.section || 'Future Families')

  return (
    <Layout>
      {errors && <SEO seoTitle='GraphQL Error' />}
      {page && <SEO title={page.seoTitle || page.title} description={page.seoDescription || ''} image={page.headerImage} />}
      {errors && (
        <div>
          <GraphQLErrorList errors={errors} />
        </div>
      )}

      <GenericPage {...page} section={section} />
    </Layout>
  )
}

export default GenericPageTemplate

export const query = graphql`

  query GenericPageTemplateQuery($id: String!) {
    page: sanityPage(id: {eq: $id}) {
      id
      seoTitle
      seoDescription
      title
      slug {
        current
      }
      section
      headerImage {
        ...SanityImageMeta
        alt
      }
      _rawBody(resolveReferences: {maxDepth: 5})
    }
  }
`
