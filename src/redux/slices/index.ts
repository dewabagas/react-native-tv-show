import {combineReducers} from '@reduxjs/toolkit';
import {reducer as networkReducer} from 'react-native-offline';

import appSlice from './appSlice';
import userSlice from './userSlice';

const combinedReducers = combineReducers({
    app: appSlice,
    network: networkReducer,
    user: userSlice

});

export default combinedReducers;