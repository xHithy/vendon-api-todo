import React from 'react';
import SingleTask from './SingleTask';
import { TaskModel } from '../models/TaskModel';

interface Props {
    tasks: TaskModel[],
    error: unknown,
    loading:boolean
}

const TaskList = ({
    tasks,
    error,
    loading
}: Props) => {
    if (error) {
        return (
            <div className='task-list flex wrap gap-10'>
                <p>An error has occured</p>
            </div>
        )
    }
    if (loading) {
        return (
            <div className='task-list flex wrap gap-10 jc-c ai-c'>
                <p>Loading...</p>
            </div>
        )
    }
    return (
        <div className='task-list flex wrap gap-10'>
            {
                tasks.map((task) => (
                    <SingleTask
                        key={task.id}
                        task={task}
                    />
                ))
            }
        </div>
    );
};

export default TaskList;