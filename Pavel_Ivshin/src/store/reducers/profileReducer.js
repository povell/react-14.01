import {handleActions} from 'redux-actions';
import {changeName, userRequest, userSuccess} from '../actions/profileAction';

const defaultState = {
    name: "",
    isLoading: false,
};

export default handleActions({
    [userRequest]: (state) => {
        return  {
            ...state,
            isLoading: true,
        };
    },
    [userSuccess]: (state, {payload}) => {
        console.log("PAY LOAD " + payload.name);
        return  {
            ...state,
            isLoading: false,
            name: payload.name,
        };
    },
    [changeName]: (state, {payload: {name}}) => {
        return {
            ...state,
            user: {
                name: name,
            }
        };
    },
}, defaultState);