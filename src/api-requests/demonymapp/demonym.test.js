import React from 'react';
import Demonym from './api-requests/demonymapp/demonym'
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';

it('renders Demonym without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Demonym />);
    
})