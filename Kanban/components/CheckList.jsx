import React from 'react';

class CheckList extends React.Component{

    render(){
        let tasks = this.props.tasks.map((task) => (
            <li className="checklist_task" key={task.id}>
                <input type="checkbox" checked={task.done} />
                {task.name}
            </li>
        ));

        return(<div>
                <ul>{tasks}</ul>
            </div>
        );
    }
}

export default CheckList;