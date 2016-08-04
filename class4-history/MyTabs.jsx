import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

class MyTabs extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 1
        };
    }
    
    componentDidMount() {
        window.addEventListener('popstate', this.changeHistory.bind(this));
        let tab = this.parseSearch(window.location.search);
        this.setState({current: parseInt(tab)});
    }
    
    parseSearch(search) {
        let hashes = search.slice(search.indexOf('?')+1).split('&');
        for (let entry of hashes) {
            let [k, v] = entry.split('=');
            if (k === 'tab') {
                return v;
            }
        }
        return "1";
    }
    
    changeHistory(evt) {
        if (evt.state && evt.state.tab) {
            this.setState({current: evt.state.tab});
        }
    }
    
    handleSelect(tabIndex) {
        this.addToHistory(tabIndex);
        this.setState({current: tabIndex});
    }
    
    addToHistory(tabIndex) {
        let historyUrl = window.location.pathname;
        historyUrl += '?tab=' + tabIndex;
        window.history.pushState({tab: tabIndex}, null, historyUrl);
    }
    
    render() {
        return (
            <div className="container">
                <Tabs activeKey={this.state.current} 
                      onSelect={this.handleSelect.bind(this)}
                      id="my-tab"
                >
                    <Tab eventKey={1} title="Tab 1">Tab 1 Content</Tab>
                    <Tab eventKey={2} title="Tab 2">Tab 2 Content</Tab>
                    <Tab eventKey={3} title="Tab 3">Tab 3 Content</Tab>
                </Tabs>
            </div>
        );
    }
}

export default MyTabs;