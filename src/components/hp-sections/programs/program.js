/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled} from 'theme-ui'
import {Link} from 'gatsby'

import Icon from '../../icon'

const ProgramItem = ({name, icon = 'pineCone', iconSize = '4.7rem', description, link, layout = 'normal'}) => {
  const flexDirection = layout === 'wide' ? 'row' : 'column'
  const marginTop = layout === 'wide' ? '0' : 2
  const marginBottom = layout === 'wide' ? '0' : 1
  const marginBetween = layout === 'wide' ? 3 : '0'
  const textAlign = layout === 'wide' ? 'left' : 'center'

  return (
    <Link to={link} sx={{
      variant: 'links.programListLink',
      flexDirection: ['column', 'column', flexDirection],
      alignItems: 'center'
    }}>

      {(layout === 'normal') &&
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
        </div>}

      <Styled.h3 sx={{mt: marginTop, mb: marginBottom, color: 'accent', fontWeight: 'bold', lineHeight: 'none'}}>{name}</Styled.h3>
      <p sx={{fontSize: 1, lineHeight: '1.5', mt: marginTop, mb: marginBottom, ml: marginBetween, textAlign: textAlign}}>{description}</p>
      {/* <p sx={{fontSize: 1, mt: 0}}><span sx={{color: 'primary'}}>... learn more ></span></p> */}
    </Link>
  )
}

export default ProgramItem
