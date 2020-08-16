import {applyMiddleware, compose, createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage'

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {IAppState} from '../types';
import {DispatchAction, initialState, rootReducer} from './reducers/rootReducer';
import {createLogger} from 'redux-logger';

const logger = createLogger({
  collapsed: true,
  diff: true
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, rootReducer as any);

// @ts-ignore
export const store = createStore<IAppState,DispatchAction,null,null>(pReducer as any,initialState,compose(applyMiddleware(logger)));
export const persistor = persistStore(store);
