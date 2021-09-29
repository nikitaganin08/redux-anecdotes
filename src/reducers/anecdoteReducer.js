import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch (action.type) {
    case 'TOGGLE_VOTE': {
        const id = action.data.id
        const anecdoteToChange = state.find(a => a.id === id)
        const changedAnecdote = {
            ...anecdoteToChange, votes: anecdoteToChange.votes + 1
        }
        return state.map(anecdote => anecdote.id === id ? changedAnecdote : anecdote)
    }
    case 'NEW_ANECDOTE':
        return [...state, action.data]
    case 'INIT_ANECDOTES':
        return action.data
    default:
        return state
    }
}

export const toggleVoteOf = (id) => {
    return {
        type: 'TOGGLE_VOTE',
        data: { id }
    }
}

export const createAnecdote = (content) => {
    return async dispatch => {
        const anecdote = await anecdoteService.create(content)
        dispatch({
            type: 'NEW_ANECDOTE',
            data: anecdote
        })
    }
}

export const initAnecdotes = () => {
    return async dispatch => {
        const anecdotes = await anecdoteService.getAll()
        dispatch({
            type: 'INIT_ANECDOTES',
            data: anecdotes
        })
    }
}

export default reducer