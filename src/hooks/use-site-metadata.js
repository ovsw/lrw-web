import {useStaticQuery, graphql} from 'gatsby'
export const useSiteMetadata = () => {
  const {site} = useStaticQuery(
    graphql`
    query {
      site {
        id
        siteMetadata {
          siteNav {
            title
            slug
            children {
              title
              children {
                title
                slug
                children {
                  title
                  slug
                }
              }
            }
          }
        }
      }
    }
  `
  )
  return site.siteMetadata
}
