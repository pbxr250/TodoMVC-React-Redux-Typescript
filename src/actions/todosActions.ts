import * as Types from './todosActionTypes'

export function addTodo(_text: string): Types.TodoActionType {
  return {
    type: Types.ADD_TODO,
    payload: {
        text: _text
    }
  }
}

export function deleteTodo(_id: number): Types.TodoActionType {
  return {
    type: Types.DELETE_TODO,
    payload: {
      id: _id
    }
  }
}

export function editTodo(_id: number, _text: string): Types.TodoActionType {
    return {
      type: Types.EDIT_TODO,
      payload: {
        id: _id,
        text: _text
      }
    }
}

export function completeTodo(_id: number): Types.TodoActionType {
    return {
      type: Types.COMPLETE_TODO,
      payload: {
        id: _id
      }
    }
}

export function completeAllTodos(): Types.TodoActionType {
    return {
      type: Types.COMPLETE_ALL_TODOS
    }
}

export function clearCompleted(): Types.TodoActionType {
    return {
      type: Types.CLEAR_COMPLETED
    }
}

export function setVisibilityFilter(_filter: any): Types.TodoActionType {
    return {
      type: Types.SET_VISIBILITY_FILTER,
      payload: {
        filter: _filter
      }
    }
}
