import React from 'react'
import Helmet from 'react-helmet'

export default ({node}) => (
  <>
    {node.cognitoForm && (
      <Helmet>
        <script src='https://services.cognitoforms.com/scripts/embed.js' />
      </Helmet>
    )}
    <div dangerouslySetInnerHTML={{__html: node.code}} />
  </>
)
