/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
import Layout from './src/containers/layout'

require('typeface-amatic-sc')
require('typeface-open-sans')
require('typeface-skranji')

const wrapPageElement = ({element, props}) => {
  return <Layout {...props}>{element}</Layout>
}

export {wrapPageElement}
