import React from 'react';
import { Link } from 'react-router-dom';



function ApiLink(props) {
    return (
        <div>
            <h1>
            {props.title}
            </h1>
            <p>
                This is the content of the LINK PAGE
            </p>
        </div>
        
    )
}

export default ApiLink