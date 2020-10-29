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
         this.setState({
             spinningChamber: true
         })
         
         setTimeout(() => {
            this.setState({
                chamber: Math.floor(Math.random() * 8),
                spinningChamber: false
                
            })
            console.log(this.state.chamber)
         }, 2000)
         

         console.log(this.props.chamber)

    } 

    render() {
        return(
            <div>
                <p>{this.state.spinningChamber === true ? "spinning"
                 : this.state.spinningChamber === false && this.state.chamber === this.props.chamber ? "BANG"
                 : "Safe!"}</p>
                <button type="button" onClick = {() => this.handleTriggerPull()}>Pull Trigger</button>
            </div>
        )
    }
}


export default Roulette; 