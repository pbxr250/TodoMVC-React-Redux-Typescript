import { combineReducers } from 'redux'
import todos from './todosReducer'
import visibilityFilter from './visibilityFilterReducer'

const rootReducer = combineReducers({
  todos,
  visibilityFilter
})

export type RootStateType = ReturnType<typeof rootReducer>;

export default rootReducer
