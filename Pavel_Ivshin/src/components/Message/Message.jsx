import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import './Message.css';

/**
 * Компонент по отрисовке сообщения
 * @param {string} content Текст сообщения
 * @param {string} name Имя отправителя
 */

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
}));

export const Message = ({name, content}) => {
    const classes = useStyles();
    const classNames = classnames('Message', {'Message--robot': name === 'Robot'});
    return (
        <div className={classNames}>
            <strong>{name}:</strong>{content}
            <IconButton aria-label="delete" className={classes.margin}>
                <DeleteIcon fontSize="small" />
            </IconButton>
        </div>
    );
};

Message.propTypes = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};