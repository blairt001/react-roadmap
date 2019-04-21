import React, { Component } from 'react';
import './App.css';
import People from './People/People';

// Javascript class with the render method extends react component
// Renders html (JSX) code that can be displayed on the screen
// It is best practice to wrap everything within one root element
class App extends Component {
  /* state stores data about the component that
   can change over time. Change could come in the form of 
   user events or system events such as response to user input 
   or server requests. Working with a state’s component normally
   involves setting a component’s default state,
   accessing the current state and updating the state.
  We pass reference by using the 'this' keyword.
   */
  
  state = {
    peoples : [
      {name: 'Tony', age: 24},
      {name: 'Steve', age: 26},
      {name: 'Tracy', age: 22}
    ]
  }
  switchBlairHandler = () => {
    console.log('Was Clicked');
  }
  render() {
    return (
      <div className="App">
        <h1>Hi , I'm a React App</h1>
        <p>So Great</p>
        <People name={this.state.peoples[0].name} Age={this.state.peoples[0].age}/>
        <button onClick={this.switchBlairHandler}>Switch Name</button>
        <People name={this.state.peoples[1].name} Age={this.state.peoples[1].age}>My Favorites: React, Vue, Node, Java</People>
        <People name={this.state.peoples[2].name} Age={this.state.peoples[2].age}/>
      </div>
    );
  // this is cumbersome so we use JSX
    // return React.createElement('div',{className: 'App'}, null, React.createElement('h1', null, 'I like React')); 
   }
}
// Default export
export default App;
