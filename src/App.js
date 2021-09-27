import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {toggleVoteOf} from "./reducers/anecdoteReducer";
import AnecdoteForm from "./components/AnecdoteForm";

const App = () => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    const vote = (id) => {
        console.log('vote', id)
        dispatch(toggleVoteOf(id))
    }


    return (
        <div>
            <h2>Anecdotes</h2>
            {anecdotes
                .sort((anecdote, nextAnecdote) => nextAnecdote.votes - anecdote.votes)
                .map(anecdote =>
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => vote(anecdote.id)}>vote</button>
                        </div>
                    </div>
                )}
            <AnecdoteForm/>
        </div>
    )
}

export default App