/**
 * configureStore.js
 * @author Vivian
 * @version 1.0.0
 * copyright 2014-2016, gandxiaowei@gmail.com all rights reserved.
 */

import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

//applyMiddleware来自redux可以包装 store 的 dispatch
//thunk作用是使被 dispatch 的 function 会接收 dispatch 作为参数，并且可以异步调用它
const createStoreWithMiddleware = compose(applyMiddleware(thunk), createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(reducers, initialState);
    return store;
}