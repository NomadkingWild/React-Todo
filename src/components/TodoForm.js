import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state ={
            todo: ""
        };
    }
    handleChanges = (e) =>{
        this.setState({
            todo: e.target.value
        });
    }
    
    handleSubmit =(e) =>{
        e.preventDefault();
        this.props.addTask(this.state.task);
    };
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='task'
                    value={this.state.task}
                    onChange={this.handleChanges}
                    />
                    <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;

