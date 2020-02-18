import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      text: ""
    }
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
       <input onChange={this.changeHandler}></input>
        <h4>{this.state.text}</h4>
      </div>
    );
  }
}

export default App;
