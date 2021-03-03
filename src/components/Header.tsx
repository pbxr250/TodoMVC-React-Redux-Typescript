import React from 'react'
import TodoTextInput from './TodoTextInput'
import { addTodo } from '../actions/todosActions'
import { useDispatch } from 'react-redux'


const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="header">
      <h1>todos</h1>
      <TodoTextInput
        newTodo
        onSave={(text: string) => {
          if (text.length !== 0) {
            dispatch(addTodo(text));
          }
        }}
        placeholder="What needs to be done?"
      />
    </header>
 )
}


export default Header
