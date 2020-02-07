import {addMessage} from '../actions/chatAction';

// export default function  botMiddleware(store) {
//     return function (next){
//         return function (action) {
//             console.log(action);
//             next(action);
//         }
//     }
// }

export default store => next => action => {
    if(action.type === addMessage.toString() && action.payload.name !== 'Robot'){
        const {id, name} = action.payload;
        setTimeout(()=>store.dispatch(addMessage(id, 'Robot', `Hello, ${name} , I'm a Robot in chat ${id}`)),1000);
    }
    next(action);
};