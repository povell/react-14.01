import {createActions} from 'redux-actions';
//import {createAction} from 'redux-api-middleware';

export const {addMessage, addChat, deleteChat, fire, unfire, chatsRequest, chatsSuccess, chatsFailure} = createActions({
    //LOAD_CHATS: () => ({}), loadChats
    ADD_MESSAGE: (id, name, content) => ({id, name, content}),
    ADD_CHAT: (name) => ({name}),
    DELETE_CHAT: (id) => ({id}),
    FIRE: (id) => ({id}),
    UNFIRE: (id) => ({id}),
    CHATS_REQUEST: () => ({}),
    CHATS_SUCCESS: (data) => (data),
    CHATS_FAILURE: (error) => (error),
});

// export const chatsRequest = '@@chats/CHATS_REQUEST'
// export const chatsSuccess = '@@chats/CHATS_SUCCESS'
// export const chatsFailure = '@@chats/CHATS_FAILURE'
 
// export const loadChats = () => createAction({
//   endpoint: '/api/chats.json',
//   method: 'GET',
//   headers: { 'Content-Type': 'application/json' },
//   types: [
//     chatsRequest,
//     chatsSuccess,
//     chatsFailure
//   ]
// })

export const loadChats = () => {
  return async (dispatch) => {
    try {
      dispatch(chatsRequest());
      const result = await fetch('/api/chats.json');
      dispatch(chatsSuccess(await result.json()));
    }
    catch(e) {
      dispatch(chatsFailure(e))
    }
  }
}