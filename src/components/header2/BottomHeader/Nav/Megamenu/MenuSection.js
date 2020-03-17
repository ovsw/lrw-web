/** @jsx jsx */
import React, {useState, useEffect} from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
// import {jsx, Container, Styled} from 'theme-ui'
import {Link} from 'gatsby'

import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'

import MenuSectionColumnsWrapper from './MenuSectionColumnsWrapper'
import MenuBGImage from '../../../../../images/menu-bg.png'

class MenuSection extends React.Component {
  constructor (props) {
    super(props)

    this.toggleMegaMenuOnTouch = (e) => {
      e.preventDefault()
      this.setState(state => ({megaMenuVisible: !state.megaMenuVisible}))
    }
    this.toggleMegaMenuOnClick = () => {
      this.setState(state => ({megaMenuVisible: !state.megaMenuVisible}))
    }

    this.onHoverEnterMainItem = (e) => {
      if (!this.state.touchDevice) {
        // if (this.props.breakPointIndex > 2) { // fix for hover opening up the sub-menu even on hamburger nav, if on a non-touch device
        clearTimeout(this.menuTimeout)
        this.setState({megaMenuVisible: true})
        // }
      }
    }
    this.onHoverExitMainItem = () => {
      if (!this.state.touchDevice) {
        this.menuTimeout = setTimeout(() => {
          this.setState({megaMenuVisible: false})
        }, 50)
      }
    }

    this.onNavClick = () => {
      this.setState({megaMenuVisible: false})
    }

    this.state = {
      megaMenuVisible: false,
      touchDevice: false
    }
  }

  componentDidMount () {
    if (typeof window !== 'undefined') {
      this.setState({touchDevice: ('ontouchstart' in window)})
    }
  }

  render () {
    const {navData: {title = 'About Us', slug, children: subMenuColumns}, logoSpace = false, justifyContent} = this.props
    const {megaMenuVisible} = this.state

    return (
      <>
        {/* main menu item. on mobile it's very quiet, just another li. on desktop it needs to be spaced out correctly to fit logo. */}
        {/*  STATE/FUNCTION: it acts as the hover trigger for the sub-menu, on both mobile and desktop */}
        <li onMouseEnter={this.onHoverEnterMainItem} onMouseLeave={this.onHoverExitMainItem} className='menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children wpmega-menu-megamenu wpmega-show-arrow wpmm-menu-align-left wpmega-hide-menu-icon wpmega-horizontal-full-width menu-item-8 menu-item-depth-0 no-dropdown' sx={{

          mr: [null, null, null, logoSpace ? '150px' : '0', logoSpace ? '200px' : '0'],
          borderBottom: ['1px solid', null, null, 'none'],
          borderColor: 'gray.3',
          display: ['block', null, null, 'inline-block']
        }}>
          <Link to={slug} className='menuTitle'
            onTouchEnd={this.toggleMegaMenuOnTouch}
            sx={{
              px: [1, 2, null, '2rem', '2.5rem'],
              display: 'inline-block',
              fontFamily: 'heading',
              fontSize: [3, 4],
              fontWeight: 'bold',
              letterSpacing: ['0.012em', null, null, '0'],
              py: 3,
              textDecoration: 'none',
              color: [megaMenuVisible ? 'accent' : 'dark', null, 'dark'],
              position: 'relative',
              '&::after': {
                content: '""',
                display: ['none', null, null, 'block'],
                width: '80%',
                bg: 'accent',
                height: '8px',
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transition: 'all 100ms ease',
                opacity: megaMenuVisible ? '1' : '0',
                transform: megaMenuVisible ? 'scaleX(1) translateX(-50%) translateY(0)' : 'scaleX(0) translateY(13px)',
                transformOrigin: 'top left'
                // borderRadius: ' 5px  5px 0 0 '
              }
            }}
          >
            <span>{title}</span> {megaMenuVisible ? <IoIosArrowUp sx={{fontSize: 1, position: 'relative'}} /> : <IoIosArrowDown sx={{fontSize: 1, position: 'relative'}} />}
          </Link>
          {/* .wpmm-sub-menu-wrap:  initially hidden on all sizes! when visible, in mobile it stays nice and quiet, with no styles. on desktop this is the wide submenu wrapper that only appears on hover over it's parent main menu item, holding the hover-expanded main submenu, including any background. */}
          <div className='wpmm-sub-menu-wrap' sx={{
            // display: ['block', null, null, 'block'],
            maxHeight: [megaMenuVisible ? '1000px' : '0px', null, null, '1000px'],
            overflow: 'hidden',
            transformOrigin: 'top center',
            transform: [null, null, null, megaMenuVisible ? 'scaleY(1)' : 'scaleY(0)'],
            visibility: [null, null, null, megaMenuVisible ? 'visible' : 'hidden'],
            opacity: [null, null, null, megaMenuVisible ? '1' : '0'],
            transition: 'all 100ms ease',
            background: [null, null, null, `#d2edf6 url(${MenuBGImage}) repeat-x center center`],
            // positioning
            position: [null, null, null, 'absolute'],
            top: '4.65rem', //  FYI: 6.85 is the limit at which there's no space between this and the triggering parent
            right: '0',
            // sizing
            width: [null, null, null, '100%'],
            // spacing
            a: {
              color: 'dark',
              display: 'block',
              fontSize: '15px',
              fontWeight: 'bold',
              textDecoration: 'none',
              // bg: 'red',
              pb: '12px',
              '&:hover': {
                color: 'accent'
              }
            }
          }}>
            {/* .wpmm-sub-menu-wrapper: in mobile it stays completely quiet. In desktop this is the centered container for the hover-expanded main submenu */}
            <div
              className='wpmm-sub-menu-wrapper wpmm-menu0' sx={{maxWidth: '7xl', mx: 'auto'}} >
              <MenuSectionColumnsWrapper subMenuColumns={subMenuColumns} onNavClick={this.onNavClick} justifyContent={justifyContent} />
            </div>
          </div>
        </li>
      </>
    )
  }
}

export default MenuSection
