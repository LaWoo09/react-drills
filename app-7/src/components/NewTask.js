import React from 'react';

class NewTask extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        this.addTask = this.addTask.bind(this);
    }

    changeHandler(val) {
        this.setState({
            input: val
        })
    }

    addTask(){
        this.props.add(this.state.input);
        this.setState({
            input: ''
        })
    }

    render() {
        return (
            <div>
                <input onChange={(e)=>this.changeHandler(e.target.value)}/>
                <button onClick={this.addTask}>Add Task</button>
            </div>
        )
    }
}

export default NewTask;