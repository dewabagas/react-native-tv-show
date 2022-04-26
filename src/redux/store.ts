import {
  configureStore,
  Middleware,
  ThunkDispatch,
  Action,
} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import combinedReducers from './slices';

const persistedReducers = persistReducer({
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['network']
}, combinedReducers)

const store = configureStore({
    reducer: persistedReducers,
    middleware: defaultMiddleware => [
        ...defaultMiddleware({
            serializableCheck: false
        }),
    ],
});

const persistedStore = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;

export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;
export type AppDispatch = ThunkAppDispatch;

export { store, persistedStore };
