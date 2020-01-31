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
        const id = this.props.chatId;
        this.props.onSendMessage({name, content}, id);
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

// export const ChatForm = ({onSendMessage}) => {
//     const [name, setName] = useState('User');
//     const [content, setContent] = useState('My message');
//     const textarea = useRef();

//     useEffect(() => {
//         textarea.current.focus();
//     }, [])

//     const handleClick = () => {
//         onSendMessage({name, content});
//     }

//     return (<div>
//         <input value={name} onChange={({currentTarget: {value}}) => setName(value)} type="text" />
//         <textarea value={content} onChange={({currentTarget: {value}}) => setContent(value)} ref={textarea}/>
//         <button onClick={handleClick}>Отправить</button>
//     </div>);
// }

ChatForm.propTypes = {
    onSendMessage: PropTypes.func.isRequired
}