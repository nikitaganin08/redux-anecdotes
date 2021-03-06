import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initAnecdotes, toggleVoteOf } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initAnecdotes(anecdotes))
    }, [dispatch])

    const anecdotes = useSelector(({ anecdotes, filter }) => {
        return anecdotes.filter(anecdote => {
            console.log(anecdote)
            return anecdote.content.toLowerCase().includes(filter)
        })
    })

    const vote = (anecdote) => {
        console.log('vote', anecdote.id)
        const changedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
        dispatch(toggleVoteOf(changedAnecdote))
        dispatch(setNotification(`you voted '${anecdote.content}'`, 10))
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