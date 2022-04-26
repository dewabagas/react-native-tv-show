import React from 'react';
import {StyleSheet} from 'react-native';
import {Button as PaperButton} from 'react-native-paper';
import {percentageHeight} from '../configs/utils/screenSize';
import colors from '../configs/constants/colors';

const AppButton: React.FC<ReturnType<
  () => typeof PaperButton.defaultProps
>> = props => {
  return (
    <PaperButton
      dark
      contentStyle={[styles.defaultContentStyle, props.contentStyle]}
      style={{borderColor: colors.primary}}
      mode="contained"
      uppercase={false}
      {...props}>
      {props.children}
    </PaperButton>
  );
};

const styles = StyleSheet.create({
  defaultContentStyle: {
    height: percentageHeight(7.25),
    width: '100%',
  },
});

export default AppButton;
