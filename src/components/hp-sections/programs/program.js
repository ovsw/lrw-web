/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled} from 'theme-ui'
import NavLink from '../../../elements/nav-link'

import Icon from '../../icon'

const ProgramItem = ({name, icon = 'pineCone', iconSize = '4.7rem', description, link, layout = 'normal'}) => {
  return (
    <NavLink to={link} sx={{
      variant: 'links.programListLink',
      flexDirection: ['column', 'column', 'column'],
      alignItems: 'center'
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

      <Styled.h3 sx={{mt: 2, mb: 1, color: 'accent', fontWeight: 'bold', lineHeight: 'none'}}>{name}</Styled.h3>
      <p sx={{fontSize: 1, lineHeight: '1.5', mt: 2, mb: 1, ml: 0, textAlign: 'center'}}>{description}</p>
    </NavLink>
  )
}

export default ProgramItem
