import React, { Component } from "react";

export default class Message extends Component {
    render() {
        const {name, content} = this.props;
        return <div><strong>{name? name + ":" : ""}</strong> {content}</div>;
    }
}