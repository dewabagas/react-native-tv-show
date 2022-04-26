import React, {createRef, useEffect, useRef} from 'react';

import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect, ConnectedProps} from 'react-redux';

import {defaultFont} from '../constants/constants';
import colors from '../constants/colors';

import SplashScreen from '../../screens/SplashScreen/SplashScreen';
import Login from '../../screens/LoginScreen/Login';

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();
export const navigationRef = createRef<NavigationContainerRef>();

const mapStateToProps = (state: RootState) => ({
  user: state.user,
  network: state.network,
});

const connector = connect(mapStateToProps);

const RootNavigator: React.FC<ConnectedProps<typeof connector>> = ({
  user: {isOfflineMode},
  network: {isConnected},
}) => {
  const routeNameRef = useRef('LoginScreen');

  useEffect(() => {
    if (
      isOfflineMode &&
      isConnected &&
      routeNameRef.current !== 'LoginScreen'
    ) {
      Alert.alert(
        'Peringatan',
        'Silahkan login terlebih dahulu jika akan melakukan transaksi',
        [
          {
            text: 'Login',
          },
        ],
        {
          onDismiss: () => navigationRef.current?.navigate('LoginScreen'),
        },
      );
    }
  }, [isConnected, isOfflineMode]);

  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator
        // initialRouteName="TakePhotoKTPScreen"
        screenOptions={{
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontFamily: defaultFont,
          },
          headerStyle: {
            backgroundColor: colors.primary,
          },
        }}>
        <Screen
          component={SplashScreen}
          name="SplashScreen"
          options={{
            headerShown: false,
          }}
        />
        <Screen
          component={Login}
          name="LoginScreen"
          options={{
            headerShown: false,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default connector(RootNavigator);
