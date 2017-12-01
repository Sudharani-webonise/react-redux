import actions from './index';

export const hitPing = (pingMessage) => {
    return {
        type: actions.PING,
        pingMessage: pingMessage
    }
}