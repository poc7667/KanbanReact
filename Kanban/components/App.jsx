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

var API_URL = "";
if (window.location.host.match(/pochsu/)) {
    API_URL = 'http://159.203.198.218:8081/api';
}
else {
    API_URL = 'http://0.0.0.0:8081/api';
}

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
        let prevState = this.state;
        
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
        })
        .catch((error) => {
            alert(error);
            this.setState(prevState);
        });
    }

    deleteTask(cardId, taskId, taskIndex) {
        let prevState = this.state;
        
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
        })
        .catch((error) => {
            alert(error);
            this.setState(prevState);
        });
    }
    
    addCard(card) {
        let prevState = this.state;

        let nextState = update(this.state.cards, {$push: [card]});

        this.setState({cards: nextState});

        fetch(`${API_URL}/cards`, {
            method: 'post',
            headers: API_JSON_HEADERS,
            body: JSON.stringify(card)
        })
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Server response wasn\'t OK')
            }
        })
        .then((responseData) => {
            card._id=responseData._id; // id vs. _id ???
            this.setState({cards: nextState});
        })
        .catch((error) => {
            this.setState(prevState);
        });
    }
    
    updateCard(card) {
        let prevState = this.state;
        let cardIndex = this.state.cards.findIndex((c) => c._id === card._id);
        let nextState = update(this.state.cards, {[cardIndex]: {$set: card}});

        this.setState({cards: nextState});

        fetch(`${API_URL}/cards/${card._id}`, {
            method: 'put',
            headers: API_JSON_HEADERS,
            body: JSON.stringify(card)
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Server response wasn\'t OK');
            }
        })
        .catch((error) => {
            this.setState(prevState);
        });
    }
    
    deleteCard(cardId) {
        let prevState = this.state;
        let cardIndex = this.state.cards.findIndex((c) => c._id === cardId);
        let nextState = update(this.state.cards, {$splice: [[cardIndex, 1]]});

        this.setState({cards: nextState});

        fetch(`${API_URL}/cards/${cardId}`, {
            method: 'delete',
            headers: API_JSON_HEADERS
        })
        .catch((error) => {
            alert(error);
            this.setState(prevState);
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
        console.log('children components in App', this.props.children);
        
        let kanbanContainer = React.cloneElement(
            this.props.children, {
                cards: this.state.cards,
                taskCallbacks: {
                    add: this.addTask.bind(this),
                    delete: this.deleteTask.bind(this)
                },
                cardCallbacks: {
                    add: this.addCard.bind(this),
                    update: this.updateCard.bind(this),
                    delete: this.deleteCard.bind(this)
                }
            });
            
        return (
            <div>
                <h1>Kanban Project</h1>
                <div>{kanbanContainer}</div>
            </div>
        )
        // return (
        //     <div>
        //         <h1>Kanban Project</h1>
        //         <KanbanContainer cards={this.state.cards}
        //                         taskCallbacks={
        //                             {
        //                                 add: this.addTask.bind(this),
        //                                 delete: this.deleteTask.bind(this)
        //                             }
        //                         }
        //         />
        //     </div>
        // )
    }

}

export default App;