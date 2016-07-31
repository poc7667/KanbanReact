import React from 'react';
import 'whatwg-fetch';
import update from 'react-addons-update';
import KanbanContainer from './KanbanContainer.jsx';

// let cardsList = [
//     {
//         id: 1,
//         title: 'Read the book',
//         description: '<p>I should read the <strong>whole</strong> book.</p>',
//         status: 'in-progress',
//         tasks: []
//     },
//     {
//         id: 2,
//         title: 'Write some code',
//         description: '<p>I should write some code from <a href="https://github.com/" target="_blank">github</a>.</p>',
//         status: 'todo',
//         tasks: [
//             {
//                 id: 1,
//                 name: "Contact Example",
//                 done: true
//             },
//             {
//                 id: 2,
//                 name: "Kanban Example",
//                 done: false
//             },
//             {
//                 id: 3,
//                 name: "My own code",
//                 done: false
//             }        
//         ]
//     }
// ]

// const API_URL = 'https://ucsc-react-class-kanban-server-winwust.c9users.io/api';
const API_URL = 'http://0.0.0.0:8081/api';
const API_JSON_HEADERS = {
    'Content-Type': 'application/json'
};

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            cards: []
        };
    }
    
    addTask(cardId, taskName) {
        let cardIndex = this.state.cards.findIndex(
                (card) => card._id === cardId
            );

        let newTask = {
            id: 1, 
            name: taskName,
            done: false
        };
        
        let nextState = update(this.state.cards, {
            [cardIndex]: {
                tasks: {$push: [newTask]}
            }
        });

        this.setState({cards: nextState});

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
        let nextState = update(this.state.cards, {
            [cardIndex]: {
                tasks: {$splice: [[taskIndex, 1]]}
            }
        });

        this.setState({cards: nextState});

        fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
            method: 'delete',
            headers: API_JSON_HEADERS
        });
    }
    
    componentDidMount() {
        fetch(`${API_URL}/cards`, {headers: API_JSON_HEADERS})
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({cards: responseData});
        })
        .catch((error) => {
            console.log('Error fetching and parsing data', error);
        });
    }
    
    render() {
        return (
            <div>
                <h1>Kanban Project</h1>
                <KanbanContainer cards={this.state.cards}
                                taskCallbacks={
                                    {
                                        add: this.addTask.bind(this),
                                        delete: this.deleteTask.bind(this)
                                    }
                                }
                />
            </div>
        )
    }
}

export default App;