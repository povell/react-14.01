import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Layout} from '../Layout/Layout';
import HeaderContainer from '../../containers/HeaderContainer';
import ProfileContainer from '../../containers/ProfileContainer';
import {ConnectedRouter} from 'connected-react-router';
import {history} from '../../store/store';

/**
 * Компонент роутер
*/

export const Router = () => {
    return(
        <ConnectedRouter history={history}>
            <Switch>
                <Route path='/chats/' exact render={(props) => (
                    <div>
                        <HeaderContainer />
                        <Layout 
                            id={props.match.params.id}/>
                    </div>
                )}/>
                <Route path='/chats/:id' exact render={(props) => (
                    <div>
                        <HeaderContainer />
                        <Layout 
                            id={props.match.params.id}/>
                    </div>
                )}/>
                <Route path='/about'>
                    It&apos;s about
                </Route>
                <Route path='/home'>
                    It&apos;s home
                </Route>
                <Route path='/profile'>
                    <div>
                        <HeaderContainer />
                        <ProfileContainer />
                    </div>
                </Route>
                <Route path='/'>
                    It&apos;s 404
                </Route>
            </Switch>
        </ConnectedRouter>
    );
};