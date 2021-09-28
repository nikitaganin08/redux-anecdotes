import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {toggleVoteOf} from "../reducers/anecdoteReducer";

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()

    const vote = (id) => {
        console.log('vote', id)
        dispatch(toggleVoteOf(id))
    }

    return (
        <div>
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
        </div>
    )
}

export default AnecdoteList