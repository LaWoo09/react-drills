import React from 'react';

class ToDo extends React.Component{
    render() {
        console.log(this.props)
        return (
        <div>{this.props.task}</div>
        )
    }
}
export default ToDo;