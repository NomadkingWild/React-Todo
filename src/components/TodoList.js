import React from 'react';
import Todo from './Todo';

const TodoList = (props)=>{
    return(
        <div className= 'task-list'>
            {props.todo.map((todo)=>(
                <Todo
                key={todo.id}
                todo={todo}
                toggleCompleted={props.toggleCompleted}
                />
            ))}
            <button className='clearer' onClick={props.clearCompleted}>
            Clear Completed
            </button>
        </div>
    );
};

export default TodoList;