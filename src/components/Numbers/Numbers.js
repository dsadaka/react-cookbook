import React, { Component } from 'react';
import Result from './Result.js'
import './Numbers.css'

class Numbers extends Component {
    state = {
        numbers: '', //save input value
        results: [] // save resultd
    };

    handleNumberChange = e => {
        const { target: { value } }  = e;

        // Converting the string value to array
        const numbers = Array.from(value);

        // sum all numbers from array
        const result = numbers.reduce((a,b) => Number(a) + Number(b), 0);

        // Updating the local state
        this.setState({
            numbers: value,
            results: [...this.state.results, result]
        });
    }

    render() {
        return (
            <div className="Numbers">
                <input
                    type="number"
                    value={this.state.numbers}
                    onChange={this.handleNumberChange}
                    placeholder="Write numbers here..."
                />

                {/* Rendering the results array */}
                <ul>
                    {this.state.results.map((result, i) => (
                        <Result key={i} result={result} />
                    ))}
                </ul>
            </div>

        )
    }
}

export default Numbers;