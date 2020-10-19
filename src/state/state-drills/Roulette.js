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

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    triggerPull = () => {
        this.setState( {spinningChamber: true} )
        this.interval = setInterval(() => {
            const chamber = Math.ceil(Math.random() * 8)
            this.setState( { spinningChamber: false } )
        }, 2000)
    }

    showSpinning = () => {
        if (this.state.spinningChamber === true) {
            return 'spinning the chamber and pulling trigger...!'
        } else {
            return ""
        }
    };

    render() {
        return(
            <div>
                <p>
                    {this.showSpinning()}
                </p>
                <button type="button" onClick = { this.triggerPull }>
                    pull the trigger</button>
            </div>
        )
    }
}


export default Roulette;