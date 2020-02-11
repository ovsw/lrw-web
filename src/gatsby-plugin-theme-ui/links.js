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
      p: 2,
      'fontWeight': 'bold',
      'textTransform': 'uppercase',
      'color': 'primary',
      'textDecoration': 'none',
      fontSize: '13px',
      '&:hover': {
        color: 'light',
        bg: 'primary'
      }
    },
    navMain: {
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
      fontSize: '26px',
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
    }
  }
}

export default links
