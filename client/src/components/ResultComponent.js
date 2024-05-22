import React from 'react';

class ResultComponent extends React.Component {
    render() {
        return (
            <input
                type="text"
                className="result"
                value={this.props.result}
                onChange={this.props.onChange}
                style={{
                    padding: '10px',
                    border: '1px solid #ccc',
                    minHeight: '20px',
                    width: '100%'
                }}
            />
        );
    }
}

export default ResultComponent;
