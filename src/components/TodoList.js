// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


import React from 'react';
import Todo from './Todo';

const TodoList = props => {

    return(
        <div>
            <div className="todoBody">
            {props.tasks.map(task => (
                <Todo
                    toggComplete={props.toggComplete}
                    key={task.id}
                    task={task}
                />
            ))}
            </div>
            <button className="clear-btn" onClick={props.clearCompleted}>
                Clear Completed Tasks
            </button>
        </div>
    )
}

export default TodoList;