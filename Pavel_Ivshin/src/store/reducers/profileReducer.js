import {handleActions} from 'redux-actions';
import {loadUser, changeName} from '../actions/profileAction';

const defaultState = {
    user: {}
};

export default handleActions({
    [loadUser]: (state) => {
        return {
            ...state,
            user: {
                name: 'User',
            }
        }
    },
    [changeName]: (state, {payload: {name}}) => {
        return {
            ...state,
            user: {
                name: name,
            }
        }
    },
}, defaultState);