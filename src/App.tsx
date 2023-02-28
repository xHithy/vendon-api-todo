import React, { useState } from 'react';
import './styles/main.scss';
import TaskList from './components/TaskList';
import ActionBar from './components/ActionBar';
import { useQuery } from 'react-query';
import { TaskModel } from './models/TaskModel';
import { UserModel } from './models/UserModel';
import { fetchPageCount } from './functions/fetchPageCount';
import { paginateArray } from './functions/paginateArray';

const App = () => {
    const [selectedPage, setSelectedPage] = useState<number>(0);
    const [totalPageCount, setTotalPageCount] = useState<number>(0);
    const [totalResults, setTotalResults] = useState<number>(0);
    const [resultCount, setResultCount] = useState<number>(0);
    const [userID, setUserID] = useState<number>(0);
    const [tasks, setTasks] = useState<TaskModel[]>([]);
    const [users, setUsers] = useState<UserModel[]>([]);

    const fetchAllTasks = () => fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json());
    const fetchAllUsers = () => fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

    const { isLoading, error, refetch } = useQuery('tasks', fetchAllTasks, {
        onSuccess: (data) => {
            if (userID) {
                let userTasks: TaskModel[] = [];
                data.forEach((task:TaskModel) => {
                    if (task.userId === userID) userTasks.push(task);
                });
                data = userTasks;
            }
            resultCount ? setTasks(paginateArray(selectedPage, resultCount, data)) : setTasks(data);
            setTotalResults(data.length);
            setTotalPageCount(fetchPageCount(totalResults, resultCount));
        }
    });

    useQuery('users', fetchAllUsers, {
        onSuccess: (data) => {setUsers(data)}
    });

    return (
        <div className='main-container flex col p-main gap-10'>
            <ActionBar
                resultCount={resultCount}
                setResultCount={setResultCount}
                userID={userID}
                setUserID={setUserID}
                users={users}
                totalResults={totalResults}
                refetch={refetch}
                totalPageCount={totalPageCount}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <TaskList
                tasks={tasks}
                error={error}
                loading={isLoading}
            />
        </div>
    );
}

export default App;
