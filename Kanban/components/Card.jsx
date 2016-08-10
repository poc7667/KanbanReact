import React from 'react';
import {Link} from 'react-router';
import CheckList from './CheckList.jsx';

class Card extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showDetails: false
        };
    }
    
    toggleDetails() {
        this.setState({
            showDetails: !this.state.showDetails
        });
    }
    
    render() {
        return(
            <div id={this.props.id} className="card">
                <div className="card_edit">
                    <Link to={'/edit/'+this.props.id}><span className="fa fa-pencil"></span></Link>
                    {"  "}
                    <a href="#" className="card_remove" 
					   onClick={this.props.cardCallbacks.delete.bind(
					   				null,
					   				this.props.id
					   		   )}
					/>
                </div>
                <div 
                    className={this.state.showDetails ? 'card_title_is_open' : 'card_title'}
                     onClick={this.toggleDetails.bind(this)}
                >
                    {this.props.title}
                </div>
                {
                    this.state.showDetails ? 
                    <div className="card_details">
                        <div dangerouslySetInnerHTML={{__html:this.props.description}}></div>
                        <CheckList cardId={this.props.id}
                                    tasks={this.props.tasks}
                                    taskCallbacks={this.props.taskCallbacks} 
                        />
                    </div> :
                    <div></div>
                }
            </div>
        )
    }
}

export default Card;