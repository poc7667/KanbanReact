import React from 'react';

class List extends React.Component{

    render(){
        let cards = this.props.cards.map((card)=>{return <p key={card.id}>{card.title}</p>});
        return(
            <div>
                <h3> {this.props.title} </h3>
                {cards}
            </div>
        );
    }
}


export default List;