import React from 'react';
import SingleTask from "./SingleTask";

const TaskList = () => {
    return (
        <div className='task-list flex wrap gap-10'>
            <SingleTask />
        </div>
    );
};

export default TaskList;