import {createActions} from 'redux-actions';

export const {loadChats, addMessage, addChat, deleteChat, fire, unfire} = createActions({
    LOAD_CHATS: () => ({}),
    ADD_MESSAGE: (id, name, content) => ({id, name, content}),
    ADD_CHAT: (name) => ({name}),
    DELETE_CHAT: (id) => ({id}),
    FIRE: (id) => ({id}),
    UNFIRE: (id) => ({id}),
});