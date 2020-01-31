import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
/**
 * Компонент по отрисовке хедера
 * @param {string} name Название выбранного чата
 */

export const Header = ({name}) => {
    return (<div className='Header'>
        {name}
        <Link to={"/profile/"}>
            Профиль
        </Link>
    </div>);
}

Header.propTypes = {
    name: PropTypes.string
}