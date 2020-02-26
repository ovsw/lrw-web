/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'

// commponents
import DatesRatesLinkItem from './DatesRatesLink'

const DatesRatesLinks = [
  {
    name: 'Overnight Camp',
    icon: 'moon',
    description: 'Dates & Rates',
    link: '/dates-and-rates-overnight-camp/'
  },
  {
    name: 'Day Camp',
    icon: 'dayCamp',
    description: 'Dates & Rates',
    link: '/dates-and-rates-day-camp/'
  },
  {
    name: 'Bonim Travel',
    icon: 'teenagers',
    description: 'Dates & Rates',
    link: '/dates-and-rates-bonim-travel-program/'
  },
  {
    name: 'SIT Program',
    icon: 'leader',
    description: 'Dates & Rates',
    link: '/dates-and-rates-sit-program/'
  }
]

export default () => {
  return (
    <div sx={{
      width: '100%',
      display: 'grid',
      gridTemplateRows: ['1fr', '1fr 1fr'],
      gridTemplateColumns: [null, '1fr 1fr']
    }}>
      {DatesRatesLinks.map(link => {
        return (
          <DatesRatesLinkItem key={link.name} {...link} />
        )
      })}
    </div>
  )
}
