import React from 'react';
import ReactDOM from 'react-dom';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles.css';

const todo = [
  {
    task: 'Get Dress',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Brush Teeth',
    id: 1528817084358,
    completed: false
  }
];
class App extends React.Component {
  constructor(){
    super();
    this.state={
      todo: todo,
      toggleCompleted = () => {toggleCompleted=(clickedItemId) =>{
        this.setState([
          todo: this.state.todo.map((task =>{
            if(item.id === clickedTaskId) {
              return{
                ...task,
                completed: !todo.completed
              }
            } else {
              return task;
            }
          }))
        ]);
      };}
    }
  }
  
  
  addTask = (taskName) =>{
    const newTask ={
      name: taskName,
      id: new Date(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newTask]
    });
  };
  render() {
    return (
      <div className='App"'>
        <div className='header>'
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          todo={this.state.todo}
          toggleCompleted={this.toggleCompleted}
          />
      </div>
    );
  }
}


const rootElement =document.getElementById('root');
ReactDom.render(<App />, rootElement);
export default App;
