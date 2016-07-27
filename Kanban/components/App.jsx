import React from 'react';
import KanbanContainer from './KanbanContainer.jsx';
import 'whatwg-fetch';
import update from 'react-addons-update';

const API_URL = 'https://ucsc-react-class-kanban-server-winwust.c9users.io/api';
const API_JSON_HEADERS = {
    'Content-Type': 'application/json'
};

export default class App extends React.Component {

    constructor(props, context){
        super(props, context)
        this.state = {
            cards: []
        };
    }

    componentDidMount() {
        fetch(`${API_URL}/cards`, {headers: API_JSON_HEADERS})  
            .then((resp) => resp.json())
            .then((respData) =>{
                this.setState({cards: respData})
            })
            .catch((err)=>{console.log(err)});
    }


    render(){
        return (<div>
            <h1>Hello Kanban Project</h1>
            <KanbanContainer cards={this.state.cards} />
        </div>)
        
            
        ;
    }
}