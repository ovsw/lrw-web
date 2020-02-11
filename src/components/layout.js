import React from 'react'

import {Global} from '@emotion/core'
import {Layout as ThemeLayout} from 'theme-ui'
import Header from './header'
import Footer from './footer'

// import 'typeface-dosis'
// import 'typeface-amatic-sc'
// import 'typeface-skranji'
// import 'typeface-open-sans'
// import 'typeface-lato'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <ThemeLayout>
    <Global styles={theme => ({
      '*': {boxSizing: 'border-box'},
      body: {
        margin: 0,
        overflow: showNav ? 'hidden' : 'auto'
      },
      img: {
        maxWidth: '100%'
      },
      'a.externalLink::after': {
        content: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==)',
        margin: '0 3px 0 3px',
        color: 'red'
      },
      '.slick-track': {
        display: 'flex',
        '.slick-slide': {
          display: 'flex',
          height: 'auto'
        }
      },
      '.map': {
        height: '900px',
        zIndex: '1',
        background: 'white !important'
      }
    })} />
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />

    <>{children}</>

    <Footer />
  </ThemeLayout>
)

export default Layout
