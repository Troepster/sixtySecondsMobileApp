import {IAppState, Task} from '../../types';

export const UPDATE_TASKS = 'UPDATE_TASKS';
export type UPDATE_TASKS = typeof UPDATE_TASKS;
export const CLEAR_TASKS = 'CLEAR_TASKS';
export type CLEAR_TASKS = typeof CLEAR_TASKS;

export interface IAllPayloads extends IAppState {
  tasks: Task[];
}
