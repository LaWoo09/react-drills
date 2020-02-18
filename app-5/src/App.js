import React, { Component } from "react";
import Image from "./components/Image"
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image pic="https://via.placeholder.com/150"/>
      </div>
    );
  }
}

export default App;
