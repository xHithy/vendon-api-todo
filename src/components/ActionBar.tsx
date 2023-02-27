import React from 'react';
import { TaskModel } from '../models/TaskModel';
import { UserModel } from '../models/UserModel';
import {RefetchOptions, RefetchQueryFilters} from "react-query";

interface Props {
    resultCount: number;
    setResultCount: React.Dispatch<React.SetStateAction<number>>;
    userID: number;
    setUserID: React.Dispatch<React.SetStateAction<number>>;
    tasks: TaskModel[];
    users: UserModel[];
    refetch: any;
}

const ActionBar = ({
    resultCount,
    setResultCount,
    userID,
    setUserID,
    tasks,
    users,
    refetch
}: Props) => {
    const handleUserFilter = (id:number) => {
        setUserID(id);
        refetch();
    }

    const handleResultFilter = (resultCount:number) => {
        setResultCount(resultCount);
        refetch();
    }

    return (
        <div className='action-bar p-10 flex gap-10 jc-sb ai-c'>
            <div className='paginator flex gap-20 ai-c'>
                <div className='flex gap-10'>
                    1
                    2
                    3
                    4
                </div>
                Total results: {tasks.length}
            </div>
            <div className='actions flex gap-20'>
                <label className='flex col'>
                    <b>Results per page</b>
                    <select value={resultCount} onChange={(e) => handleResultFilter(parseInt(e.target.value))}>
                        <option defaultValue='0'>All results</option>
                        <option value='10'>10</option>
                        <option value='25'>25</option>
                        <option value='50'>50</option>
                    </select>
                </label>
                <label className='flex col'>
                    <b>User ID</b>
                    <select value={userID} onChange={(e) => handleUserFilter(parseInt(e.target.value))}>
                        <option value='0'>All users</option>
                        {
                            users.map((user) => (
                                <option key={user.id} value={user.id}>({user.id}) {user.username}</option>
                            ))
                        }
                    </select>
                </label>
            </div>
        </div>
    );
};

export default ActionBar;