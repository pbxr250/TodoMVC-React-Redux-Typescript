import classnames from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { setVisibilityFilter } from '../actions/todosActions'
import { RootStateType } from '../reducers'

interface Props {
  filter: string,
  children: any
}

const Link = ({ filter, children }: Props) => {
  const dispatch = useDispatch()
  const stateFilter = useSelector((state: RootStateType) => state.visibilityFilter)
  const active = filter === stateFilter

  return (
    <a
      className={classnames({ selected: active })}
      style={{ cursor: 'pointer' }}
      onClick={() => dispatch(setVisibilityFilter(filter))}
    >
      {children}
    </a>
  )
}


export default Link
