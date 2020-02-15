import {handleActions} from 'redux-actions';
import {addMessage, addChat, deleteChat, fire, unfire, chatsRequest, chatsSuccess} from '../actions/chatAction';

const defaultState = {
    chats: {},
    isLoading: false,
};

export default handleActions({
    [chatsRequest]: (state) => {
        return  {
            ...state,
            isLoading: true,
        };
    },
    [chatsSuccess]: (state, {payload}) => {
        console.log("PAY LOAD " + payload);
        return  {
            ...state,
            isLoading: false,
            chats: payload,
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
        const newChats = {...state.chats};
        delete newChats[id];
        return {
            ...state,
            chats: newChats,
        }
    },
    [fire]: (state, {payload: {id}}) => {
        return {
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name,
                    messages: state.chats[id].messages,
                    unread: true,
                }
            }
        };
    },
    [unfire]: (state, {payload: {id}}) => {
        if(!state.chats[id]) return state;
        return {
            ...state,
            chats: {
                ...state.chats,
                [id]: {
                    name: state.chats[id].name,
                    messages: state.chats[id].messages,
                    unread: false,
                }
            }
        };
    },
}, defaultState);