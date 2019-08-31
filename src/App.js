import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cx from 'classnames';
import todosActionCreater from './actions/todos';
import './App.scss';

class App extends Component {
  state = {
    todoText: '',
  };
  componentDidMount(){

    this.props.dispatch({
      type: 'ADD_TODO_SAGA',
      payload: {
        text: 'First'
      },
    });
    window.addEventListener('keydown', this.handleAddTodoKeyDown);
  }
  componentWillUnmount(){
    window.removeEventListener('keydown', this.handleAddTodoKeyDown);
  }
  handleAddTodoKeyDown = e => {
    // Press Enter
    if (e.keyCode === 13) {      
      this.handleAddTodo();
      return;
    }
  }
  // TodoList
  handleTodoComplete = id => () => {
    const {
      toggleTodoAction,
    } = this.props;
    toggleTodoAction(id);
  }

  renderTodoItem = todo => {
    return (
      <li
        key={todo.id}
        className={cx({
          todoActive: todo.isComplete,
        })}
        onClick={this.handleTodoComplete(todo.id)}
      >
        {todo.text}
      </li>
    );
  }
  renderTodos = () => {
    const {
      todos,
    } = this.props;
    if (todos.length <= 0) return null;
    return (
      <ul className="todos">
        {todos.map(this.renderTodoItem)}
      </ul>
    );
  }

  // Input
  handleTodoTextChange = e => {
    this.setState({
      todoText: e.target.value,
    });
  }
  handleAddTodo = () => {
    const {
      addTodoAction,
      toggleTodoAction,
    } = this.props;
    const {
      todoText
    } = this.state;
    if (!todoText) return;
    addTodoAction(todoText);
    this.setState({
      todoText: '',
    });
  }
  renderInputs = () => {
    const {
      todoText
    } = this.state;
    return (
      <div>
        <input type="text" value={todoText} onChange={this.handleTodoTextChange}/>
        <button onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
  render() {
    const { dispatch } = this.props;
    console.log('dis', dispatch)
    return (
      <div className="App">
        {this.renderInputs()}
        {this.renderTodos()}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  todos: state.todos,
  visibilityFilter: state.visibilityFilter,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(todosActionCreater, dispatch),
  dispatch,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
