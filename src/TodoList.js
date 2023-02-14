import { Component } from "react"

export class TodoList extends Component {
  state = {
    todos: [],
    newTodo: "",
  }

  handleInputAdd = (event) => {
    this.setState({
      newTodo: event.target.value
    })
  }
  
  handleAddButton = (event) => {
    event.preventDefault();
    this.setState((state) => ({
      todos: [...state.todos, state.newTodo],
      newTodo: ""
    }))
  }

  handleReset = () => {
    this.setState({
      todos: []
    })
  }

  handleDelete = (state) => {
    const cancel = this.state.todos.filter((todo) => todo !== state)
    this.setState({ todos: cancel })
  }
 
  render() {
    const handleDelete = (todo) => (
        <button type="button" onClick={() => this.handleDelete(todo)}>
          &times;
        </button>
      );
    return (
      <div>
        <h2>Your Todo List</h2>
        <form>
          <input type="text" onChange={this.handleInputAdd}/>
          <button type="submit" onClick={this.handleAddButton}>Add</button>
          <button type="button" onClick={this.handleReset}>Reset</button>
        </form>
              
        <ul>
          {this.state.todos.map((todo, e) => (
            <li key={e}>
              {todo}
              {handleDelete(todo)}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
