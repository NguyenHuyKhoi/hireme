import {createStore,applyMiddleware }from 'redux'
import reducers from '../reducer/index.reducer'

export const  store = createStore(reducers,{})