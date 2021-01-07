import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'Another State',
  };
  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Maximiliam', age: 30 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>React is the best</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies are this</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies are this</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My hobbies are this</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App' }, React.createElement('h1', null, "Hi I'm a React App"));
  }
}

export default App;
