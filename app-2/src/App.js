import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: ["hi", "hello", "hola", "hawaii"]
    }
  }
  render() {
    const { list } = this.state;
    const mappedArray = list.map((word,index) => {
      return <div key={index}>{word}</div>
    })
    return (
      <div className="App">
        {mappedArray}
      </div>
    );
  }
}

export default App;
