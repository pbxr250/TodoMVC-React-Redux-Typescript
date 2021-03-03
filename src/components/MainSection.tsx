import React from 'react'
import Footer from './Footer'
import TodoList from './TodoList'
import { RootStateType } from '../reducers'
import { getCompletedTodoCount } from '../selectors'
import { connect, ConnectedProps } from 'react-redux'
import { completeAllTodos } from '../actions/todosActions'


const MainSection = ({ todosCount, completedCount, dispatch }: PropsFromRedux) =>
  (
    <section className="main">
      {
        !!todosCount && 
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            checked={completedCount === todosCount}
            readOnly
          />
          <label onClick={() => dispatch(completeAllTodos())}/>
        </span>
      }
      <TodoList />
      {
        !!todosCount &&
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
        />
      }
    </section>
)



const mapStateToProps = (state: RootStateType) => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state)
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>


export default connector(MainSection);