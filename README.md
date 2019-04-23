### react-roadmap
This project is created to guide react beginners in starting development using react.
It contains well commented code that explains what happens and why.

To create a react application , follow the guidelines here: [Create React App](https://github.com/facebook/create-react-app).

# Why React?
  React is a JavaScript library aimed to create user interfaces and used extensively by social networking platforms like       Facebook and Instagram to name a few.. It is fast, responsive, modular, we can create reusable files. It is scalable and     flexible.It is based on components.

# React Virtual DOM
   DOM(Document Object Model) is the UI components, like elements, attributes.
   Virtual DOM is node tree listing of components, which is light weight in memory representation of real DOM.
   The render() method in react creates the Virtual DOM.
   Each time the underlying data changes, new virtual DOM is created, comparing differences between previous virtual DOM and    only the changes are updated in real DOM.
   So, the special thing about `ReactDOM.render()` is that it only updates DOM elements that have changed. Cool!!!
  
 # JSX?
 JavaScript Syntax Extension, JSX is not valid JavaScript that browsers can read. It’s a JavaScript file that contains JSX     code, very similar to HTML and the file have to be complied before it reaches web browser, with JSX complier that             translates the JSX into JavaScript.
 JXS element are treated as JavaScript expression, they can be saved as variable, passed to function or stored in an object     or array.
 Each JSX expression must have exactly one outermost element. Usually wrap the JSX expression in a <div></div>.
  Rendering JSX element means to make it appear on screen. We render JSX expression like this:
      
          import React from ‘react’;
          import ReactDOM from ‘react-dom’;
          ReactDOM.render(<h1>Hi Blairt</h1>, document.getElementById(‘app’));
  
  From the above we can see that; 
       ReatDOM is javascript library.
  In HTML, it’s common to use class as an attribute name but in JSX we cannot use the word class. We have to use className      instead. Coz class is reserved word in javaScript and JSX is converted to javaScript.
  In HTML its optional to include forward slash for self-closing tags like br, img, input, etc but not in JSX.
  Curly braces are markers that signal the beginning and end of a JavaScript:

          const name = "Tony Blair';
          ReactDOM.render(<h1>{name}</h1>, document.getElementById(‘app’));
    
Conditional operations, if else and && are pretty much same.
Event listeners same as HTML.

Maps example:

            const strings = [‘One’, ‘Two’, ‘Three’];
            const listItems = strings.map(string => <li>{string}</li>);
    
Keys example:

           const listItems = strings.map((string,i) => <li key={‘ string_’+i}>{string}</li>);
    
It is not mandatory write JSX, you can write the whole code in `React.createElement` but I personally won't recommend that practice.

# React Components

A component is a small reusable chunk of code that is responsible for one job. Usually to render some HTML.
We can use multiple JSX in a component.
Variables and conditions should be inside render method. Here is an example:

            import React from ‘react’; // This object contains the React library
            import ReactDOM from ‘react-dom’;
            class MyComponentClass extends React.Component {
            render() {
            return <h1>Hello world</h1>;
            }
            }
            ReactDOM.render(<MyComponentClass/>,document.getElementById(‘app’));
            
`this` keyword refers to the object on which this’s enclosing method.
Normally a react application can contain dozens, or even hundreds, of components interacting with each other.
When you import a variable from a file that is not the current file, then an import statement isn’t quite enough. You also need an `export statement`, written in the other file. Find below example:

                import React from ‘react’;
                export class NavBar extends React.Component {
                render() {
                return (
                <h1>hello</h1>
                );
                }}
                
export can be done in the beginning as shown above or end using "export default className"

          import React from ‘react’;
          import ReactDOM from ‘react-dom’;
          import { NavBar } from ‘./NavBar.js’;
          
          class ProfilePage extends React.Component {
          render() {
          return (
          <div><NavBar/></div>
          );
          }}
          ReactDOM.render(<ProfilePage/>,document.getElementById(‘app’));
          
          
# Props

Information that gets passed from one component to another is known as ‘props’.
A component’s props is an object. It holds information about that component. To see a component’s props object, you use the expression `this.props` as shown in the code below:

              import React from ‘react’;
              import ReactDOM from ‘react-dom’;
              class Greeting extends React.Component {
              render() {
              return <h1>My name is {this.props.firstName}!</h1>;
              }}
              ReactDOM.render(<Greeting firstName=’Tony’ />, document.getElementById(‘app’));
              
We can pass props from component to component. Rendering is the only way for a component to pass props to another component. Here is an example:

                  import React from ‘react’;
                  export class Greeting extends React.Component {
                  render() {
                  return <h1>My name is {this.props.name}!</h1>;
                  }}
                  
 Lets now import Greeting:

                import React from ‘react’;
                import ReactDOM from ‘react-dom’;
                import {Greeting} from ‘./Greeting.js’;
                class App extends React.Component {
                render() {
                return (
                <div><Greeting name=”Blair”/></div>
                );
                }}
                ReactDOM.render(App />, document.getElementById(‘app’));
                
Now lets look at passing an event handler as a prop. Here is an example:

                  import React from ‘react’;
                  export class Button extends React.Component {
                  render() {
                  return (
                  <button onClick={this.props.lough}> hey! </button>
                  );
                  }}
                  
 Lets import Button class:

                    import React from ‘react’;
                    import ReactDOM from ‘react-dom’;
                    import {Button} from ‘./Button’;
                    talk() {
                    alert(‘hey Blair!!!’);
                    }
                    class App extends React.Component {
                    render() {
                    return <Button talk={this.talk}/>;
                    }}
                    ReactDOM.render(Talker />, document.getElementById(‘app’));
                    
                    
Every component’s props object has a property named children, `this.props.children` will returns everything in between a component’s opening and closing JSX(Javascript Syntax Extension) tags.
For example, 

                      import React from ‘react’;
                      class BigButton extends React.Component {
                      render() {
                      console.log(this.props.children);
                      return <button>THIS IS BIG BUTTON HERE</button>;
                      }}
                      
### Example 1

      <BigButton>
      I am a child of BigButton.
      </BigButton>
      
If nobody passes any text to component, then component display will be blank. It would be better if component could display a default message instead. That’s where defaultProps comes into picture.

                      class Example extends React.Component {
                      render() {
                      return <h1>{this.props.text}</h1>;
                      }}
                      Example.defaultProps = { text: ‘yo’ };
                      
# State

A React component can access dynamic information in two ways: `props and state`.
Unlike props, a component’s state is not passed in from the outside. A component decides its own state.
To make a component have state, give the component a state property. This property should be declared inside of a constructor method, like this:

                      class Example extends React.Component {
                      constructor(props) {
                      super(props);
                      this.state = { mood: ‘decent’ };
                      }
                      render() {
                      return <div></div>;
                      }}
                      
`this.state` should be equal to an object.

To read a component’s state, use the expression `this.state.name-of-property`.

The most common way to call `this.setState()` is to call a custom function that wraps a this.setState(). As shown in below example:

                        class Example extends React.Component {
                        constructor(props) {
                        super(props);
                        this.pancake= this.pancake.bind(this);
                        }
                        pancake() {
                        this.setState({breakfast: ‘panake’});
                        }}
                        
There is a `stateful component`, and a `stateless component`. “Stateful” describes any component that has a state property; “Stateless” describes any component that does not.

Example of passing component from stateful component to stateless component:

                    import React from ‘react’;
                    import ReactDOM from ‘react-dom’;
                    import { Child } from ‘./Child’
                    class Parent extends React.Component{
                    constructor(props) {
                    super(props);
                    this.state = { name: ‘Frarthur’ }
                    }
                    render() {
                    return <Child name={this.state.name}/>;
                    }}
                    ReactDOM.render(<Parent />, document.getElementById(‘app’));
                    
Lets import to a stateless component:

                      import React from ‘react’;
                      export class Child extends React.Component {
                      render() {
                      return <h1>Hey, my name is {this.props.name}!</h1>;
                      }}
                      
Stateless components updating their parents state is a React pattern that is commonly used a lot

A component can change its state by calling `this.setState()` but a component should never update `this.props`. A React component should use props to store information that can be changed, but can only be changed by a different component. A React component should use state to store information that the component itself can change.
Child component can update the parent’s state as shown in below example, by passing a function down to child that can change parent’s state. Please note: binding at constructor level to make sure the method always refers to the instance of parent.

                  import React from ‘react’;
                  constructor(props) {
                  super(props);
                  this.handleChange=this.handleChange.bind(this);
                  }

`When a user selects a new dropdown item, it will invoke
changeName, but it won’t pass the correct argument! Instead of 
passing a new name, it will pass an event object, as all event 
listeners do. This is a common problem when passing down an event handler in React! The solution is to define another function that can extract the name from the event object`.

                      handleChange(e) {
                      const name = e.target.value;
                      this.props.onChange(name);
                      }
                      export class Child extends React.Component {
                      render() {
                      return (
                      <div>
                      <h1>Hey my name is {this.props.name}!h1>
                      <select id=”great-names” onChange={thi.handleChange }>
                      <option value=”Tony”>Facebook</option>
                      <option value=”Blair”>Google</option>
                      </div>
                      );
                      }}
                      
When passing down event handler it will pass event object, so we need another function in child to extract the name from event object.

                                  import React from ‘react’;
                                  import ReactDOM from ‘react-dom’;
                                  import { Child } from ‘./Child’;
                                  class Parent extends React.Component {
                                  constructor(props) {
                                  super(props);
                                  this.changeName = this.changeName.bind(this); // IMPORTANT
                                  this.state = { name: ‘Tony’ };
                                  }
                                  changeName(newName) {
                                  this.setState({name: newName});
                                  }
                                  render() {
                                  return <Child name={this.state.name} onChange={this.changeName}/>
                                  }}
                                  ReactDOM.render(Parent />,document.getElementById(‘app’));
                                                              
So stateful parent component passes prop to stateless child component, stateful parent component passes event handler to stateless child component and the child component uses event handler to update parents state. We can also update sibling components.. hahah, cool.
An `uncontrolled component` is a component that maintains its own internal state. A `controlled component` is a component that does not maintain any internal state. Since a controlled component has no state, it must be controlled by someone else.
Stateless functional component example:

                        // Displaying a Component the NOrmal Way
                        export class Friend extends React.Component {
                        render() {
                        return <img src=’tkl_image.jpg’ />;
                        }
                        }
                        // Stateless functional component, we can also pass prop if required
                        export const Friend = () => {
                        return <img src=’tkl_image.jpg’ />;
                        }
                        
# Styles

We are know styles from html. Here are some ways of using styles:

### 1. Inline styles

    <h1 style={{ color: ‘red’ }}>Hello world</h1>

### 2. Style as object variable:

      const styles = {
      color: ‘darkcyan’,
      background: ‘mintcream’
      };
      <h1 style={styles}>Hello world</h1>
      
In regular JavaScript, style names are written in `hyphenated-lowercase`. In React, those same names are instead written in `camelCase`. Example:

        const styles = {
        marginTop: ‘100px’,
        fontSize: ‘50px’
        };
        
One style can be shared across multiple components separating presentation components from display components.

# Prototype

Proptype is reacts inbuilt type checking ability. Here is an example:

          export class MessageDisplayer extends React.Component {
          render() {
          return <h1>{this.props.message}</h1>;
          }
          }
          MessageDisplayer.propTypes = {
          message: React.PropTypes.string
          };
          
# Forms

We all know forms from html. In react, for certain cases, it’s fine to have a form that is really just an input field. This is because, unlike in the traditional form paradigm, in React you re-send your form on every single character change. That removes the need to ever “submit” anything.

# Lifecycle methods

Lifecycle methods are methods that get called at certain moments in a react component’s life.
There are three mounting lifecycle methods, when a component mounts, it automatically calls these three methods, in order:

## 1. componentWillMount: 
When a component renders for the first time only, componentWillMount gets called right before render.
render.
## 2. componentDidMount: 
When a component renders for the first time, componentDidMount gets called right after the HTML from render has finished loading.
If your React app uses AJAX to fetch initial data from an API, then componentDidMount is the place to make that AJAX call. It is a good place to connect a React app to external applications, such as web APIs or JavaScript frameworks or to set timers using setTimeout or setInterval.
There are five updating lifecycle methods, which is called in this order whenever a component instance is updated:
### a. componentWillReceiveProps:
When a component instance updates, componentWillReceiveProps gets called before the rendering only if the component will receive props.
### b. shouldComponentUpdate:
shouldComponentUpdate automatically receives two arguments: nextProps and nextState. It’s typical to compare nextProps and nextState to the current this.props and this.state. If shouldComponentUpdate returns true, then nothing noticeable happens. But if shouldComponentUpdate returns false, then the component will not update.
### c. componentWillUpdate: 
componentWillUpdate gets called in between shouldComponentUpdate and render.It receives two arguments: nextProps and nextState. We cannot call this.setState from componentWillUpdate. Its main purpose is to interact with things outside like checking the window size or interacting with an API.
### d. componentDidUpdate:
componentDidUpdate automatically gets passed two arguments: prevProps and prevState. prevProps and prevState are references to the component’s props and state before the current updating period began. You can compare them to the current props and state.
### Render

Finally, there is only one unmounting lifecycle method:
## 3. componentWillUnmount:
It gets called right before a component is removed from the DOM.
Thanks for reading upto this far. Happy Coding React.

# Researched and bundled by:
Tony Blair
