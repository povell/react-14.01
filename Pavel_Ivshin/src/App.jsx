import React, {Component} from 'react';
import {Router} from './components/Router/Router';
import {initStore} from './store/store';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {loadChats} from './store/actions/chatAction';
import {loadUser} from './store/actions/profileAction';

const {store, persistor} = initStore();
store.dispatch(loadChats());
store.dispatch(loadUser());

export class App extends Component {
    render(){
        return (
            <Provider store={store}>
                <PersistGate loading={ null } persistor={ persistor }>
                    <Router />
                </PersistGate>
            </Provider>
        );
    }
}