import {createStore} from 'redux';
import RootReducer from '../Reducer/Index';

export const store = createStore(RootReducer)