// import {redirectTo} from '@reach/router'
// import {relative} from 'path'

import breakpoints from './breakpoints'
import typography from './typography'
import colors from './colors'
import sizes from './sizes'
import space from './space'
import shadows from './shadows'
import links from './links'
import buttons, {sharedButtonStyles} from './buttons'
import sections from './sections'
import inputs from './inputs'
import lists from './lists'
import misc from './misc'

const sharedHeadingStyles = {
  'fontFamily': 'heading',
  'fontWeight': 'heading',
  'lineHeight': 'heading',
  'm': 0,
  'mb': 3
}

export default {
  ...breakpoints,
  ...typography,
  ...colors,
  ...sizes,
  ...space,
  ...shadows,
  ...links,
  ...buttons,
  ...sections,
  ...inputs,
  ...lists,
  ...misc, // borderWidths, radii, zindeces
  'styles': {
    'root': {
      margin: 0,
      'fontFamily': 'body',
      'lineHeight': 'body',
      'fontWeight': 'body'
    },
    Header: {
      display: 'block',
      zIndex: '5',
      position: 'relative'
    },
    Layout: {
      color: 'text',
      fontFamily: 'body',
      fontSize: '2'
    },
    'a': {
      'color': 'accent',
      'fontWeight': 'bold',
      ':hover': {
        'textDecoration': 'underline',
        'color': 'primary'
      },
      '&.contentButton': {
        ...sharedButtonStyles,
        display: 'inline-block',
        'backgroundColor': 'accent',
        'border': 'none',
        mb: 3,
        'borderBottomWidth': '4px',
        'borderBottomStyle': 'solid',
        'borderBottomColor': 'accentDark',
        'color': 'white',
        'fontWeight': 'bold',
        'borderRadius': 'default',
        'transition': 'transform 0.3s ease-in-out',
        '&:hover': {
          'transform': 'translateY(-1px)'
        }
      }
    },
    'p': {
      fontSize: 2,
      lineHeight: 'body',
      color: 'text'
    },
    'h1': {
      ...sharedHeadingStyles,
      'fontSize': [6, 6, 7, 8],
      'mt': 2,
      'color': 'primary'
    },
    'h2': {
      ...sharedHeadingStyles,
      fontFamily: 'heading2',
      fontWeight: 'normal',
      'fontSize': 6,
      'mt': 4,
      'color': 'primary'
    },
    'h3': {
      ...sharedHeadingStyles,
      'fontSize': [5, 5, 5, 6],
      fontWeight: 'bold',
      'mt': 4,
      'color': 'primary'
    },
    'h4': {
      ...sharedHeadingStyles,
      'fontSize': 4,
      'color': 'primary'
    },
    'h5': {
      ...sharedHeadingStyles,
      'fontSize': 2,
      'color': 'primary'
    },
    'h6': {
      ...sharedHeadingStyles,
      'fontSize': 1
    },
    'code': {},
    'pre': {},
    'hr': {
      'bg': 'muted',
      'border': 0,
      'height': '1px',
      'm': 3
    },
    'img': {
      mt: 4
    },
    '.contentImage': {
      m: '0',
      p: '0'
    },
    'figcaption': {
      textAlign: 'center',
      fontSize: 1,
      mt: 2,
      mb: 4,
      fontStyle: 'italic'
    },
    'table': {
      width: '100%',
      textAlign: 'left',
      'tr': {
        'td': {
          borderTop: '2px solid',
          borderColor: 'gray.3',
          padding: 2
        }
      }
    }
  }
}
