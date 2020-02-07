import {addMessage, addChat} from '../actions/chatAction';
import {push} from 'connected-react-router';

export default store => next => action => {
    if(action.type === addChat.toString()) {
        store.dispatch(push('/chats/' + action.payload.name));
        next(action);
    }
    else{
        next(action);
    }
};