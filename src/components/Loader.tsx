import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../redux/store';
import {percentageWidth, percentageHeight} from '../configs/utils/screenSize'
import colors from '../configs/constants/colors';
import commonStyles from '../configs/styles/commonStyles';

import ModalDark from './ModalDark';
import Spacer from './Spacer';

const mapStateToProps = (state: RootState) => ({
    app: state.app,
  });
  
  const connector = connect(mapStateToProps);
  
  const LoadingComponent: React.FC<ConnectedProps<typeof connector>> = props => {
    return (
      <ModalDark visible={props.app.isLoading}>
        <View style={[commonStyles.displayFlex, commonStyles.center]}>
          <View style={styles.loadingCard}>
            <ActivityIndicator size="large" />
            <Spacer style={{height: percentageHeight(2.5)}} />
            <Text style={commonStyles.bodyText1}>{props.app.loadingMessage}</Text>
          </View>
        </View>
      </ModalDark>
    );
  };
  
  const styles = StyleSheet.create({
    loadingCard: {
      paddingVertical: percentageWidth(8),
      paddingHorizontal: percentageWidth(12),
      backgroundColor: colors.white,
      borderRadius: 8,
    },
  });
  
  export default connector(memo(LoadingComponent));