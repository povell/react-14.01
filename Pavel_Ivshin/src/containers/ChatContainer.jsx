//import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import {addMessage} from '../store/chatAction';
import {Chat} from '../components/Chat/Chat';
import {addMessage} from '../store/actions/chatAction';

// class ChatContainer extends Component {

//     // addChat = (chatName) => {
//     //     const chatId = Object.keys(this.state.chats).length + 1;
//     //     this.setState((state) => (
//     //         {chats: {
//     //             ...state.chats,
//     //             [chatId] :
//     //             {
//     //                 name: chatName,
//     //                 messages: []
//     //             }
//     //         }}
//     //     ))
//     // }

//     // handleSendMessage = (id) => (message) => {
//     //     this.props.addMessage(id, message.name, message.content);
//     // }

//     // componentDidMount(){
//     //     this.props.loadChats();
//     // }

//     // render(){
//     //     console.log(this.props.chats);
//     //     //this.props.match.params;
//     //     //const {id} = this.props.match.params;
//     //     const {chats, id, addMessage} = this.props;
//     //     return (
//     //             <Layout
//     //                 chatId = {id}
//     //                 chats = {chats}
//     //                 onSendMessage = {addMessage}
//     //             />
//     //     )
//     // }
// }

const mapStateToProps = ({chatReducer}, ownProps) => {
    const id = ownProps.id;
    return {
        messages: id ? chatReducer.chats[id] ? chatReducer.chats[id].messages : null : null,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
      addMessage
    }, dispatch);
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const id = ownProps.id;
    return {
        ...stateProps,
        onSendMessage:  ({name, content}) => dispatchProps.addMessage(id, name, content),
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);