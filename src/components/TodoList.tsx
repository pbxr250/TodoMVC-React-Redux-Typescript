import React from 'react'
import TodoItem from './TodoItem'
import { connect, ConnectedProps } from 'react-redux'
import { getVisibleTodos } from '../selectors'
import { RootStateType } from '../reducers'




const TodoList = ({ filteredTodos, dispatch }: PropsFromRedux) => (
  <ul className="todo-list">
    {filteredTodos.map(todo =>
      <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
    )}
  </ul>
)


const mapStateToProps = (state: RootStateType) => ({
  filteredTodos: getVisibleTodos(state)
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>


export default connector(TodoList);
