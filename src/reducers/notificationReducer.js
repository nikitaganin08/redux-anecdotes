const reducer = (state = '', action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch (action.type) {
    case 'SET_NOTIFICATION':
        return action.notification
    case 'REMOVE_NOTIFICATION':
        return ''
    default:
        return state
    }
}

export const setNotification = (notification, timeout) => {
    return async dispatch => {
        dispatch({
            type: 'SET_NOTIFICATION',
            notification
        })
        setTimeout(() => dispatch({
            type: 'REMOVE_NOTIFICATION'
        }), timeout * 1000)
    }
}

export default reducer