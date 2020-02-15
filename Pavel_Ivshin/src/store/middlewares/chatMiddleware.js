import {addMessage, addChat, fire, unfire} from '../actions/chatAction';
import {push} from 'connected-react-router';

export default store => next => action => {
    if(action.type === addChat.toString()) {
        store.dispatch(push('/chats/' + action.payload.name));
        next(action);
    }else if(action.type == addMessage.toString()){
        next(action);
        const {id, name} = action.payload;
        if(store.getState().router.location.pathname !== '/chats/' + id){
            store.dispatch(fire(id));
        }
    }
    else if(action.type == '@@router/LOCATION_CHANGE'){
        next(action);
        const id = action.payload.location.pathname.split('/')[2];
        store.dispatch(unfire(id));
    }
    else{
        next(action);
    }
};