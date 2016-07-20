import React from 'react';


class Contacts extends React.Component {

    render() {
        let contacts_list = this.props.contacts.map((contact)=>(
            <li key={contact.name}>
                {contact.name} / {contact.email}
            </li>
        ));

        return (<div>
            <ul>
                {contacts_list}
            </ul>
        </div>);
    }


}

export default Contacts;