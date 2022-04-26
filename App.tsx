import React from 'react';
import {Provider} from 'react-redux';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import 'react-native-gesture-handler';

import colors from './src/configs/constants/colors';
import {defaultFont} from './src/configs/constants/constants';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistedStore} from './src/redux/store';
import {ReduxNetworkProvider} from 'react-native-offline';
import RootNavigator from './src/configs/router/RootNavigator';
import NetworkStatus from './src/components/NetworkStatus';
import Loader from './src/components/Loader';
import ErrorAlert from './src/components/ErrorAlert';
import {Text, View} from 'react-native';

const AppTheme: typeof DefaultTheme = {
  ...DefaultTheme,
  fonts: {
    ...DefaultTheme.fonts,
    // regular: {
    //   fontFamily: defaultFont,
    // },
    // medium: {
    //   fontFamily: defaultFont,
    // },
  },
  colors: {
    ...DefaultTheme.colors,
    // primary: colors.primary,
  },
};

let App: React.FC = () => {
  return (
    <PaperProvider theme={AppTheme}>
      <Provider store={store}>
        <PersistGate persistor={persistedStore} loading={null}>
          {/* <ReduxNetworkProvider> */}
          {/* <View>
            <Text>haha</Text>
          </View> */}
            <RootNavigator />
            <NetworkStatus />
            <Loader />
            <ErrorAlert />
          {/* </ReduxNetworkProvider> */}
         
        </PersistGate>
      </Provider>
    </PaperProvider>
  );
};

export default App;
