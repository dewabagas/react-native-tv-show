import {StyleSheet} from 'react-native';
import {percentageHeight, percentageWidth} from '../../../configs/utils/screenSize';

const loginStyles = StyleSheet.create({
  logoContainer: {
    height: percentageHeight(20),
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  imageStyle: {
    height: '100%',
    width: percentageWidth(35),
    resizeMode: 'contain',
  },
});

export default loginStyles;
