import React from 'react';

// A component is a function that returns some JSX
// We use ES6 Syntax

// a function
/* React controls the data flow in the components 
with state and props. The data in states and props are used to 
render the Component with dynamic data
The value of a prop is always a function */
const people = (props) => {
    return (
        <div>
            <p>Hey my people, how are you doing. I am {props.name} and I'm {Math.floor(Math.random()*10)} years old.</p>
             <p>{props.children}</p>
        </div>
    )   
};

export default people;