import * as React from 'react'
import { Link as GatsbyLink } from 'gatsby'

const Link = props => {
  const internal = props.target !== '_blank' && /^\/(?!\/)/.test(props.href)
  if (internal) {
    return (
      <GatsbyLink activeClassName="active-link" to={props.href} {...props} />
    )
  }
  return <a {...props} />
}

export default Link
