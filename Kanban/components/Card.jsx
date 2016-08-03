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
    }

    render(){
        return (

            <div className="card" >
                <div  className={this.state.showDetails ? 'card_title_is_open' : 'card_title'} onClick={this.toggleDetails.bind(this)} >
                    {this.props.title}
                </div>
                {
                    this.state.showDetails?
                        <div className="card_details">
                            <div dangerouslySetInnerHTML={{__html:this.props.description}}></div>
                            <CheckList 
                                cardId={this.props.id} 
                                 tasks={this.props.tasks}
                                taskCallbacks={this.props.taskCallbacks} 
                            />
                            

                        </div>
                    :
                        <div></div>
                }

            </div>
            );
    }
}

export default Card;