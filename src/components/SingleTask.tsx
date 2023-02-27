import React from 'react';
import {TaskModel} from "../models/TaskModel";

interface Props {
    task: TaskModel
}

const SingleTask = ({
    task
}: Props) => {
    return (
        <div className='sticky-note p-10 flex col gap-10'>
            <h2><b>{task.id}</b>. {task.title}</h2>
            <div className='task-info flex gap-20'>
                <p>User ID: <b>{task.userId}</b></p>
                <p>Completed: <b>{task.completed ? 'Yes' : 'No'}</b></p>
            </div>
        </div>
    );
};

export default SingleTask;