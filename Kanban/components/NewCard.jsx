import React from 'react';
import uuid from 'node-uuid';
import CardForm from './CardForm.jsx';

class NewCard extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            _id: uuid.v4(), // id vs. _id??? simulate the card stored at the server (mongo db)
            title: '',
            description: '',
            status: 'todo',
            tasks: []
        };
    }
    
    // [field] , 是要動態取值的意思 foo.bar 當今天 bar 是動態的value 就要這樣使用
    handleChange(field, value) {
        this.setState({[field]: value});
    }
    
    handleSubmit(evt) {
		evt.preventDefault();
		this.props.cardCallbacks.add(this.state);
		this.context.router.push('/');
    }
    
    handleClose() {
        this.context.router.push('/');
    }
    
    render() {
        return (
            <CardForm draftCard={this.state}
                        buttonLabel="Create Card"
                        handleChange={this.handleChange.bind(this)}
                        handleSubmit={this.handleSubmit.bind(this)}
                        handleClose={this.handleClose.bind(this)}
            />
        )
    }
}

// Have to include this statement
// http://stackoverflow.com/questions/36330617/this-props-history-is-deprecated-react-router
NewCard.contextTypes = {
	router: React.PropTypes.object.isRequired
};

export default NewCard;