import {
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    COMPLETE_TODO,
    COMPLETE_ALL_TODOS,
    CLEAR_COMPLETED,
    TodoActionType
} from '../actions/todosActionTypes'

interface todoType {
    text: string,
    completed: boolean,
    id: number
}

type todoStateType = Array<todoType>

const initialState: todoStateType = [
    {
        text: 'Use Redux',
        completed: false,
        id: 0
    }
]

export default function todos(state: todoStateType = initialState, action: TodoActionType): todoStateType {
    switch (action.type) {
        case ADD_TODO:
        return [
            ...state,
            {
                id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                completed: false,
                text: action.payload.text
            }
        ]

        case DELETE_TODO:
        return state.filter(todo =>
            todo.id !== action.payload.id
        )

        case EDIT_TODO:
        return state.map(todo =>
            todo.id === action.payload.id ?
            { ...todo, text: action.payload.text } :
            todo
        )

        case COMPLETE_TODO:
        return state.map(todo =>
            todo.id === action.payload.id ?
            { ...todo, completed: !todo.completed } :
            todo
        )

        case COMPLETE_ALL_TODOS:
        const areAllMarked = state.every(todo => todo.completed)
        return state.map(todo => ({
            ...todo,
            completed: !areAllMarked
        }))

        case CLEAR_COMPLETED:
        return state.filter(todo => todo.completed === false)

        default:
        return state
    }
}
