import React from 'react';
import { noteColor } from "../functions/noteColor";

const SingleTask = () => {
    return (
        <div className={noteColor()}>
            <h2>Task title</h2>
            <p>Task description</p>
        </div>
    );
};

export default SingleTask;