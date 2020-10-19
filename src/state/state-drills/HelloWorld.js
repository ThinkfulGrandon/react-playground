import React from 'react';

class Hello extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            who: 'World',
        }
    }
    render() {
        return (
            <div>
                <p>Hello {this.state.who}! </p>
                <button type="button" onClick = { () => { this.setState({ who: "World" }) } }>World</button>
                <button type="button" onClick = { () => { this.setState({ who: "Friend" }) } }>Friend</button>
                <button type="button" onClick = { () => { this.setState({ who: "React" }) } }>React</button>
            </div>


            
        )
    }
}

export default Hello;