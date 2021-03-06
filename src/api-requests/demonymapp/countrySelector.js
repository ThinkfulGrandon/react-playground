import React, {Component} from 'react';
import './countrySelector.css';

class CountrySelector extends React.Component {

    changeSelection(value) {
        if(value === 'None') {
            this.props.cangeHandler(null)
        } else {
            const country = this.props.countries.find(country => country.name === value)
            this.props.changeHandler(country)
        }
    }

    render() {
        const options = this
                .props
                .countries
                .map((country, i) => <option value={country.name} key={i}>{country.name}</option>)
        return (
            <div className="country_selector">
                <form>
                    <label htmlFor="country">Select a country:</label>
                    <select 
                        id="country" 
                        name="country"
                            onChange={e => this.changeSelection(e.target.value)}>
                        <option value="none">select one...</option>
                        {options}
                    </select>
                </form>
            </div>
        );
    }
}

CountrySelector.defaultProps = {
    countries: []
};

export default CountrySelector;