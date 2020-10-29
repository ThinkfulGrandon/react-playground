import React, { Component } from 'react';
import './demonymApp.css'

import Demonym from './demonym';
import CountrySelector from './countrySelector';

class DemonymApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            selected: null 
        }
    }
    componentDidMount() {
        fetch('https://country.register.gov.uk/recordsWWWWW.json?page-size=5000')
            .then(response => {
                console.log('About to check for errors')
                if(!response.ok) {
                    console.log("an error did occur")
                    throw new Error('Something went wrong')
                } else {
                    return response;
                }
            })
            .then(response => response.json())
            .then(data => {
                const countries = Object.keys(data).map(
                    key => data[key].item[0]
                )
                this.setState({
                    countries
                });
            })
            .catch(err => {
                console.log('Handling the error here', err);
                this.setState({
                    error: err.message
                });
            });
    };

    setSelected(selected) {
        this.setState({
            selected
        })
    }

    render() {
        const demon = this.state.selected
          ? <Demonym name={this.state.selected['citizen-names']} country={this.state.selected.name}/>
          : <div className="demonym_app__placeholder">Select a country above</div>;

    const error = this.state.error 
        ? <div className="demonym_app__eror">{this.state.error}</div>
        : "";

        return (
            <div className="demonym_app">
                {error}
                <CountrySelector 
                    countries={this.state.countries} 
                    changeHandler={selected => this.setSelected(selected)}/>
                {demon}
            </div>
        )
    }
}



export default DemonymApp;

