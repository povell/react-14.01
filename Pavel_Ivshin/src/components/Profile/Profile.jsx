import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

/**
 * Компонент по отрисовке профиля
 * @param {string} name Имя юзера
 */

export const Profile = (props) => {
    console.log('props', props);
    return(
        <div className="Profile">
            <span>Профиль</span>
        </div>
    );
}

Profile.propTypes = {
    name: PropTypes.string,
}