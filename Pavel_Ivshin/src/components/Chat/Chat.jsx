import React from 'react';
import PropTypes from 'prop-types';
import {MessageField} from '../MessageField/MessageField';
import {Message} from '../Message/Message';
import {ChatForm} from '../ChatForm/ChatForm';
import './Chat.css';

/**
 * Компонент по отрисовке чата
 * @param {number} chatId Ид выбранного чата
 * @param {array} messages Массив пересланных сообщений
 * @param {Function} onSendMessage Обработчик отправки нового сообщения
 */

export const Chat = ({chatId, messages, onSendMessage}) =>
    (<div className="Chat">
        <MessageField messages={messages}/>
        <ChatForm chatId={chatId} onSendMessage={onSendMessage}/>
    </div>);

Chat.propTypes = {
    chatId: PropTypes.number,
    messages: PropTypes.arrayOf(PropTypes.shape(Message.propTypes)),
    onSendMessage: PropTypes.func.isRequired
}