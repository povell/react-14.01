import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import chatReducer from './reducers/chatReducer';
import botMiddleware from './middlewares/botMiddleware';
import chatMiddleware from './middlewares/chatMiddleware';
import profileReducer from './reducers/profileReducer';
import {createLogger} from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {createBrowserHistory} from 'history';
import {routerMiddleware, connectRouter} from 'connected-react-router';

const persistConfig = {
    key: 'geekmessanger',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['messageReducer', 'chatReducer'],
 };

export const history = createBrowserHistory();

const reducer = combineReducers({
    chatReducer,
    profileReducer,
    router: connectRouter(history),
});

const logger = createLogger();
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};

export const initStore = (preloadedState = {}) => {
    const store = createStore(
        persistReducer(persistConfig, reducer), preloadedState, compose(applyMiddleware(routerMiddleware(history), logger, chatMiddleware, botMiddleware), devTools)
    )
    const persistor = persistStore(store);

    return { store, persistor };
};