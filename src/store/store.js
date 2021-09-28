import {combineReducers, createStore} from 'redux'
import anecdoteReducer from '../reducers/anecdoteReducer'
import notificationReducer from "../reducers/notificationReducer";
import {composeWithDevTools} from 'redux-devtools-extension'
import filterReducer from "../reducers/filterReducer";

const store = () => {
    const reducer = combineReducers({
        anecdotes: anecdoteReducer,
        notification: notificationReducer,
        filter: filterReducer
    })
    const store = createStore(reducer, composeWithDevTools())
    console.log(store.getState())
    return store
}

export default store