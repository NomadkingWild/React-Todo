import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';

const todoData = [
  {
    name: 'Get Dress',
    id: 12345,
    completed: false
  },
  {
    name: 'Brush Teeth',
    id: 12346,
    completed: false
  }
];
class App extends React.Component {
  constructor(){
    super();
    this.state ={
      todo: todoData,
      toggleItem: () => {},
    };
  }
  toggleItem =(id) =>{
    this.setState({
      todo: this.state.todo.map((item)=>{
        if(item.id === id){
          return{
            ...item,
            completed: !item.completed
          };
        }else{
          return item;
        }
      })
    });
  };
  addTask =(taskName)=>{
    const newTask={
      name: taskName,
      id: Date.now(),
      completed:false
    };
    
    this.setState({
      todo:[...this.state.todo, newTask]
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
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
          toggleItem={this.toggleItem}
          />
          <button className='clearer' onClick={this.clearCompleted}>
            Clear Completed
            </button>
      </div>
    )
  }
}



export default App;
