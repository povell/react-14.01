import React, {Component} from 'react';
import {Router} from '../components/Router/Router';

export class App extends Component {

    state = {
        chats: {
            1: {
                name: "Chat1",
                messages: [
                    {name: "Ivan", content: "Hello! It's chat one!"},
                    {name: "Ivan", content: "How are you?"},
                ],
            },
            2: {
                name: "Chat2",
                messages: [
                    {name: "Den", content: "Hi from chat 2"},
                ],
            },
            3: {
                name: "Chat3",
                messages: [
                ],
            },
        }
    }

    // componentDidUpdate() {
    //     const {chats} = this.state;
    //     const {id} = this.props.match.params;
    //     if(id && chats[id]){
    //         const messages = this.state.chats[id].messages;
    //         const lastMessage = messages[messages.length - 1];
    //         if(lastMessage && lastMessage.name !== ROBOT_NAME){
    //             setTimeout(() => this.handleSendMessage(id)({name: ROBOT_NAME, content: "Hi, I'm robot! it's chat " + id}), 2000);
    //         }
    //     }
    // }
    addChat = (chatName) => {
        const chatId = Object.keys(this.state.chats).length + 1;
        this.setState((state) => (
            {chats: {
                ...state.chats,
                [chatId] :
                {
                    name: chatName,
                    messages: []
                }
            }}
        ))
    }

    handleSendMessage = (message, id) => {
        this.setState((state) => ({chats: {
            ...state.chats,
            [id]: {
                name: state.chats[id].name, 
                messages: [
                    ...state.chats[id].messages,
                    message,
                ]
            },
        }}));
    }

    render(){
        return (
            <Router 
                chats = {this.state.chats}
                handleSendMessage = {this.handleSendMessage}
                handleAddChat = {this.addChat}
            />
        )
    }
}