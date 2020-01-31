import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

/**
 * Компонент по отрисовке формы добавления нового чата
 * @param {Function} handleAddChat Обработчик добавления нового чата в список
*/

export class ChatListForm extends Component {
    state = {
        name: 'Chat name',
    }

    handleInput = ({currentTarget: {value, name}}) => {
        this.setState(() => ({[name]: value}))
    }
    handleClick = () => {
        const {name, content} = this.state;
        const id = this.props.chatId;
        this.props.handleAddChat(name);
        this.setState(() => ({name: 'Chat name'}));
    }
    handleKeyUp = (e) => {
        if(e.keyCode == 13 && e.ctrlKey){
            this.handleClick();
        }
    }
    render() {
        return(<div>
            <TextField
                variant="outlined"
                label="Название чата" name="name"
                value={this.state.name}
                onChange={this.handleInput}
                type="text" />
            <Button variant="contained" color="primary" onClick={this.handleClick}>Добавить чат</Button>
        </div>);
    }
}

ChatListForm.propTypes = {
    handleAddChat: PropTypes.func.isRequired
}