import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import {ChatListForm} from '../ChatListForm/ChatListForm';
import ListItem from '@material-ui/core/ListItem';
import {Link} from 'react-router-dom';
import './ChatList.css';
/**
 * Компонент по отрисовке списка чатов
 * @param {object} chats Объект с чатами
 * @param {Function} handleAddChat Обработчик добавления нового чата в список
*/

export const ChatList = ({chats, handleAddChat}) =>{
    const chatElements = Object.keys(chats).map(id => (
        <Link key={id} to={"/chats/"+id}>
            <ListItem>{chats[id].name}</ListItem>
        </Link>));
    return (
        <div>
        <List className='ChatList'>
            { chatElements }
        </List>
            <ChatListForm handleAddChat={handleAddChat}/>
        </div>
    )
}

ChatList.propTypes = {
    chats: PropTypes.object,
    handleAddChat: PropTypes.func.isRequired
}