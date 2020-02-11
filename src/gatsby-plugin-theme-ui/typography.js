const typography = {
  'fonts': {
    // 'sans': '-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    // 'serif': 'Georgia, Cambria, "Times New Roman", Times, serif',
    'mono': 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
    'heading': '"Amatic SC", cursive',
    'heading2': '"skranji", sans-serif',
    'body': '"Open Sans", sans-serif'
    // 'monospace': 'Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
      letterSpacing: 'heading'
    },
    // display: {
    //   fontFamily: 'heading',
    //   fontWeight: 'heading',
    //   lineHeight: 'heading',
    //   letterSpacing: 'heading',
    //   fontSize: [ 5, 6, 7 ]
    // },
    caps: {
      textTransform: 'uppercase'
    }
  },
  'fontSizes': [
    '0.875rem',
    '1rem',
    '1.25rem',
    '1.5rem',
    '1.875rem',
    '2.25rem',
    '3rem',
    '4rem',
    '5rem'
  ],
  'fontWeights': {
    'hairline': '100',
    'thin': '200',
    'light': '300',
    'normal': '400',
    'medium': '500',
    'semibold': '600',
    'bold': '700',
    'extrabold': '800',
    'black': '900',
    'body': '400',
    'heading': '700'
  },
  'letterSpacings': {
    'tighter': '-0.05em',
    'tight': '-0.025em',
    'normal': '0',
    'wide': '0.025em',
    'wider': '0.05em',
    'widest': '0.1em'
  },
  'lineHeights': {
    'none': '1',
    'tight': '1.25',
    'snug': '1.375',
    'normal': '1.5',
    'relaxed': '1.625',
    'loose': '2',
    'body': '1.625',
    'heading': '1.25'
  }
}

export default typography
