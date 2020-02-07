import {createActions} from 'redux-actions';

export const {loadChats, addMessage, addChat, deleteChat} = createActions({
    LOAD_CHATS: () => ({}),
    ADD_MESSAGE: (id, name, content) => ({id, name, content}),
    ADD_CHAT: (name) => ({name}),
    DELETE_CHAT: (id) => ({id}),
});