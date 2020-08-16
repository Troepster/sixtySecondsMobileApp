import {Dispatch} from 'react';
import {DispatchAction} from './reducers/rootReducer';
import {Task} from '../types';
import {CLEAR_TASKS, UPDATE_TASKS} from './actions/actionTypes';
import {store} from './index';

export class RootDispatcher {

  private readonly dispatch: Dispatch<DispatchAction>;

  constructor(dispatch: Dispatch<DispatchAction>) {
    this.dispatch = dispatch;
  }

  addTask = (task: Task) => {
    // @ts-ignore
    const {tasks} = store.getState()

    this.dispatch({type: UPDATE_TASKS, payload: {tasks: [...tasks, task]}});
  };
  updateTask = (task: Task) => {
    // @ts-ignore
    const {tasks} = store.getState()
    this.dispatch({
      type: UPDATE_TASKS, payload: {
        tasks: tasks.map((t: Task) => {
          return t.id === task.id ? task : t;
        })
      }
    });
  };
  clearTasks = () => this.dispatch({type: CLEAR_TASKS, payload: undefined});
}
