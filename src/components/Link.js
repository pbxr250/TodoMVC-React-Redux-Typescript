import React, { useState } from 'react'
import classnames from 'classnames'
import { useSelector, useDispatch } from 'react-redux'

const Link = ({ filter: string, children }) => {
  const stateFilter = useSelector(state => state.visibilityFilter)
  const [active, setActive] = useState(filter === stateFilter)
  const dispatch = useDispatch()

  return (
    <a
      className={classnames({ selected: active })}
      style={{ cursor: 'pointer' }}
      onClick={() => dispatch(setFilter())}
    >
      {children}
    </a>
  )
}


export default Link
