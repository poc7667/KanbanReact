import React from 'react';

class KanbanContainer extends React.Component{
    render(){
        let list = this.props.cards.map((card)=>{return  <li key={card.id}> {card.title} </li>
        });

        return(
            <div className="app">
                <ul>
                    {list}
                </ul>
            </div>
            );
    }
}

export default KanbanContainer;