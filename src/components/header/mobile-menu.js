/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'

import {Flex} from '@theme-ui/components'
import NavLink from '../../elements/nav-link'

class MobileMenu extends React.Component {
  constructor (props) {
    super(props)

    this.toggleSubMenu = () => {
      // console.log('toggled')
      this.setState(state => ({subMenuVisible: !state.subMenuVisible}))
    }

    // this.showSubMenu = () => {
    //   clearTimeout(this.menuTimeout)
    //   this.setState({subMenuVisible: true})
    // }
    this.hideSubMenu = () => {
      this.menuTimeout = setTimeout(() => {
        this.setState({subMenuVisible: false})
      }, 50)
    }

    this.onNavClick = () => {
      this.props.onHideNav()
      this.hideSubMenu()
    }

    this.state = {
      subMenuVisible: false
    }
  }

  render () {
    const {menuTitle, mainLink, menuColumns, onHideNav} = this.props
    const {subMenuVisible} = this.state

    return (
      <Flex as='li' sx={{
        flexWrap: 'wrap',
        borderBottom: '1px solid',
        borderColor: 'primaryLight',
        justifyContent: 'space-between'
      }}>
        <NavLink
          role='link'
          tabIndex='-1'
          to={mainLink}
          onClick={onHideNav}
          sx={{
            variant: 'links.navMain',
            color: 'white',
            px: 2
          }}
        >
          {menuTitle}
        </NavLink>
        {menuColumns !== undefined && menuColumns.length > 0 &&
          <button
            onClick={this.toggleSubMenu}
            sx={{
              variant: 'buttons.mobileMenuExpand',
              color: 'white',
              bg: subMenuVisible ? 'primaryHover' : 'primary'
            }}
          >{subMenuVisible ? '-' : '+'}
          </button>
        }
        <div
          sx={{
            maxHeight: subMenuVisible ? '1000px' : '0',
            transition: 'all 400ms ease-out',
            overflow: 'hidden',
            textAlign: 'left',
            bg: 'primaryDark',
            color: 'white',
            zIndex: 900,
            width: 'full'
          }}
        >
          <div className='MenuColumnsContainer' menuTitle={menuTitle} sx={{
            display: ['block', 'flex']
          }}>
            {menuColumns.map(column => (
              <ul key={column.title} sx={{
                variant: 'lists.reset',
                p: [0, 4],
                pt: [0, 3],
                '&:nth-of-type(2)': {
                  borderWidth: 0,
                  borderLeftWidth: '1px',
                  borderStyle: 'dashed',
                  borderLeftColor: 'gray.2',
                  pl: [0, 4]
                }
              }}>
                {column.children.map(item => (
                  <li key={item.slug} sx={{
                    py: [2, 1],
                    px: [2, 0],
                    pl: [4, 0],
                    borderBottom: ['1px solid', 'none'],
                    borderColor: 'primary'
                  }}>
                    <NavLink to={item.slug} onClick={this.onNavClick} sx={{variant: 'links.navSub'}}>
                      {item.title}
                    </NavLink>
                    {item.children !== undefined && item.children.length > 0 && (
                      <ul sx={{
                        pt: [2, 0]
                      }}>
                        {item.children.map(child => (
                          <li key={child.slug} sx={{
                            py: [2, 1],
                            px: [2, 0],
                            borderTop: ['1px solid', 'none'],
                            borderColor: 'primary',
                            '&:last-child': {
                              pb: 0
                            }
                          }}>
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
            ))}
          </div>
        </div>
      </Flex>
    )
  }
}

export default MobileMenu
