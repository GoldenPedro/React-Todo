import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Wash the dishes',
    id: 1528817084390,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks: tasks
    };
  }

  toggleComplete = taskId => {
    console.log("bk: index.js: App: toggComplete: taskId ", taskId);
    this.setState({
      tasks: this.state.tasks.map(task => {
        if (taskId === task.id) {
          return {
            ...task, 
            copmleted: !task.complete
          }
        }
        return task;
      })
    })
  }

  addTask = taskName => {
    console.log("bk: index.js: App: addTask: taskName: ", taskName)
    this.setState({
      tasks: [
        ...this.state.tasks,
        { task: taskName, completed: false, id: Date.now() }
      ]
    })
  }

  clearCompleted = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => {
        return !task.completed
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo App</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          toggComplete={this.toggleComplete}
          tasks={this.state.tasks}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
