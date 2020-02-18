import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      text: "",
      list: ["popcorn", "pizza", "pastries", "potatoes"]
    }
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {

      const { list } = this.state;

      let filteredList = list.filter((item, index) => {
        console.log(item)
        return item.includes(this.state.text)
      })
        .map((item, index) => {
        console.log(item)
        return <h4 key={index}>{item}</h4>
        })
    return (
      <div className="App">
       <input onChange={this.changeHandler}></input>
        <h4>{this.state.text}</h4>
        {filteredList} 
      </div>
    );
  }
}

export default App;





  
    