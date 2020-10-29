import React from 'react';

class Roulette extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningChamber: false,
        }
    }
    static defaultProps = {
        bulletInChamber: 8,
    }

    handleTriggerPull() {
         console.log('hi')

    }

    render() {
        return(
            <div>
                <p></p>
                <button type="button" onClick = {() => {this.handleTriggerPull()}}>Pull Trigger</button>
            </div>
        )
    }
}


export default Roulette; 