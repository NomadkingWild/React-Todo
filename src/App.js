import React from 'react';


import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';

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
    this.state ={
      todo:todo,
      toggleCompleted: () => {},
    };
  }
  toggleCompleted =(clickedTaskId) =>{
    this.setState({
      todo: this.state.todo.map((task)=>{
        if(task.id === clickedTaskId){
          return{
            ...task,
            completed: !task.completed
          };
        }else{
          return task;
        }
      })
    });
  };
  addTask =(taskName)=>{
    const newTask={
      name: taskName,
      id: new Date(),
      completed:false
    };
    this.setState({
      todo:[...this.state.todo, newTask]
    });
  };

  render(){
    return(
      <div className= 'App'>
        <div className='header'>
          <h1>Welcome to your To-Do App</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          todo={this.state.todo}
          toggleCompleted={this.toggleCompleted}
          />
      </div>
    )
  }
}



export default App;
