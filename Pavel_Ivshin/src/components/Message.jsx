import React from "react";

const Message = ({name, content}) => <div><strong>{name? name + ":" : ""}</strong> {content}</div>;

export { Message };