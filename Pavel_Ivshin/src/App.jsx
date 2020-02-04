import React, {Component} from 'react';
import {Router} from './components/Router/Router';
import {initStore} from './store/store';
import {Provider} from 'react-redux';
import {loadChats} from './store/actions/chatAction';
import {loadUser} from './store/actions/profileAction';

const store = initStore();
store.dispatch(loadChats());
store.dispatch(loadUser());

export class App extends Component {
    render(){
        return (
            <Provider store={store}><Router /></Provider>
        )
    }
}