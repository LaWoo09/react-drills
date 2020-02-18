import React, { Component } from "react";
import "./App.css";
import NewTask from './components/NewTask';
import List from './components/List';


class App extends Component {
  constructor(){
    super();
    this.state = {
      list: []
    }
    this.addToList = this.addToList.bind(this);
  }

addToList(item){
  this.setState({
    list: [...this.state.list, item]
  })
}

  render() {
    return (
      <div className="App">
       <NewTask add={this.addToList}/>
       <List items={this.state.list}/>
      </div>
    );
  }
}

export default App;
