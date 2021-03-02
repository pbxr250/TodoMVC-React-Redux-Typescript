import { SET_VISIBILITY_FILTER, SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE, TodoActionType} from '../actions/todosActionTypes'



type visibilityFilterStateType = typeof SHOW_ALL | typeof SHOW_COMPLETED | typeof SHOW_ACTIVE;


const visibilityFilter = (state: visibilityFilterStateType = SHOW_ALL, action: TodoActionType): visibilityFilterStateType => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter
    default:
      return state
  }
}

export default visibilityFilter