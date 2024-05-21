import React, { Component } from 'react';
import './styles.css';

class KeyPadComponent extends Component {
    render() {
        return (
            <div className="button">
                <div className="button-row">
                    <button name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                    <button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                    <button name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                    <button name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
                    <button name="%" onClick={e => this.props.onClick(e.target.name)}>%</button>
                    <button name="T" onClick={e => this.props.onClick(e.target.name)}>T</button>
                </div>
                <div className="button-row">
                    <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                    <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                    <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                    <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
                    <button name="√" onClick={e => this.props.onClick(e.target.name)}>√</button>
                    <button name="N" onClick={e => this.props.onClick(e.target.name)}>N</button>
                </div>
                <div className="button-row">
                    <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                    <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                    <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                    <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
                    <button name="^" onClick={e => this.props.onClick(e.target.name)}>^</button>
                    <button name="k" onClick={e => this.props.onClick(e.target.name)}>k</button>
                </div>
                <div className="button-row">
                    <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                    <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                    <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                    <button name="*" onClick={e => this.props.onClick(e.target.name)}>x</button>
                    <button name="log" onClick={e => this.props.onClick(e.target.name)}>log</button>
                    <button name="o" onClick={e => this.props.onClick(e.target.name)}></button>
                </div>
                <div className="button-row">
                    <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                    <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                    <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                    <button name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button>
                    <button name="ln" onClick={e => this.props.onClick(e.target.name)}>ln</button>
                    <button name="O" onClick={e => this.props.onClick(e.target.name)}>O</button>
                </div>
            </div>
        );
    }
}

export default KeyPadComponent;
