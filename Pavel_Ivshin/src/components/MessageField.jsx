import React, { Component } from "react";
import Message from "./Message";

export default class MessageField extends Component {
    state = {
        messages: [
            {name: "Ivan", content: "Hello!"},
            {name: "Oleg", content: "Hi, how are you?"},
            {name: "Ivan", content: "I am well"}
        ]
    };

    handleClick = () => {
//        this.setState({ messages: [ ...this.state.messages, {name: "Author", content: "Нормально"} ] });
        this.setState(({ messages }) => ({
            messages: [...messages, {name: "Author", content: "Нормально"}]
        }));
    };

    componentDidUpdate() {
        const messages = this.state.messages;
        if(messages[messages.length - 1].name !== "Робот") {
            setTimeout(() => {
                this.setState(({ messages }) => ({
                     messages: [ ...messages, 
                        {name: "Робот", content: "Не приставай ко мне, я робот!"}]
                 }))
            }, 1000);
        }
    };

    render() {
        const messagesList = this.state.messages.map((message, index) => <Message {...message} key={index}/>);
        return (
            <>
                { messagesList }
                <button onClick={ this.handleClick }>Отправить сообщение</button>
            </>
        )
    }
}