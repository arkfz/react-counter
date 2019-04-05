import React, { Component } from 'react';
import './Counter.css';
import Buttons from './Buttons';
import Step from './Step';

class Counter extends Component {

    constructor(props) {
        super(props);

        let initValue = 0;

        if (!isNaN(this.props.initValue)) {
            initValue = parseInt(this.props.initValue);
        }

        this.state = {
            counterValue: initValue,
            stepValue: 1,
        }
    }

    changeValue = () => {
        this.setState((prevValue) => {
            return (
                {
                    counterValue: prevValue.counterValue + parseInt(this.state.stepValue),
                }
            )
        })
    }

    resetCounter = (resetCounter) => {
        let initValue = 0;

        if (!resetCounter) {
            if (!isNaN(this.props.initValue)) {
                initValue = parseInt(this.props.initValue);
            }
        }

        this.setState({
            counterValue: initValue,
        })
    }

    updateStep = (step) => {
        this.setState({
            stepValue: step.value,
        })
    }

    render() {
        return (
            <div className='counter'>
                Licznik:<span className='value'>{this.state.counterValue}</span>
                <Buttons
                    changeCounterValue={this.changeValue}
                    stepValue={this.state.stepValue}
                    resetCounterValue={this.resetCounter}
                />
                <Step
                    updateStep={this.updateStep}
                />
            </div>
        )
    }
}

export default Counter;