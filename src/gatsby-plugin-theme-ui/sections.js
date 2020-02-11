import SectionBorderTop from '../images/torn-bg-white-t.png'
import SectionBorderBottom from '../images/torn-bg-white-b.png'
import YellowPaperBg from '../images/yellow-paper-bg.jpg'

const sections = {
  sections: {
    hpSection: {
      py: [3, 4, 5, 6],
      bg: 'background'
    },
    hpSectionPaper: {
      background: `url(${YellowPaperBg}) repeat center center`
    },
    hpSectionSimple: {
      bg: 'white'
    },
    hpSectionLight: {
      py: [3, 4, 4, 5],
      bg: 'white',
      position: 'relative',
      zIndex: '10',
      '&::before': {
        background: `url(${SectionBorderTop}) repeat-x top left`,
        content: '""',
        position: 'absolute',
        top: '-42px',
        left: 0,
        right: 0,
        height: '43px'
      },
      '&::after': {
        background: `url(${SectionBorderBottom}) repeat-x bottom right`,
        content: '""',
        position: 'absolute',
        bottom: '-40px',
        left: 0,
        right: 0,
        height: '43px'
      }
    },
    hpSectionLightNoBottom: {
      py: [3, 4, 4, 5],
      bg: 'white',
      position: 'relative',
      zIndex: '10',
      '&::before': {
        background: `url(${SectionBorderTop}) repeat-x top center`,
        content: '""',
        position: 'absolute',
        top: '-40px',
        left: 0,
        right: 0,
        height: '43px'
      }
    }
  }
}

export default sections
