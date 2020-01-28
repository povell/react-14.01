import React from 'react';
import PropTypes from 'prop-types';
import {ChatListItem} from '../ChatListItem/ChatListItem';
import List from '@material-ui/core/List';
import './ChatList.css';
/**
 * Компонент по отрисовке списка чатов
 * @param {array} chats Массив чатов
*/

export const ChatList = ({chats}) =>
    (<List className='ChatList'>
        {chats.map((chat, index) => <ChatListItem {...chat} key={index} />)}
    </List>);

ChatList.propTypes = {
    chats: PropTypes.arrayOf(PropTypes.shape(ChatListItem.propTypes))
}