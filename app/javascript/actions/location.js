import actions from '../actions';

export const routeLocationDidUpdate = (location) => {
    return {
        type: '@@router/LOCATION_CHANGE',
        payload: location
    }
}
