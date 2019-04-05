import React, {Component} from 'react';
import './Step.css';

class Step extends Component {

    resetOrReinitCounter = (reset) => {
        this.props.resetCounterValue(reset);
    }

    updateAdd = (step) => {
        this.props.updateStep(this.stepValue)
    }
    
    render() {
        return(
            <div className='Step'>
                Krok: <input ref={(data) => {this.stepValue = data}} onChange={this.updateAdd} type="number" min="1" />
            </div>
        )
    }
}

export default Step;