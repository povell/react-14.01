import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

/**
 * Компонент по отрисовке поля с формой отправки нового сообщения
 * @param {Function} onSendMessage Обработчик отправки новго сообщения
 */

export class ChatForm extends React.Component {
    state = {
        name: 'User',
        content: 'My message'
    }

    componentDidMount() {
    }

    handleInput = ({currentTarget: {value, name}}) => {
        this.setState(() => ({[name]: value}))
    }
    handleClick = () => {
        const {name, content} = this.state;
        this.props.onSendMessage({name, content});
        this.setState(() => ({name: 'User', content: 'My message'}));
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
                label="Автор" name="name"
                value={this.state.name}
                onChange={this.handleInput}
                type="text" />
            <TextField
                variant="outlined"
                multiline autoFocus
                label="Сообщение"
                name="content"
                value={this.state.content}
                onChange={this.handleInput}
                onKeyUp={this.handleKeyUp}/>
            <Button variant="contained" color="primary" onClick={this.handleClick}>Отправить</Button>
        </div>);
    }
}

ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired
}