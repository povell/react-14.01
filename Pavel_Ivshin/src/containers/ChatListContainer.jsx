import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ChatList} from '../components/ChatList/ChatList';
import {addChat, deleteChat} from '../store/actions/chatAction';


const mapStateToProps = (store) => {
    const chats = Object.keys(store.chatReducer.chats).map((id) => ({
        id,
        name: store.chatReducer.chats[id].name,
        unread: store.chatReducer.chats[id].unread
    }))
    return {
        chats
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addChat,
        deleteChat,
    }, dispatch);
};

// const mergeProps = (stateProps, dispatchProps, ownProps) => {
//     const id = ownProps.id;
//     return {
//         ...stateProps,
//         ...dispatchProps,
//         deleteChat: () => dispatchProps.deleteChat(id),
//     };
// };

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);