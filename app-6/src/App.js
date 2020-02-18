import React, { Component } from "react";
import Todo from "./components/Todo";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ["cook", "clean", "walk the dog"],
      input: ""
    }
    this.addTask = this.addTask.bind(this);
  }

  changeHandler(val) {
    this.setState({
      input: val
    })
  }

  addTask(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input:""
    })
  }
  render() {
    let todoList = this.state.list.map((item,index) => {
    return <Todo key={index} item={item}/>
    })

    return (
      <div className="App">
        <h1>My To-do List:</h1>
        <input onChange={(e)=>this.changeHandler(e.target.value)}/>
        <button onClick={this.addTask}>Add</button>
        {todoList}
      </div>

      
    );
  }
}

export default App;
