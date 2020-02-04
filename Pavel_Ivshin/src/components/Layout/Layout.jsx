import React from 'react';
import ChatListContainer from '../../containers/ChatListContainer';
import PropTypes from 'prop-types';
import ChatContainer from '../../containers/ChatContainer';
import './Layout.css';

/**
 * Компонент по позиционированию ChatList и Chat
 * @param {number} id Ид из url
*/

export const Layout = ({id}) => {
    return (<div className="Layout">
        <main className="Layout--content">
            <ChatListContainer id={id}/>
            <ChatContainer id={id}/>
        </main>
    </div>);
}

Layout.propTypes = {
    id: PropTypes.number,
}