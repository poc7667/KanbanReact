import React from 'react';

class Card extends React.Component{
    render(){
        return (
            <div className="card">
                <div className="card_title">{this.props.title}</div>
                <div className="card_details">
                    {this.props.description}
                </div>
            </div>
            );
    }
}

export default Card;