import React from 'react';

class CheckList extends React.Component{

    render(){
        let tasks = this.props.tasks.map((task) => (
            <li className="checklist_task" key={task.id}>
                <input type="checkbox" checked={task.done} />
                {task.name}
            </li>
        ));

        return(<div className="checklist">
                <ul>{tasks}</ul>
                <input type="text"
                        className="checklist_add_task"
                        placeholder="Type then hit Enter to add a task"
                        
                />                
            </div>
        );
    }
}

export default CheckList;