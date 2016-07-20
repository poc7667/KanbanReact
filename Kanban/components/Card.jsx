import React from 'react';
import CheckList from './CheckList.jsx';

class Card extends React.Component{
    render(){
        return (
            <div className="card">
                <div className="card_title">{this.props.title}</div>
                <div className="card_details">
                    {this.props.description}
                    <CheckList cardId={this.props.id} 
                    tasks={this.props.tasks}>
                    </CheckList>
                </div>
            </div>
            );
    }
}

export default Card;