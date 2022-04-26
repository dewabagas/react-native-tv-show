/* eslint-disable no-shadow */
import React, {memo, useEffect} from 'react';
import {View, Image, Text, PermissionsAndroid} from 'react-native';
import commonStyles from '../../configs/styles/commonStyles';
import {percentageHeight} from '../../configs/utils/screenSize';
import {StackActions} from '@react-navigation/native';
import {connect, ConnectedProps} from 'react-redux';
import {getAppVersion} from '../../redux/actions/appAction';
import type {SplashScreenProps} from './types/splashScreenType';
import type {AppDispatch} from '../../redux/store';

const connector = connect(null, (dispatch: AppDispatch) => ({
  getAppVersion: () => dispatch(getAppVersion()),
}));

const SplashScreen: React.FC<
  SplashScreenProps & ConnectedProps<typeof connector>
> = ({navigation, getAppVersion}) => {
  useEffect(() => {
    async function initializeApp() {
      await PermissionsAndroid.requestMultiple([
        'android.permission.READ_EXTERNAL_STORAGE',
        'android.permission.WRITE_EXTERNAL_STORAGE',
        'android.permission.ACCESS_FINE_LOCATION',
        'android.permission.CAMERA',
      ]);
      getAppVersion();
      const reset = StackActions.replace('LoginScreen');
      setTimeout(() => navigation.dispatch(reset), 2500);
    }
    initializeApp();
  }, [getAppVersion, navigation]);

  return (
    <View
      style={[
        commonStyles.container,
        commonStyles.displayFlex,
        commonStyles.center,
      ]}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={{
          width: percentageHeight(35),
          height: percentageHeight(35),
        }}
        resizeMethod="resize"
        resizeMode="contain"
      />
      {/* <Text style={{ color: '#000' }}>Haha</Text> */}
    </View>
  );
};

export default connector(memo(SplashScreen));
