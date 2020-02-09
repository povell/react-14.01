import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './ChatListItem.css';

/**
 * Компонент по отрисовке представления чата в списке чатов
 * @param {string} id Ид чата
 * @param {string} name Название чата
 * @param {bool} unread Есть ли непрочитанные сообщения 
 * @param {function} deleteChat Обработчик удаления чата
 */

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
}));

export const ChatListItem = ({id, name, unread, deleteChat}) => {
    const handleClick = (e) =>{
        console.log("iddd " + id);
        e.preventDefault();
        deleteChat(id);
    }
    const classes = useStyles();
    return (
        <ListItem className='CahtListItem'>{name}{unread && 'Новое сообщение'}
            <IconButton aria-label="delete" className={classes.margin} onClick={handleClick}>
                <DeleteIcon fontSize="small" />
            </IconButton>
        </ListItem> 
    );
};

ChatListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    unread: PropTypes.bool,
    deleteChat: PropTypes.func.isRequired,
};