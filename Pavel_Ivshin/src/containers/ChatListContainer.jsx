import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ChatList} from '../components/ChatList/ChatList';
import {addChat} from '../store/actions/chatAction';


const mapStateToProps = ({chatReducer}, ownProps) => {
    return {
        chats: chatReducer.chats,
        chatsCount: Object.keys(chatReducer.chats).length,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      addChat
    }, dispatch);
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const cid = stateProps.chatsCount + 1;
    return {
        ...stateProps,
        onAddChat: (name) => {
            dispatchProps.addChat(cid, name)},
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ChatList);