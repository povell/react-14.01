import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';

/**
 * Компонент по отрисовке представления чата в чат-листе
 *  * @param {string} name Название чата
  */

export const ChatListItem = ({name}) => {
    return (<ListItem>{name}</ListItem>);
}

ChatListItem.propTypes = {
    name: PropTypes.string.isRequired,
}