import React from 'react';
import {Link} from 'react-router';

import About from './About.jsx';
import Repos from './Repos.jsx';

export default class Home extends React.Component {
    render() {
        return(
            <div>
                <h1>Basic React Routing App</h1>
                <div><ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/repos">Repos</Link></li>
                </ul></div>
                {this.props.children}
            </div>
        )
    }
}