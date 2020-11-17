import React from 'react';
import { Link } from 'react-router-dom';



function Nav() {
    return (
        <ul  >
            <li>
                <Link to='/'>
                    Homepage
                </Link>
            </li>
            <li>
                <Link to='/aboutme'>
                    About Me
                </Link>
            </li>
            <li>
                <Link to='/otherlinks'>
                    Other Stuff
                </Link>
            </li>
        </ul>
        
    )
}

export default Nav