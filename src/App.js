import React, { Component } from 'react';
import './App.css';

// Javascript class with the render method extends react component
// Renders html (JSX) code that can be displayed on the screen
// It is best practice to wrap everything within one root element
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi , I'm a React App</h1>
        <p>So Great</p>
      </div>
    );
  // this is cumbersome so we use JSX
    // return React.createElement('div',{className: 'App'}, null, React.createElement('h1', null, 'I like React')); 
   }
}
// Default export
export default App;
