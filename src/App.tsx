import React, {useEffect, useState} from 'react';
import './styles/main.scss';
import TaskList from './components/TaskList';
import ActionBar from './components/ActionBar';
import { useQuery } from 'react-query';
import { TaskModel } from './models/TaskModel';
import { UserModel } from './models/UserModel';

const App = () => {
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
                    if (task.userId === userID) {
                        userTasks.push(task);
                    }
                });
                setTasks(userTasks);
            } else {
                setTasks(data);
            }
        }
    });

    useQuery('users', fetchAllUsers, {
        onSuccess: (data) => {
            setUsers(data);
        }
    });


    return (
        <div className='main-container flex col p-main gap-10'>
            <ActionBar
                resultCount={resultCount}
                setResultCount={setResultCount}
                userID={userID}
                setUserID={setUserID}
                users={users}
                tasks={tasks}
                refetch={refetch}
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
