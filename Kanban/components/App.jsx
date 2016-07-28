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

    addTask(cardId, taskName) {
        let cardIndex = this.state.cards.findIndex(
                (card) => card._id === cardId
            );

//      let newTask = {
//          id: uuid.v4(), 
//          name: taskName,
//          done: false
//      };
        
//      let nextState = update(this.state.cards, {
//          [cardIndex]: {
//              tasks: {$push: [newTask]}
//          }
//      });

//      this.setState({cards: nextState});

        fetch(`${API_URL}/cards/${cardId}/tasks`, {
            method: 'post',
            headers: API_JSON_HEADERS,
            body: JSON.stringify({taskname: taskName})
        })
        .then((response) => response.json())
        .then((responseData) => {
            let nextState = update(this.state.cards, {
                [cardIndex]: { $set: responseData }
            });
            this.setState({cards: nextState});
        });
    }

    deleteTask(cardId, taskId, taskIndex) {
        let cardIndex = this.state.cards.findIndex(
                (card) => card._id === cardId
            );


        // 我們要保存 previous state 才可以保存上次狀態
        let nextState = update(this.state.cards, {
            [cardIndex]: {
                tasks: {$splice: [[taskIndex, 1]]}
            }
        });        
        debugger;

        this.setState({cards: nextState});

        console.log(`delete card ${cardId}, ${taskId}, ${taskIndex}`);
        fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
            method: 'delete',
            headers: API_JSON_HEADERS
        });
    }    


    render(){
        return (<div>
            <h1>Kanban Project</h1>
            <KanbanContainer cards={this.state.cards} 
                            taskCallbacks={
                                {
                                    add: this.addTask.bind(this),
                                    delete: this.deleteTask.bind(this)
                                }
                            }
            />
        </div>)
        
            
        ;
    }
}