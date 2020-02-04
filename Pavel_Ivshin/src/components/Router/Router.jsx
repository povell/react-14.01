import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Layout} from '../Layout/Layout';
import HeaderContainer from '../../containers/HeaderContainer';
import ProfileContainer from '../../containers/ProfileContainer';

/**
 * Компонент роутер
*/

export const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/chats/" exact render={(props) => (
                        <div>
                            <HeaderContainer />
                            <Layout 
                                id={+props.match.params.id}/>
                        </div>
                )}/>
                <Route path="/chats/:id" exact render={(props) => (
                        <div>
                            <HeaderContainer />
                            <Layout 
                                id={+props.match.params.id}/>
                        </div>
                )}/>
                <Route path="/about">
                    It's about
                </Route>
                <Route path="/home">
                    It's home
                </Route>
                <Route path="/profile">
                    <div>
                        <HeaderContainer />
                        <ProfileContainer />
                    </div>
                </Route>
                <Route path="/">
                    It's 404
                </Route>
            </Switch>
        </BrowserRouter>
    );
}