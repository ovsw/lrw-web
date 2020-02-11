/** @jsx jsx */
/* eslint jsx-a11y/anchor-has-content: 0 */
import {jsx} from 'theme-ui'
import {Link} from 'gatsby'
import isAbsoluteURL from 'is-absolute-url'

export default ({to, ...props}) => {
  const isExternal = isAbsoluteURL(to)
  if (isExternal) {
    return <a {...props} href={to} rel='noopener noreferrer' target='_blank' />
  }
  return <Link {...props} to={to} activeClassName='active' />
}
