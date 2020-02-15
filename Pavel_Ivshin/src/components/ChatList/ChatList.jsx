import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import {ChatListForm} from '../ChatListForm/ChatListForm';
//import ListItem from '@material-ui/core/ListItem';
import {Link} from 'react-router-dom';
import {ChatListItem} from '../ChatListItem/ChatListItem';
// import { makeStyles } from '@material-ui/core/styles';
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
import './ChatList.css';
/**
 * Компонент по отрисовке списка чатов
 * @param {array} chats Объект с чатами
 * @param {Function} addChat Обработчик добавления нового чата в список
*/

// const useStyles = makeStyles(theme => ({
//     margin: {
//       margin: theme.spacing(1),
//     },
//     extendedIcon: {
//       marginRight: theme.spacing(1),
//     },
// }));

export const ChatList = ({chats, addChat, deleteChat}) =>{
    // const handleClick = (e) =>{
    //     e.preventDefault()
    //     deleteChat(e.target.cid);
    // }
//    const classes = useStyles();
    const chatItems = chats.map(({id, name, unread}) => (
        <Link key={id} to={'/chats/'+id}>
            {/* <ListItem className='CahtList--item'>{name}{unread && 'Новое сообщение'}
                <IconButton aria-label="delete" className={classes.margin} onClick={handleClick}>
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </ListItem> */}
            <ChatListItem id={id} name={name} unread={unread} deleteChat={deleteChat}/>
        </Link>));
    return (
        <div>
            <List className='ChatList'>
                { chatItems }
            </List>
            <ChatListForm addChat={addChat}/>
        </div>
    );
};

ChatList.propTypes = {
    chats: PropTypes.array,
    addChat: PropTypes.func.isRequired
};