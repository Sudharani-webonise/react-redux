import actions from '../actions';

export const pingPong = (state = {}, action) => {
    switch (action.type) {
        case actions.PING:
            return {
                pingMessage: action.pingMessage
            }
        default:
            return state
    }
}
