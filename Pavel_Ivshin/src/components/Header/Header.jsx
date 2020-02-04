import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
/**
 * Компонент по отрисовке хедера
 * @param {string} name Имя юзера
 */

export const Header = (props) => {
    return (<div className='Header'>
        <div className="Header--layout">
            <Link to={"/chats/"}>
                Чаты
            </Link>
            <Link to={"/profile/"}>
                Профайл
            </Link>
        </div>
        <span>Имя пользователя: </span><span>{props.name}</span>
    </div>);
}

Header.propTypes = {
    name: PropTypes.string,
}