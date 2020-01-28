import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Message.css';

/**
 * Компонент по отрисовке сообщения
 * @param {string} content Текст сообщения
 * @param {string} name Имя отправителя
 */

export const Message = ({name, content}) => {
    const classNames = classnames('Message', {'Message--robot': name === 'Robot'});
    return (<div className={classNames}><strong>{name}:</strong>{content}</div>);
}

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}