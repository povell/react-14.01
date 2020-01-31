import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Layout} from '../Layout/Layout';
import PropTypes from 'prop-types';

/**
 * Компонент роутер
 * @param {object} chats Объект с чатами
 * @param {Function} onSendMessage Обработчик отправки новго сообщения
 * @param {Function} handleAddChat Обработчик добавления нового чата в список
*/

export const Router = ({chats, handleSendMessage, handleAddChat}) => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/chats/" exact render={(props) => (
                        <Layout 
                            id={+props.match.params.id}
                            chats={chats}
                            handleSendMessage={handleSendMessage}
                            handleAddChat={handleAddChat}/>
                )}/>
                <Route path="/chats/:id" exact render={(props) => (
                        <Layout 
                            id={+props.match.params.id}
                            chats={chats}
                            handleSendMessage={handleSendMessage}
                            handleAddChat={handleAddChat}/>
                )}/>
                <Route path="/about">
                    It's about
                </Route>
                <Route path="/home">
                    It's home
                </Route>
                <Route path="/profile">
                    <div>
                        <h1>Profile</h1>
                    </div>
                </Route>
                <Route path="/">
                    It's 404
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

Router.propTypes = {
    chats: PropTypes.object,
    handleSendMessage: PropTypes.func.isRequired,
    handleAddChat: PropTypes.func.isRequired
}