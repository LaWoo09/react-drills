import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.buttonAlert = this.buttonAlert.bind(this)
  }

  buttonAlert()  {
    const { username, password } = this.state;
    
    alert(`Username: ${username} Password: ${password}`)
  }

changeHandler(e) {
  const { value, name } = e.target
  this.setState({
    [name]: value
  })
}

  render() {
    return (
      <div className="App">
       <input name="username" onChange={this.changeHandler}></input>
       <input name="password" onChange={this.changeHandler}></input>
       <button onClick={this.buttonAlert}>Login</button>
    <h4>{this.state.username}</h4>
  <h4>{this.state.password}</h4>
      </div>
    );
  }
}

export default App;
