import React from 'react'
import TodoTextInput from './TodoTextInput'
import { addTodo } from '../actions/todosActions'

interface Props {
  addTodo: typeof addTodo
}

const Header = ({ addTodo }: Props) => (
  <header className="header">
    <h1>todos</h1>
    <TodoTextInput
      newTodo
      onSave={(text: string) => {
        if (text.length !== 0) {
          addTodo(text)
        }
      }}
      placeholder="What needs to be done?"
    />
  </header>
)


export default Header
