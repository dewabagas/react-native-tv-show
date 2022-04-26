import React, {memo, useState} from 'react';
import {Text, View, Image, Alert, ScrollView} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import DeviceInfo from 'react-native-device-info';
import {StackActions} from '@react-navigation/native';
import moment from 'moment';

import colors from '../../configs/constants/colors';
import commonStyles from '../../configs/styles/commonStyles';
import {percentageHeight} from '../../configs/utils/screenSize';
import loginStyles from './styles/login_styles';

// import {userLogin, ILoginData} from '../../configs/actions/userActions';
import {AppDispatch, RootState} from '../../redux/store';
import {userInOfflineMode} from '../../redux/slices/userSlice';
import type {LoginProps} from './types/loginTypes';

import AppButton from '../../components/AppButton';
import CustomTextInput from '../../components/CustomTextInput';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import Spacer from '../../components/Spacer';

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    login: (args: ILoginData) => dispatch(userLogin(args)),
    userInOffline: () => dispatch(userInOfflineMode()),
  };
};

const mapStateToProps = (state: RootState) => ({
  network: state.network,
  user: state.user,
  app: state.app,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

const Login: React.FC<ConnectedProps<typeof connector> & LoginProps> = ({
  userInOffline,
  network,
  user,
  login,
  navigation,
  app: {buildId, appVersion},
}) => {
  return (
    <ScrollView contentContainerStyle={commonStyles.growContainer}>
      <View
        style={[
          commonStyles.container,
          commonStyles.justifyCenter,
          {backgroundColor: '#42306B'},
        ]}>
        <FocusAwareStatusBar
          backgroundColor={colors.transparent}
          barStyle="dark-content"
        />
      </View>
    </ScrollView>
  );
};

export default connector(memo(Login));
