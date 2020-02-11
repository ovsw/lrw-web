import React from 'react'
import HamburgerIcon from './hamburger'
import ChevronDownIcon from './chevron-down'
import PineCone from './pine-cone'
import DayCamp from './children-playing-blocks'
import Teenagers from './teenagers'
import Leader from './leader'
import Sun from './sun'
import Moon from './moon'
import StarOfDavid from './star-of-david'
import Donate from './donate'
import GiftList from './gift-list'

function Icon (props) {
  switch (props.symbol) {
    case 'hamburger':
      return <HamburgerIcon />
    case 'chevronDown':
      return <ChevronDownIcon />
    case 'pineCone':
      return <PineCone />
    case 'dayCamp':
      return <DayCamp />
    case 'teenagers':
      return <Teenagers />
    case 'leader':
      return <Leader />
    case 'sun':
      return <Sun />
    case 'moon':
      return <Moon />
    case 'starOfDavid':
      return <StarOfDavid />
    case 'donate':
      return <Donate />
    case 'gift-list':
      return <GiftList />
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
