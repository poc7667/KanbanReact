import React from 'react';
import KanbanContainer from './KanbanContainer.jsx';

let cardsList = [
    {
        id: 1,
        title: 'Read the book',
        description: 'I should read the book',
        status: 'in-progress',
        tasks: []
    },
    {
        id: 2,
        title: 'Write some code',
        description: 'I should write some code',
        status: 'todo',
        tasks: [
            {
                id: 1,
                name: "Contact Example",
                done: true
            },
            {
                id: 2,
                name: "Kanban Example",
                done: false
            },
            {
                id: 3,
                name: "My own code",
                done: false
            }        
        ]
    }
]

export default class App extends React.Component {
    render(){
        return (<div>
            <h1>Hello Kanban Project</h1>
            <KanbanContainer cards={cardsList} />
        </div>)
        
            
        ;
    }
}