import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import DeviceInfo from 'react-native-device-info';
import IAppState from './types/appSlice';

const initialState: IAppState = {
  isLoading: false,
  errorMessage: '',
  isError: false,
  loadingMessage: 'Processing Request',
  buildId: DeviceInfo.getVersion(),
  appVersion: 0,
};

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    showLoading: (state, action: PayloadAction<string | null>) => {
      state.isLoading = true;
      state.loadingMessage = action.payload ?? 'Processing Request';
    },
    showError: (state, action) => {
      state.errorMessage = action.payload.errorMessage;
      state.isError = true;
    },
    hideLoading: (state, _action) => {
      state.isLoading = false;
    },
    hideError: (state, _action) => {
      state.isError = false;
    },
  },
});

export const {hideLoading, showError, showLoading, hideError} =
  appSlice.actions;

export default appSlice.reducer;
