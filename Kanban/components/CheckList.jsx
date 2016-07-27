import React from 'react';

class CheckList extends React.Component{

    checkInputKeyPress(evt) {
        if(evt.key === 'Enter') {
            this.props.taskCallbacks.add(this.props.cardId, evt.target.value);
            evt.target.value = '';
        }
    }

    render(){
        let tasks = this.props.tasks.map((task, taskIndex) => (
            <li className="checklist_task" key={task._id}>
                <input type="checkbox" checked={task.done} />
                {task.name}
                <a href="#" className="checklist_task_remove"
                            onClick={this.props.taskCallbacks.delete.bind(
                                        null,
                                        this.props.cardId,
                                        task._id,
                                        taskIndex
                                    )}

                >DELETE IT(CLICK ME!) </a>       
            </li>
        ));

        return(<div className="checklist">
                <ul>{tasks}</ul>
                <input type="text"
                        className="checklist_add_task"
                        placeholder="Type then hit Enter to add a task"
                        onKeyPress={this.checkInputKeyPress.bind(this)}
                />                
            </div>
        );
    }
}

export default CheckList;