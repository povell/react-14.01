import React from 'react';
import {Header} from '../Header/Header';
import {ChatListContainer} from '../../containers/ChatListContainer';
import {ChatContainer} from '../../containers/ChatContainer';
import './Layout.css';

/**
 * Компонент по отрисовке приложения
 */

export const Layout = ({}) => {
return (<div className="Layout">
    <Header />
    <main className="Layout--content">
        <ChatListContainer />
        <ChatContainer />
    </main>
</div>);
}