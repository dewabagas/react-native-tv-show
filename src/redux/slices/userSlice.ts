import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import deviceInfoModule from 'react-native-device-info';

import {IUserState} from './types/userSlice';

const initState: IUserState = {
  isOfflineAllowed: false,
  isOfflineMode: false,
  data: {
    username: '',
    password: '',
    appVersion: parseFloat(deviceInfoModule.getVersion()),
    buildID: '0',
    clientID: '',
    idRegion: '',
    idSpv: '',
    jabatan: '',
    kdTask: '',
    kodeKprk: '',
    namaPetugas: '',
    posTerminalType: '',
    responseCode: '',
    responseMsg: '',
    role: '1',
    systemTraceAudit: '',
    test: '',
    tipeLokasi: '',
    token: '',
    trxDateTime: '',
    trxType: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState: initState,
});

export default userSlice.reducer;
