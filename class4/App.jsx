import React from 'react';
import ReactDom from 'react-dom';

import Home from './Home.jsx'
import About from './About.jsx'
// import Repos from './Repos.jsx'


class App extends React.Component {
    constructor() {
        super();
        this.displayName = '';
        this.state = {
            hash: ''
        };
    }
    render() {
        let Child;
        switch(this.state.route){
            case '/about': 
                Child = About;
                break;
            case '/repos':
                Child = Repos;
                break;
            default:
                Child = Home;
        }
        return (
            <div>
                <h1>Simple Routing App</h1>
                <div><ul>
                    <li><a href="#/about">About</a></li>
                    <li><a href="#/repos">Repos</a></li>
                </ul></div>
                <Child />

                
            </div>
            
        );
    }
}

export default App;