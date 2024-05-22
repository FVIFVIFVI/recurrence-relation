import React, { Component } from 'react';
import './App.css';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from "./components/KeyPadComponent";

class App extends Component {
    constructor(){
        super();
        this.state = {
            result: ""
        }
    }

    onClick = button => {
        if (button =="11"){
            this.calculate()
        
        }
        if(button === "send"){
            this.calculate(); // Calculate when "=" is pressed
        }
        else if(button === "C"){
            this.reset(); // Reset when "C" is pressed
        }
        else if(button === "CE"){
            this.backspace(); // Backspace when "CE" is pressed
        }
        else {
            this.setState({
                result: this.state.result + button // Append button value to result
            })
        }
    };

    calculate1 = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    calculate = () => {
        const expression = this.state.result;
        
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
                this.setState({
                    result: "error" // Display error if server returns an error
                });
            } else {
                this.setState({
                    result: data.result // Display the computed result from server
                });
            }
        })
        .catch(error => {
            console.error("There was an error!", error);
            this.setState({
                result: "error" // Display error on network or server failure
            });
        });
    };

    reset = () => {
        this.setState({
            result: "" // Reset result to empty
        });
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1) // Remove last character from result
        });
    };
    handlePaste = (pastedText) => {
        const validChars = /^[0-9+\-*/().]+$/; // Regex for valid characters
        if (1==1) {
          this.setState({ result: this.state.result + pastedText });
        } else {
          alert("Invalid characters pasted. Please use only numbers and operators.");
        }
      };
    
      render() {
        return (
          <div>
            <div className="calculator-body">
              <h1>Simple Calculator</h1>
              <ResultComponent result={this.state.result} onPaste={this.handlePaste} /> 
              <KeyPadComponent onClick={this.onClick} />
            </div>
          </div>
        );
      }
    }
    
    export default App;