import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

class MyTabs extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 1
        };
    }
    
    handleSelect(tabIndex) {
        this.setState({current: tabIndex});
    }
    
    render() {
        return (
            <div className="container>
            
            </div>
        );
    }
}