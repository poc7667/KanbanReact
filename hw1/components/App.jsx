import React from 'react';


class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        let contacts_list = require('json!../fixture/contacts.json');
        this.state = {
            searchName: "",
            contacts_list: contacts_list
        };

    }

    updateSearchName(evt) {
        console.log(evt.target.value);
        this.setState({
            searchName: evt.target.value
        })
    }

    filteredContacts() {
        if (this.state.searchName.length === 0) {
            return this.state.contacts_list;
        } else {
            var _self = this;
            return this.state.contacts_list.filter(function (contact, index) {
                return contact.name.indexOf(_self.state.searchName) != -1;
            })
        }

    }

    render() {
        return (<div>
            <h1>
                Hw1
            </h1>
            <input type="text" onChange={this.updateSearchName.bind(this)}/>
            <Contacts contacts={this.filteredContacts(this)}/>
        </div>);
    }

}

export default App;