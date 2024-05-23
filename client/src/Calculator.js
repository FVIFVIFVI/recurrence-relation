import React, { useState } from 'react';
import './styles.css';

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        setInput(input + value);
    };

    const handleBackspace = () => {
        setInput(input.slice(0, -1));
    };

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };

    const handleCalculate = () => {
        try {
            const evalResult = eval(input);
            setResult(evalResult);
        } catch (error) {
            setResult('Error');
        }
    };

    const calculate1 = () => {
        const expression = input;

        fetch('http://127.0.0.1:5000/compute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ expression }), // Send expression to server
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                setResult("Error"); // Display error if server returns an error
            } else {
                setInput(data.result); // Display the computed result from server
            }
        })
        .catch(error => {
            console.error("There was an error!", error);
            setResult("Error"); // Display error on network or server failure
        });
    };

    return (
        <div className="calculator">
            <div className="display">
                <input 
                    type="text" 
                    value={input} 
                    onChange={handleChange} // Allow user to change the input
                />
             
            </div>
            <div className="button">
                <div className="button-row">
                    <button onClick={() => handleClick('(')}>(</button>
                    <button onClick={handleClear}>CE</button>
                    <button onClick={() => handleClick(')')}>)</button>
                    <button onClick={handleClear}>C</button>
                    <button onClick={() => handleClick('%')}>%</button>
                    <button onClick={() => handleClick('T')}>T</button>
                </div>
                <div className="button-row">
                    <button onClick={() => handleClick('1')}>1</button>
                    <button onClick={() => handleClick('2')}>2</button>
                    <button onClick={() => handleClick('3')}>3</button>
                    <button onClick={() => handleClick('+')}>+</button>
                    <button onClick={() => handleClick('√')}>√</button>
                    <button onClick={() => handleClick('n')}>n</button>
                </div>
                <div className="button-row">
                    <button onClick={() => handleClick('4')}>4</button>
                    <button onClick={() => handleClick('5')}>5</button>
                    <button onClick={() => handleClick('6')}>6</button>
                    <button onClick={() => handleClick('-')}>-</button>
                    <button onClick={() => handleClick('^')}>^</button>
                    <button onClick={() => handleClick('k')}>k</button>
                </div>
                <div className="button-row">
                    <button onClick={() => handleClick('7')}>7</button>
                    <button onClick={() => handleClick('8')}>8</button>
                    <button onClick={() => handleClick('9')}>9</button>
                    <button onClick={() => handleClick('*')}>x</button>
                    <button onClick={() => handleClick('log')}>log</button>
                    <button onClick={calculate1}>send</button>
                </div>
                <div className="button-row">
                    <button onClick={() => handleClick('.')}>.</button>
                    <button onClick={() => handleClick('0')}>0</button>
                    <button onClick={()=>handleClick('=')}>=</button>
                    <button onClick={() => handleClick('/')}>÷</button>
                    <button onClick={() => handleClick('ln')}>ln</button>
                    <button onClick={handleBackspace}>x</button>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
