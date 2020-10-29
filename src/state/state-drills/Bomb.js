import React from 'react';


class Bomb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            word: "tick"
        }
    }


    componentDidMount = () => {
        this.interval = setInterval(() => {
            this.setState({count: this.state.count + 1})
            this.changeDisplay()
        }, 1000)
    }

    changeDisplay = () => {
        if (this.state.count >= 8) {
            this.setState({word: "BOOM"})
        } else if (this.state.count % 2 === 0) {
            this.setState({word: "tock"})
        } else if (this.state.count % 2 === 1) {
            this.setState({word: "tick"})
        }
    }

    changeInterval  = () => {
        if (this.state.count === 3) {
            console.log('there')
        }
    }
        

    componentWillUnmount = () => {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                <p>{this.state.word}</p>
            </div>
        )
    }
}

export default Bomb; 