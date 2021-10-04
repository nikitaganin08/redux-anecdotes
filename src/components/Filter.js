import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const Filter = (props) => {

    const style = {
        marginBottom: 10
    }

    const handleChange = (event) => {
        event.preventDefault()
        const filter = event.target.value
        console.log(filter)
        props.setFilter(filter)
    }

    return (
        <div style={style}>
            filter <input onChange={handleChange}/>
        </div>
    )
}

const ConnectedFilter = connect(null, { setFilter })(Filter)
export default ConnectedFilter