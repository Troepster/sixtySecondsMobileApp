import {IAppState} from '../../types';
import {Action, Reducer} from 'redux';
import {CLEAR_TASKS, IAllPayloads, UPDATE_TASKS} from '../actions/actionTypes';


export const initialState: IAppState = {
  tasks: []
}

export interface DispatchAction extends Action {
  payload: Partial<IAllPayloads> | undefined;
}

export const rootReducer: Reducer<IAppState, DispatchAction> = (state= initialState, action) => {
  switch (action.type) {
    case UPDATE_TASKS:
      return {...state,tasks: [...action.payload?.tasks || []]};
    case CLEAR_TASKS:
      return {...state,tasks: []};
    default:
      return state;
  }
}
