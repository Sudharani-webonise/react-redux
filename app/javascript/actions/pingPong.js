import actions from '../actions';

export const hitPing = (pingMessage) => {
    return {
        type: actions.PING,
        pingMessage: pingMessage
    }
}
