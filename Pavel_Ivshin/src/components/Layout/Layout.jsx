import React from 'react';
import {Header} from '../Header/Header';
import {ChatList} from '../ChatList/ChatList';
import {Chat} from '../Chat/Chat';
import PropTypes from 'prop-types';
import './Layout.css';

/**
 * Компонент по отрисовке приложения
 * @param {number} id Ид выбранного чата
 * @param {object} chats Объект с чатами
 * @param {Function} onSendMessage Обработчик отправки новго сообщения
 * @param {Function} handleAddChat Обработчик добавления нового чата в список
 */

export const Layout = ({id, chats, handleSendMessage, handleAddChat}) => {
    const getChatJSX = () => {
        if(id && chats[id]){
            return <Chat chatId={id} messages={chats[id].messages} onSendMessage={handleSendMessage}/>
        }
        else{
            return <span>Вы не выбрали чат</span>
        }
    }

    const getHeaderJSX = () => {
        if(id && chats[id]){
            return <Header name={chats[id].name}/>
        }
        else{
            return <Header name={"Не выбран чат"}/>
        }
    }

    return (<div className="Layout">
        {getHeaderJSX()}
        <main className="Layout--content">
            <ChatList chats={chats} handleAddChat={handleAddChat} />
            {getChatJSX()}
        </main>
    </div>);
}

Layout.propTypes = {
    id: PropTypes.number,
    chats: PropTypes.object,
    handleSendMessage: PropTypes.func.isRequired,
    handleAddChat: PropTypes.func.isRequired
}