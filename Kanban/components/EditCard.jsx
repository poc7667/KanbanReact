import React from 'react';
import CardForm from './CardForm.jsx';

class EditCard extends React.Component {
    constructor(props, context) {
        super(props, context);
        let card = this.props.cards.find(
			(card) => card._id == this.props.params.card_id
		);
		this.state = card;
	}

	handleChange(field, value) {
		this.setState({[field]: value});
	}

	handleSubmit(evt) {
		evt.preventDefault();
		this.props.cardCallbacks.update(this.state);
		this.context.router.push('/');
	}

	handleClose(e) {
		this.context.router.push('/');
	}
    
    render() {
        return (
            <CardForm draftCard={this.state}
					  buttonLabel="Edit Card"
					  handleChange={this.handleChange.bind(this)}
					  handleSubmit={this.handleSubmit.bind(this)}
					  handleClose={this.handleClose.bind(this)}
			/>
        )
    }
}

EditCard.contextTypes = {
	router: React.PropTypes.object.isRequired
};

export default EditCard;