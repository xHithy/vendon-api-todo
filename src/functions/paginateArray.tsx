import { TaskModel } from '../models/TaskModel';

export const paginateArray = (
    selectedPage:number,
    resultCount:number,
    tasks:TaskModel[]
) => {
    const total = tasks.length;
    let max = selectedPage * resultCount;
    let min = selectedPage * resultCount - resultCount;
    let paginatedTasks:TaskModel[] = [];

    if (total < max) max = total;

    while (min < max) {
        paginatedTasks.push(tasks[min]);
        min++;
    }

    return paginatedTasks;
}