import WhitePaper from '../images/white-paper-bg2.jpg'

const links = {
  links: {
    logoText: {
      'textDecoration': 'none',
      'fontWeight': 'bold',
      'color': 'secondary',
      'cursor': 'pointer',
      'display': ['inline', 'inline', 'none']
    },
    topBar: {
      'display': 'inline-block',
      p: [null, null, 1, 2],
      'fontWeight': [null, null, 'bold', 'bold'],
      'textTransform': 'uppercase',
      'color': 'primary',
      'textDecoration': 'none',
      fontSize: [null, null, '12px', '14px'],
      '&:hover': {
        color: 'light',
        bg: 'primary'
      }
    },

    'navSub': {
      color: ['light', 'light', 'primaryDarker'],
      display: 'block',
      textDecoration: 'none',
      textTransform: 'uppercase',
      fontSize: ['14px', '1'],
      lineHeight: 'snug',
      letterSpacing: '0.01rem',
      '&:hover': {
        color: ['light', 'light', 'dark'],
        textDecoration: 'underline'
      }
    },
    'navSub2': {
      color: ['light', 'light', 'primaryDarker'],
      display: 'block',
      textDecoration: 'none',
      textTransform: 'uppercase',
      fontSize: ['14px', '1'],
      lineHeight: ['snug', 'snug', 'normal'],
      '&:hover': {
        color: ['light', 'light', 'dark'],
        textDecoration: 'underline'
      }
    },
    'sidebarNav': {
      color: 'text',
      textDecoration: 'none',
      // textTransform: 'uppercase',
      fontSize: '1',
      fontWeight: 'normal',
      display: 'block',
      py: 2,
      px: 2,
      '&.active': {
        color: 'primary',
        fontWeight: 'extrabold'
      },
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    'programListLink': {
      textDecoration: 'none',
      transition: 'transform 0.1s ease-out',
      boxShadow: '0 0 12px -2px rgba(0,0,0,0.1)',
      background: `url(${WhitePaper})`,
      borderRadius: '7px',
      borderWidth: '1px',
      borderColor: 'primary',
      borderStyle: 'dashed',
      bg: 'white',
      p: 4,
      m: 3,
      color: 'primary',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'space-evenly',
      '&:hover': {
        boxShadow: '0 0 12px -2px rgba(0,0,0,0.2)',
        transform: 'scale(1.1)',
        '.iconBg': {
          bg: 'bg',
          color: 'primaryDark',
          'svg': {
            transform: 'scale(1.2)'
          }
        }
      },
      '& p': {
        color: 'text'
      }
    },
    footerLinks: {
      color: 'accent'
    },
    icon: {
      position: 'relative',
      top: '0.2em'
    }
  }
}

export default links
