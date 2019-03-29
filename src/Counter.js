import React, { Component } from 'react';
import './Counter.css'
import Buttons from './Buttons'

class Counter extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            counterValue: this.props.initValue,
        }
    }

    changeValue = () => {
        this.setState((prevValue) => {
            return (
                {
                    counterValue: parseInt(prevValue.counterValue) + 1,
                }
            )
        })
    }

    resetCounter = (flag) => {

        if (flag == 0) {
            this.setState({
                counterValue: 0,
            })
        }
        else if (flag === 1) {
            this.setState({
                counterValue: this.props.initValue,
            })
        }
    }

    render() {
        return (
            <div className='counter'>
                Licznik:<span className='value'>{this.state.counterValue}</span>
                <Buttons
                    changeCounterValue={this.changeValue}
                    resetCounterValue={this.resetCounter}
                />

            </div>
        )
    }
}

export default Counter;