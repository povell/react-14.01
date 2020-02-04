import {createActions} from 'redux-actions';

export const {loadChats, addMessage, addChat} = createActions({
    LOAD_CHATS: () => ({}),
    ADD_MESSAGE: (id, name, content) => ({id, name, content}),
    ADD_CHAT: (id, name) => ({id, name}),
});