import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import TaskThree from './TaskThree';




const root = createRoot(document.getElementById('root'));

//TaskOne component
function TaskOne() {
    //Using State: State is similar to props, but it is private and fully controlled by the component.
    //useState return a variable to store your state
    //and a function used to change the state
    const [message, setMessage] = useState('Hello World'); //destructuring assignment:  assign these two return values to separate variables

    function changeMessage() {
        setMessage('Goodbye World!');
    }

    return (
        <div>
            <h2>{message}</h2>
            <button onClick={(e) => changeMessage()}>Change Message</button>
            {/* Because onClickis a property of a JSX element, which is a plain JavaScript object, it uses camelCasenaming */}
        </div>
    );


}

function TaskTwo() {

    const[randomNumbers, setRandomNumbers] = useState([]);

    function addRandomNumber(){
        const randomNumber = getRandomInt(1, 50);
        const newRandomNumbers = randomNumbers.slice(); // Get a copy of an array
        newRandomNumbers.push(randomNumber); 

        setRandomNumbers(newRandomNumbers);// Merges the state



    }

    const listNumbers = randomNumbers.map((randomNumber, index) => <li key={index}>{randomNumber}</li>);

    return (
        <div>
            <h2>Task Two - Random Number Generator</h2>
            <button onClick={(e) => addRandomNumber()}>Add Random Number</button>
            <ul>
                {listNumbers}
            </ul>
        </div>
    );
}

//Getting a random integer between two values, inclusive
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

// root.render(<TaskOne />);
//root.render(<TaskTwo />);
root.render(<TaskThree />);
