import React, { Component } from 'react'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'
import { deleteTodo, editTodo, completeTodo } from '../actions/todosActions'


interface Props {
  todo: todoType,
  dispatch: any
}

interface State {
  editing: boolean; 
};

interface todoType {
  text: string,
  completed: boolean,
  id: number
}


export default class TodoItem extends Component<Props, State> {

  state = {
    editing: false
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (id: number, text: string) => {
    if (text.length === 0) {
      this.props.dispatch(deleteTodo(id));
    } else {
      this.props.dispatch(editTodo(id, text));
    }
    this.setState({ editing: false })
  }

  render() {
    const { todo, dispatch } = this.props

    let element
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                       editing={this.state.editing}
                       onSave={(text) => this.handleSave(todo.id, text)} />
      )
    } else {
      element = (
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={todo.completed}
                 onChange={() => dispatch(completeTodo(todo.id))} />
          <label onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </label>
          <button className="destroy"
                  onClick={() => dispatch(deleteTodo(todo.id))} />
        </div>
      )
    }

    return (
      <li className={classnames({
        completed: todo.completed,
        editing: this.state.editing
      })}>
        {element}
      </li>
    )
  }
}
