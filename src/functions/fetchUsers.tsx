import { TaskModel } from '../models/TaskModel';

/*
  Function returns all users IDs that have a task assigned to it
*/

export const fetchUsers = (tasks:TaskModel[]) => {
    let users:number[] = [];
    tasks.forEach(task => {
       users.push(task.id);
    });
    return users;
}