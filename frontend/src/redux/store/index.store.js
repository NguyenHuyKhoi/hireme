import {createStore }from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducers from '../reducer/index.reducer'

 
const persistConfig = {
    key: 'root',
    storage,
}
 
const persistedReducer = persistReducer(persistConfig, reducers)
export const store= createStore(persistedReducer)
export const persistor=persistStore(store)
