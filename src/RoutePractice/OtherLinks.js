import { render } from 'enzyme';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';



class OtherLinks extends React.Component {
    state = {

    }

    makeFetch() {
        fetch('https://fortnite-api.theapinetwork.com/items/popular')
        .then(response => response.json())
        .then(data => this.setState({
            api: [data],
            })
        )
        
    }

    render() {
        return (
            <div>
                <h1>
                    {this.props.title}
                    

                </h1>
                <p>
                    Lets get some other links here...
                    <button type="button"
                        onClick={() => this.makeFetch()}>click me!</button>
                </p>
                <ul>
                {Object.keys(this.state).length === 0 
                        ? "" 
                        : console.log(this.state.api[0].entries)
                        // this.state.api.map(links => (
                            
                        //     <li></li>
                        // ))
                }
                </ul>
            </div>
            
        )
    }
    
}

export default OtherLinks