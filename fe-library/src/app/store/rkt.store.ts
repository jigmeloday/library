import { CombinedState, combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import persistStore  from 'redux-persist/es/persistStore';
import { Persistor, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { SHARED_STATE_KEY, sharedReducer, SharedStateInterface } from '../services/states/shared-state/shared.slice';
import {
    CREDENTIAL_STATE_KEY,
    credentialReducer,
    CredentialStateInterface
} from '../services/states/credential-state/credential.slice';
import { bookReducer, BookStateInterface, BOOK_STATE_KEY } from '../services/states/book-state/book.slice';

export interface IReducer {
    [ SHARED_STATE_KEY ]: SharedStateInterface;
    [ CREDENTIAL_STATE_KEY ]: CredentialStateInterface;
    [ BOOK_STATE_KEY ] : BookStateInterface;
}

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [ CREDENTIAL_STATE_KEY ]
};

const REDUCER: Reducer<CombinedState<IReducer>> = combineReducers({
    [ SHARED_STATE_KEY ] : sharedReducer,
    [ BOOK_STATE_KEY ] : bookReducer,
    [ CREDENTIAL_STATE_KEY ] : credentialReducer
});



const PERSISTED_REDUCER = persistReducer(persistConfig, REDUCER);

export const store = configureStore({
    reducer: PERSISTED_REDUCER,
    middleware: ( getDefaultMiddleware ) => getDefaultMiddleware( {
        serializableCheck: false
    } ),
});
export const persistor: Persistor = persistStore( store );
