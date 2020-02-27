/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled} from 'theme-ui'
// import Moment from 'react-moment'
import moment from 'moment'
import {GiAlarmClock} from 'react-icons/gi'

class Countdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      months: undefined,
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined,
      isBeforeCountdownDate: false
    }
  }

  componentDidMount () {
    const {timeTillDate, timeFormat} = this.props
    const then = moment(timeTillDate, timeFormat).unix()

    const now = moment().unix()
    const diffTime = then - now
    let isBeforeCountdownDate = diffTime > 0
    let duration = moment.duration(diffTime * 1000, 'milliseconds')
    let months = moment.duration(duration).months()
    let days = moment.duration(duration).days()
    let hours = moment.duration(duration).hours()
    let minutes = moment.duration(duration).minutes()
    let seconds = moment.duration(duration).seconds()
    this.setState({months, days, hours, minutes, seconds, isBeforeCountdownDate})

    this.interval = setInterval(() => {
      duration = moment.duration(duration.asMilliseconds() - 1000, 'milliseconds')
      months = moment.duration(duration).months()
      days = moment.duration(duration).days()
      hours = moment.duration(duration).hours()
      minutes = moment.duration(duration).minutes()
      seconds = moment.duration(duration).seconds()
      isBeforeCountdownDate = diffTime > 0

      this.setState({months, days, hours, minutes, seconds, isBeforeCountdownDate})
    }, 1000)
  }

  componentWillUnmount () {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  render () {
    const {months, days, hours, minutes, seconds, isBeforeCountdownDate} = this.state
    const monthsRadius = mapNumber(months, 8, 0, 0, 360) // 8 months instead of 12 because that's the interval between camp seasons
    const daysRadius = mapNumber(days, 30, 0, 0, 360)
    const hoursRadius = mapNumber(hours, 24, 0, 0, 360)
    const minutesRadius = mapNumber(minutes, 60, 0, 0, 360)
    const secondsRadius = mapNumber(seconds, 60, 0, 0, 360)

    // if (!seconds) {
    //   return null
    // }
    if (!isBeforeCountdownDate) {
      return <Styled.h1 as='p' sx={{textAlign: 'center', color: 'accent'}}>{new Date().getFullYear()} Camp is in Session!!!</Styled.h1>
    }

    return (
      <div sx={{pb: 3, borderRadius: '10px', margin: ['0 auto'], mb: 5, maxWidth: '3xl'}}>
        <Styled.h3 as='p' sx={{textAlign: 'center', mt: 0, color: 'accent'}}><GiAlarmClock sx={{position: 'relative', top: '10px', fontSize: '4rem'}} /> Countdown to Camp {new Date().getFullYear()}</Styled.h3>
        <div sx={countDownWrapper}>
          {(typeof (months) === 'number') && (
            <div className='countdown-item'>
              <SVGCircle radius={monthsRadius} />
              {months}
              <span>{pluralizeUnits(months, 'month')}</span>
            </div>
          )}
          {(typeof (days) === 'number') && (
            <div className='countdown-item'>
              <SVGCircle radius={daysRadius} />
              {days}
              <span>{pluralizeUnits(days, 'day')}</span>
            </div>
          )}
          {(typeof (hours) === 'number') && (
            <div className='countdown-item'>
              <SVGCircle radius={hoursRadius} />
              {hours}
              <span>{pluralizeUnits(hours, 'hour')}</span>
            </div>
          )}
          {(typeof (minutes) === 'number') && (
            <div className='countdown-item'>
              <SVGCircle radius={minutesRadius} />
              {minutes}
              <span>{pluralizeUnits(minutes, 'minute')}</span>
            </div>
          )}
          {(typeof (seconds) === 'number') && (
            <div className='countdown-item'>
              <SVGCircle radius={secondsRadius} />
              {seconds}
              <span>seconds</span>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Countdown

const SVGCircle = ({radius}) => (
  <svg sx={countDownSVG}>
    <path fill='none' strokeWidth='2' d={describeArc(50, 50, 48, 0, radius)} />
  </svg>
)

// From stackoverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian (centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  }
}

function pluralizeUnits (number, measurementUnit) {
  if (parseInt(number) === 1) {
    return `${measurementUnit}`
  } else {
    return `${measurementUnit}s`
  }
}

function describeArc (x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle)
  var end = polarToCartesian(x, y, radius, startAngle)

  var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'

  var d = [
    'M', start.x, start.y,
    'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(' ')

  return d
}

// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber (number, inMin, inMax, outMin, outMax) {
  if (number == 0) {
    return 359
  } else {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
  }
}

const countDownWrapper = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '.countdown-item': {
    color: 'secondary',
    fontSize: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    lineHeight: '30px',
    margin: '10px',
    paddingTop: '10px',
    position: 'relative',
    width: '100px',
    height: '100px',
    span: {
      color: 'accent',
      fontSize: '12px',
      fontWeight: '600',
      textTransform: 'uppercase'
    }
  }
}
const countDownSVG = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100px',
  height: '100px',
  stroke: 'primary'
}

const ContainerUnusedStyles = {py: 4, bg: 'background', border: '2px dashed', borderColor: 'primary', borderRadius: '10px', boxShadow: '0 0 6px 2px rgba(0,0,0,0.1)', margin: ['0 auto'], mb: 5, maxWidth: '3xl'}
