// /** @jsx jsx */
import React from 'react' // eslint-disable-line
// import {jsx, Container, Styled} from 'theme-ui'
// import {Link} from 'gatsby'

const MobileMenuToggle = () => {
  return (<div className='wpmegamenu-toggle wpmega-enabled-menutoggle' data-responsive-breakpoint='910'>
    <div className='wp-mega-toggle-block'>
      <div className='wpmega-closeblock' style='display: none;'><i className='dashicons dashicons-no' /></div>
      <div className='wpmega-openblock'><i className='dashicons dashicons-editor-justify' /></div>
      <div className='menutoggle'>Menu</div>
    </div>
  </div>)
}

export default MobileMenuToggle
