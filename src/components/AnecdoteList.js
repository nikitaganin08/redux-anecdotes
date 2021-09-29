import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initAnecdotes, toggleVoteOf } from '../reducers/anecdoteReducer'
import { removeNotification, setNotification } from '../reducers/notificationReducer'
import noteService from '../services/anecdotes'

const AnecdoteList = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        noteService.getAll().then(anecdotes => dispatch(initAnecdotes(anecdotes)))
    }, [dispatch])

    const anecdotes = useSelector(({ anecdotes, filter }) => {
        return anecdotes.filter(anecdote => {
            console.log(anecdote)
            return anecdote.content.toLowerCase().includes(filter)
        })
    })

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