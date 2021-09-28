import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {toggleVoteOf} from "../reducers/anecdoteReducer";
import {removeNotification, setNotification} from "../reducers/notificationReducer";

const AnecdoteList = () => {
    const anecdotes = useSelector(({anecdotes, filter}) => {
        return anecdotes.filter(anecdote => {
            return anecdote.content.toLowerCase().includes(filter)
        })
    })
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        console.log('vote', anecdote.id)
        dispatch(toggleVoteOf(anecdote.id))
        dispatch(setNotification(`you voted '${anecdote.content}'`))
        setTimeout(() => dispatch(removeNotification()), 5000)
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
                            <button onClick={() => vote(anecdote)}>vote</button>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default AnecdoteList