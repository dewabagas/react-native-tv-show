import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../redux/store';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../configs/constants/colors';
import {percentageHeight, percentageWidth} from '../configs/utils/screenSize';
import commonStyles from '../configs/styles/commonStyles';
import ModalDark from './ModalDark';
import Spacer from './Spacer';
import AppButton from './AppButton';
import {hideError} from '../redux/slices/appSlice';

const mapStateToProps = (state: RootState) => ({
  app: state.app,
});

const connector = connect(mapStateToProps);

const ErrorAlert: React.FC<ConnectedProps<typeof connector>> = props => {
  return (
    <ModalDark
      visible={props.app.isError}
      onRequestClose={() => props.dispatch(hideError(null))}>
      <View style={[commonStyles.displayFlex, commonStyles.center]}>
        <View style={styles.loadingCard}>
          <MaterialIcons name="cancel" color={colors.error} size={60} />
          <Spacer style={{height: percentageHeight(2.5)}} />
          <View style={styles.textContainer}>
            <Text style={[commonStyles.subtitle, commonStyles.textAlignCenter]}>
              {props.app.errorMessage}
            </Text>
            <Spacer style={{height: percentageHeight(2.5)}} />
            <AppButton
              onPress={() => props.dispatch(hideError(null))}
              mode="text">
              Oke
            </AppButton>
          </View>
        </View>
      </View>
    </ModalDark>
  );
};

const styles = StyleSheet.create({
  loadingCard: {
    paddingVertical: percentageWidth(4),
    paddingHorizontal: percentageWidth(12),
    backgroundColor: colors.white,
    alignItems: 'center',
    borderRadius: 8,
  },
  textContainer: {
    width: percentageWidth(50),
    alignItems: 'center',
  },
});

export default connector(memo(ErrorAlert));
