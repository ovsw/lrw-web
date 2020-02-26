/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled} from 'theme-ui'
import NavLink from '../elements/nav-link'

import Icon from './icon'

const ProgramItem = ({name, icon = 'pineCone', iconSize = '4.7rem', description, link, layout = 'normal'}) => {
  return (
    <NavLink to={link} sx={{
      variant: 'links.programListLink',
      flexDirection: ['column', 'column', 'column'],
      alignItems: 'center',
      textDecoration: 'none!important'
    }}>

      <div sx={{
        fontSize: iconSize,
        color: 'primary',
        borderRadius: '1000px'
      }}>
        <div className='iconBg' sx={{
          borderRadius: '1000px',
          width: '6rem',
          height: '6rem',
          bg: 'background',
          border: '1px dashed red',
          borderColor: 'white',
          px: '0.8rem',
          pt: '0.2rem',
          color: 'primaryDark',
          mx: 'auto',
          transition: 'all 0.1s ease-out'
        }}>
          <Icon symbol={icon} />
        </div>
      </div>

      <p sx={{fontSize: 1, mt: 4, lineHeight: '1!important', mb: '0!important', textAlign: 'center'}}>{description}</p>
      <Styled.h3 sx={{m: '0!important', p: '0!important', color: 'accent', fontWeight: 'bold', lineHeight: 'none'}}>{name}</Styled.h3>
    </NavLink>
  )
}

export default ProgramItem
