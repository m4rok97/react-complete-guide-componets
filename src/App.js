import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
    otherState: 'Another State',
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 30 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px, solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>React is the best</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler('Maximilliam')}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          My hobbies are this
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Marcos')}
          changed={this.nameChangedHandler}
        >
          My hobbies are this
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          My hobbies are this
        </Person>
      </div>
    );
    // return React.createElement('div', {className: 'App' }, React.createElement('h1', null, "Hi I'm a React App"));
  }
}

export default App;
