import React from "react";
import { Message } from "./Message.jsx";

const MessageField = ({messages, buttonClick}) => {
    let messagesList = messages.map((message, index) => <Message {...message} key={index}/>);
    return (<div>
        {messagesList}
        <button onClick = {buttonClick.bind(null, {name: "", content: "Нормально"})}>Add</button>
    </div>);
};

export { MessageField };