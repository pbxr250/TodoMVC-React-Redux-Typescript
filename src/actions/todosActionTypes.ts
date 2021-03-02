// *** action types ***
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'
export const COMPLETE_ALL_TODOS = 'COMPLETE_ALL_TODOS'
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

// *** filters ***
export const SHOW_ALL = 'show_all'
export const SHOW_COMPLETED = 'show_completed'
export const SHOW_ACTIVE = 'show_active'


export interface TodoPayloadType {
    id?: number,
    text?: string,
    filter?: any
}

interface AddTodoActionType {
    type: typeof ADD_TODO,
    payload: {
        text: string
    }
}

interface DeleteTodoActionType {
    type: typeof DELETE_TODO,
    payload: {
        id: number
    }
}

interface EditTodoActionType {
    type: typeof EDIT_TODO,
    payload: {
        id: number,
        text: string
    }
}

interface CompleteTodoActionType {
    type: typeof COMPLETE_TODO,
    payload: {
        id: number
    }
}

interface CompleteAllTodosActionType {
    type: typeof COMPLETE_ALL_TODOS
}

interface ClearCompletedTodosActionType {
    type: typeof CLEAR_COMPLETED
}

interface SetVisibilityFilterActionType {
    type: typeof SET_VISIBILITY_FILTER,
    payload: {
        filter: any
    }
}

export type TodoActionType = AddTodoActionType | DeleteTodoActionType | EditTodoActionType |
    CompleteTodoActionType | CompleteAllTodosActionType | ClearCompletedTodosActionType | SetVisibilityFilterActionType;