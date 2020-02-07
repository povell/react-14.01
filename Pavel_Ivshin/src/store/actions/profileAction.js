import {createActions} from 'redux-actions';

export const {loadUser, changeName} = createActions({
    LOAD_USER: () => ({}),
    CHANGE_NAME: (name) => ({name}),
});