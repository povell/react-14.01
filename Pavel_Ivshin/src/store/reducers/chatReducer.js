import {handleActions} from 'redux-actions';
import {loadChats, addMessage, addChat, deleteChat} from '../actions/chatAction';

const defaultState = {
    chats: {}
};

export default handleActions({
    [loadChats]: (state) => {
        return  {
            ...state,
            chats: {
                1: {
                    name: 'Chat1',
                    messages: [
                        {name: 'Ivan', content: 'Hello! It\'s chat one!'},
                        {name: 'Ivan', content: 'How are you?'},
                    ],
                },
                2: {
                    name: 'Chat2',
                    messages: [
                        {name: 'Den', content: 'Hi from chat 2'},
                    ],
                },
                3: {
                    name: 'Chat3',
                    messages: [
                    ],
                },
            }
        };
    },
    [addMessage]: (state, {payload: {id, name, content}}) => {
        return {
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name,
                    messages: [
                        ...state.chats[id].messages,
                        {name, content},
                    ]
                }
            }
        };
    },
    [addChat]: (state, {payload: {name}}) => {
        return {
            ...state,
            chats: {
                ...state.chats,
                [name]: {
                    name: name,
                    messages: []
                }
            }
        };
    },
    [deleteChat]: (state, {payload: {id}}) => {
        let newChats = {...state.chats};
        delete newChats[id];
        return {
            ...state,
            chats: {
                newChats,
            }
        }
    }
}, defaultState);