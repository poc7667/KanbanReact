import React from 'react';
import CheckList from './CheckList.jsx';

class Card extends React.Component{

    constructor(props, context){
        super(props, context);
        this.state = {
            showDetails: false,
            class_for_card_title: "card_title"
        };
    }

    toggleDetails(){
        this.setState({
            showDetails: !this.state.showDetails
        })
        // if(this.state.showDetails===true){
        //     this.setState({class_for_card_title: "card_title_is_open"})
        // }else{
        //     this.setState({class_for_card_title: "card_title"})
        // }
    }

    render(){
        return (

            <div className="card" onClick={this.toggleDetails.bind(this)}>
                <h1> {this.state.showDetails? "SHOW" : "HIDE"}
                </h1>
                <div  

                      className={this.state.showDetails ? 'card_title_is_open' : 'card_title'}
                >

                    {this.props.title}
                </div>
                {
                    this.state.showDetails?
                        <div className="card_details">
                            {this.props.description}
                            <CheckList cardId={this.props.id} 
                            tasks={this.props.tasks}>
                            </CheckList>
                        </div>                    
                    :
                        <div/>
                }

            </div>
            );
    }
}

export default Card;