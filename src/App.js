import React from 'react';
import './style.css';
import { connect } from 'react-redux';

class App extends React.Component {
  setNewTodo = (e) => {
    const { dispatch } = this.props;
    if (e.key === 'Enter') {
      e.preventDefault();
      dispatch({ type: 'ADD_TODO', text: e.target.value });
      e.target.value = '';
    }
  };

  removeTodo = (text) => {
    const { dispatch } = this.props;
    dispatch({ type: 'REMOVE_TODO', text });
  };

  render() {
    const { dispatch, todos } = this.props;
    return (
      <div>
        <form>
          <div className="input-container">
            <input
              type="text"
              placeholder="Add a todo"
              onKeyPress={this.setNewTodo}
              className="input"
            />
          </div>
        </form>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`${todo.completed ? 'completed' : ''}`}
              data-testid="todo-item"
            >
              <span className="todo-text">{todo.text}</span>
              <button
                className="todo-remove"
                onClick={() => this.removeTodo(todo.text)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(App);
