import React, { useEffect, useState } from 'react'

const NoSSR = ({ children }) => {
  const [render, setRender] = useState(false)
  useEffect(() => setRender(true), [])
  return render ? children : null
}

export default NoSSR
