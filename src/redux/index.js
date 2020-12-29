import {createStore, applyMiddleware} from 'redux';
import {reducer} from './redusers';
import thunk from "redux-thunk";

export const store = createStore(reducer, applyMiddleware(thunk));

export * from './action-types'
export * from './action-creators'
