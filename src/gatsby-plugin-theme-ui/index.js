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

import ImageBorder from '../images/deco/laurelwood-deco-frame-2.png'

const sharedHeadingStyles = {
  'fontFamily': 'heading2',
  'fontWeight': 'heading',
  'lineHeight': 'heading',
  'm': 0,
  'mb': 3,
  strong: {
    fontWeight: 'normal'
  }
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
  'borders': {
    drawn: {
      borderImage: `url(${ImageBorder}) 6 round`,
      borderImageSlice: '15',
      borderWidth: '13px',
      borderStyle: 'solid'
    }
  },
  headings: {
    mainSectionHeading: {
      ...sharedHeadingStyles,
      'fontSize': [6, 6, 7, 8],
      'mt': 2,
      textAlign: 'center',
      position: 'relative',
      fontFamily: 'heading',
      fontWeight: 'bold',
      mb: 5,
      color: 'primaryDark'
    // '&::after': {
    //   content: '""',
    //   width: '480px',
    //   height: '19px',
    //   background: `url(${DecoImg1}) no-repeat center center`,
    //   position: 'absolute',
    //   bottom: '-2rem',
    //   left: '50%',
    //   transform: 'translateX(-50%)'
    //   // opacity: '0.5'
    // }
    }
  },
  svgDeco: {
    topRightBig: {
      position: 'absolute',
      top: '-6rem',
      right: '-6rem',
      width: '25rem',
      svg: {
        fontSize: '25rem',
        color: 'primaryDark',
        opacity: '0.1'
      }
    }
  },
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
      textDecoration: 'none',
      px: 1,
      borderBottom: '3px solid',
      borderColor: 'accent',
      'color': 'accent',
      'fontWeight': 'normal',
      ':hover': {
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
    ul: {
      lineHeight: 'body',
      fonSize: 2
    },
    'h1': {
      ...sharedHeadingStyles,
      'fontSize': [6, 6, 7, 8],
      'mt': 2,
      'color': 'primaryDark'
    },
    'h2': {
      ...sharedHeadingStyles,
      'fontSize': [5, 6],
      mt: 4,
      mb: 3,
      'color': 'primaryDark'
    },
    'h3': {
      ...sharedHeadingStyles,
      'fontSize': [3, null, 4],
      'mt': 4,
      'color': 'primaryDark'
    },
    'h4': {
      ...sharedHeadingStyles,
      'fontSize': 4,
      fontFamily: 'body'
    },
    'h5': {
      ...sharedHeadingStyles,
      'fontSize': 2
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
