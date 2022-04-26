import {createAsyncThunk} from '@reduxjs/toolkit';
// import CodePush from 'react-native-code-push';

const getAppVersion = createAsyncThunk('app/update_version', async () => {
//   const metadata = await CodePush.getUpdateMetadata();
//   return (metadata?.label ?? 'v0').replace('v', '') ?? '0';
});
export {getAppVersion};
