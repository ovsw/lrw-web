// TODO: add mobile styles

/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import {Flex} from '@theme-ui/components'
import NavLink from '../../../elements/nav-link'

class Megamenu extends React.Component {
  constructor (props) {
    super(props)

    this.toggleMegaMenu = () => {
      this.setState(state => ({megaMenuVisible: !state.megaMenuVisible}))
    }

    this.showMenu = () => {
      clearTimeout(this.menuTimeout)
      this.setState({megaMenuVisible: true})
    }
    this.hideMenu = () => {
      this.menuTimeout = setTimeout(() => {
        this.setState({megaMenuVisible: false})
      }, 150)
    }

    this.onNavClick = () => {
      this.hideMenu()
    }

    this.state = {
      megaMenuVisible: false
    }
  }

  render () {
    const {menuTitle, mainLink, menuColumns} = this.props
    const {megaMenuVisible} = this.state
    return (
      <>
        <NavLink
          onTouchStart={this.toggleMegaMenu}
          onMouseEnter={this.showMenu}
          onMouseLeave={this.hideMenu}
          role='link'
          tabIndex='-1'
          to={mainLink}
          sx={navMainItem}
        >
          <span>{menuTitle}</span>
        </NavLink>
        <div
          onMouseEnter={this.showMenu}
          onMouseLeave={this.hideMenu}
          sx={{
            display: megaMenuVisible ? 'block' : 'none',
            position: 'absolute',
            top: '3.7rem',
            textAlign: 'left',
            bg: 'background',
            color: 'white',
            zIndex: 900,
            boxShadow: '3px 3px 6px rgba(0,0,0,0.2)'
          }}
        >
          <Flex className='MenuColumnsContainer'>
            {menuColumns.map(column => (
              <React.Fragment key={column.title}>
                {column.children.length !== 0 &&
                <ul sx={{
                  variant: 'lists.reset',
                  py: 3,
                  px: '1.5rem',
                  '&:nth-of-type(2)': {
                    borderWidth: 0,
                    borderLeftWidth: '1px',
                    borderStyle: 'dashed',
                    borderLeftColor: 'gray.5',
                    pl: 4
                  }
                }}>
                  {column.children.map(item => (
                    <li key={item.slug} sx={{py: 1}}>
                      <NavLink to={item.slug} onClick={this.onNavClick} sx={{variant: 'links.navSub'}}>
                        {item.title}
                      </NavLink>
                      {item.children !== undefined && item.children.length > 0 && (
                        <ul sx={{color: 'brown'}}>
                          {item.children.map(child => (
                            <li key={child.slug}>
                              <NavLink to={child.slug} onClick={this.onNavClick} sx={{variant: 'links.navSub2'}}>
                                {child.title}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
                }
              </React.Fragment>
            ))}
          </Flex>
        </div>
      </>
    )
  }
}

export default Megamenu

const navMainItem = {
  color: 'secondary',
  letterSpacing: '0.05rem',
  mt: '7px',
  pb: '5px',
  position: 'relative',
  overflow: 'hidden',
  display: 'inline-block',
  transition: '.3s ease-out .1s',
  textTransform: 'uppercase',
  textDecoration: 'none',
  fontSize: [1, 1, '22px', 4],
  fontFamily: 'heading',
  fontWeight: 'bold',
  '& span': {
    // '&::before': {
    //   width: '100%',
    //   height: '2px',
    //   background: '#8a4c2d',
    //   content: '""',
    //   position: 'absolute',
    //   left: '0',
    //   top: '0',
    //   transition: '.3s',
    //   transform: 'translateX(-100%)'
    // },
    '&::after': {
      width: '30px',
      height: '4px',
      borderRadius: '999px',
      background: '#8a4c2d',
      content: '""',
      position: 'absolute',
      left: '50%',
      bottom: '0',
      transition: '.3s',
      transform: 'translateX(-50%)'
    }
  },
  // '&::before': {
  //   width: '2px',
  //   height: '100%',
  //   background: '#8a4c2d',
  //   content: '""',
  //   position: 'absolute',
  //   left: '0',
  //   top: '0',
  //   transition: '.3s',
  //   transform: 'translateY(-100%)'
  // },
  // '&::after': {
  //   width: '2px',
  //   height: '100%',
  //   background: '#8a4c2d',
  //   content: '""',
  //   position: 'absolute',
  //   right: '0',
  //   bottom: '0',
  //   transition: '.3s',
  //   transform: 'translateY(100%)'
  // },
  '&:hover': {
    '&::before, &::after': {
      transform: 'translateX(0)'
    },
    '& span': {
      '&::before': {
        transform: 'translateY(0)'
      },
      '&::after': {
        transform: 'translateY(0)',
        width: '100%',
        left: '0'
      }
    }
  }
}
