import React from 'react';
import uuid from 'node-uuid';
import CardForm from './CardForm.jsx';

class NewCard extends React.Component {
    constructor(props, context) {
        debugger
        super(props, context);
        this.state = {
            id: uuid.v4(),
            title: '',
            description: '',
            status: 'todo',
            tasks: []
        };
    }
    
    handleChange() {
        
    }
    
    handleSubmit() {
        
    }
    
    handleClose() {
        debugger
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

export default NewCard;