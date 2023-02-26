import React from 'react';
import './styles/main.scss';
import TaskList from './components/TaskList';
import ActionBar from "./components/ActionBar";

const App = () => {
    return (
        <div className='main-container p-main'>
            <h1>Task list</h1>
            <ActionBar />
            <TaskList />
        </div>
    );
}

export default App;
