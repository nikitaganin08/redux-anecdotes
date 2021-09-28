import {combineReducers, createStore} from 'redux'
import anecdoteReducer from '../reducers/anecdoteReducer'
import notificationReducer from "../reducers/notificationReducer";
import {composeWithDevTools} from 'redux-devtools-extension'

const store = () => {
    const reducer = combineReducers({
        anecdotes: anecdoteReducer,
        notification: notificationReducer
    })
    const store = createStore(reducer, composeWithDevTools())
    console.log(store.getState())
    return store
}

export default store