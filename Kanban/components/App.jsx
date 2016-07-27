import React from 'react';
import KanbanContainer from './KanbanContainer.jsx';
import 'whatwg-fetch';
import update from 'react-addons-update';

// let cardsList = [
//     {
//         id: 1,
//         title: 'Read the book',
//         description: 'I should read the book',
//         status: 'in-progress',
//         tasks: []
//     },
//     {
//         id: 2,
//         title: 'Write some code',
//         description: 'I should write some code',
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

const API_URL = 'https://ucsc-react-class-kanban-server-winwust.c9users.io/api';
const API_JSON_HEADERS = {
    'Content-Type': 'application/json'
};

export default class App extends React.Component {
    render(){
        return (<div>
            <h1>Hello Kanban Project</h1>
            <KanbanContainer cards={cardsList} />
        </div>)
        
            
        ;
    }
}