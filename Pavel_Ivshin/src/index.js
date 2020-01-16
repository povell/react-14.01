import React from "react";
import ReactDom from "react-dom";
import {MessageField} from "./components/MessageField.jsx";

const messages = [
    {name: "Ivan", content: "Hello!"},
    {name: "Oleg", content: "Hi, how are you?"},
    {name: "Ivan", content: "I am well"}
]

const listRender = () => {
    ReactDom.render(<MessageField messages={messages} buttonClick = {buttonClick}/>, document.getElementById("root"));
}

const buttonClick = (message) => {
    messages.push(message)
    listRender();
}

listRender();