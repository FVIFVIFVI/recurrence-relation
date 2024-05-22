import React, { Component } from 'react';

class ResultComponent extends Component {
  handlePaste = (event) => {
    event.preventDefault(); // Prevent default paste behavior
    const pastedText = event.clipboardData.getData('text/plain');
    this.props.onPaste(pastedText); // Pass pasted text to App component
  };

  render() {
    return (
      <div 
        className="result" 
        contentEditable="true" // Make the div editable
        onPaste={this.handlePaste}
      >
        {this.props.result}
      </div>
    );
  }
}

export default ResultComponent;
