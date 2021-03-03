import React from 'react'
import Link from './Link'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../actions/todosActionTypes'
import { useDispatch } from 'react-redux'
import { clearCompleted } from '../actions/todosActions'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

const Footer = ({activeCount: number, completedCount: number}) => {
  const itemWord = activeCount === 1 ? 'item' : 'items'
  const dispatch = useDispatch()
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </span>
      <ul className="filters">
        {Object.keys(FILTER_TITLES).map(filter =>
          <li key={filter}>
            <Link filter={filter}>
              {FILTER_TITLES[filter]}
            </Link>
          </li>
        )}
      </ul>
      {
        !!completedCount &&
        <button
          className="clear-completed"
          onClick={() => dispatch(clearCompleted())}
        >Clear completed</button>
        
      }
    </footer>
  )
}

export default Footer
