import React, {Component} from 'react';
import {ChatList} from '../components/ChatList/ChatList';

export class ChatListContainer extends Component{
    state = {
        chats: [
            {name: 'Chat1'},
            {name: 'Chat2'},
            {name: 'Chat3'},
            {name: 'Chat4'},
            {name: 'Chat5'}
        ]
    }

    render(){
        const {chats} = this.state;
        return <ChatList {...{chats}}/>
    }
}