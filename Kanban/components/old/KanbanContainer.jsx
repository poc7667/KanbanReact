import React from 'react';
import {Link} from 'react-router';
import List from './List.jsx';

class KanbanContainer extends React.Component {
    render() {
        console.log('children components in KanbanContainer', this.props.children);
        return(
            <div className="app">
                <Link to='/new' className="float-button">+</Link>
                
                <List id="todo" title="To Do" taskCallbacks={this.props.taskCallbacks} cards={
                    this.props.cards.filter((card) => card.status === "todo") 
                }/>
                <List id="in-progress" title="In Progress" taskCallbacks={this.props.taskCallbacks} cards={
                    this.props.cards.filter((card) => card.status === "in-progress") 
                }/>
                <List id="done" title="Done" taskCallbacks={this.props.taskCallbacks} cards={
                    this.props.cards.filter((card) => card.status === "done") 
                }/>
                
                {this.props.children}
            </div>
        );
    }
}

export default KanbanContainer;