import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component {

    resetOrReinitCounter = (flag) => {
        this.props.resetCounterValue(flag);

    }

    render() {
        return (
            <div className='buttons-panel'>
                <button onClick={this.props.changeCounterValue}>Add 1</button>
                <button onClick={() => { this.resetOrReinitCounter(1) }}>Re Init</button>
                <button onClick={() => { this.resetOrReinitCounter(0) }}>Reset</button>
            </div>
        )
    }
}

export default Buttons;