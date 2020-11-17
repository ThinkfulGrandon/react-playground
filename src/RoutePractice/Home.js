import React from 'react';
import { Link } from 'react-router-dom';



function HomeElement(props) {
    return (
        <div>
            <h1>
            {props.title}
            </h1>
            <p>
                This is the content of the home page...
            </p>
        </div>
        
    )
}

export default HomeElement