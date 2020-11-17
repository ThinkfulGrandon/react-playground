import React from 'react';
import { Link } from 'react-router-dom';



function AboutMe(props) {
    return (
        <div>
            <h1>
            {props.title}
            </h1>
            <p>
                Content about me can go here. see look!
            </p>
        </div>
    )
}

export default AboutMe