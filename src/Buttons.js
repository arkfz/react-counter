import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component {

    resetOrReinitCounter = (reset) => {
        this.props.resetCounterValue(reset);
    }

    render() {
        return (
            <div className="buttons-panel">
                <button onClick={this.props.changeCounterValue}>Add {this.props.stepValue}</button>
                <button onClick={() => this.resetOrReinitCounter(false)}>ReInit</button>
                <button onClick={() => this.resetOrReinitCounter(true)}>Reset</button>
            </div>
        )
    }
}

export default Buttons;