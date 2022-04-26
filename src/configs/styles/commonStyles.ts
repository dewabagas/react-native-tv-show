import {StyleSheet, ImageResizeMode} from 'react-native';
import {
  percentageHeight,
  percentageWidth,
} from '../../configs/utils/screenSize';
import colors from '../constants/colors';
import {defaultFont} from '../constants/constants';

function percentageImage(
  width: string,
  height: string,
  resizeMode: ImageResizeMode = 'contain',
) {
  const result = StyleSheet.create({
    style: {
      width: `${width}%`,
      height: `${height}%`,
      resizeMode: resizeMode,
    },
  });
  return result;
}

const themeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  growContainer: {
    flexGrow: 1,
  },
  displayFlex: {
    flex: 1,
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifyEven: {
    justifyContent: 'space-evenly',
  },
  justifyAround: {
    justifyContent: 'space-around',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  formLabel: {
    fontFamily: defaultFont,
    color: colors.gray1,
    fontSize: 14,
  },
  title: {
    fontFamily: defaultFont,
    fontSize: 16,
    lineHeight: percentageHeight(5),
  },
  bodyText1: {
    fontFamily: defaultFont,
    fontSize: 14,
  },
  bodyText2: {
    fontFamily: defaultFont,
    fontSize: 16,
  },
  caption: {
    fontFamily: defaultFont,
    fontSize: 10.5,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  textAlignRight: {
    textAlign: 'right',
  },
  horizontalDefaultPadding: {
    paddingHorizontal: percentageWidth(4),
  },
  verticalDefaultPadding: {
    paddingVertical: percentageHeight(2.7),
  },
  topDefaultPadding: {
    paddingTop: percentageHeight(2.7),
  },
  bottomDefaultPadding: {
    paddingBottom: percentageHeight(2.7),
  },
  subtitle: {
    fontSize: 12,
    fontFamily: defaultFont,
  },
  h5: {
    fontFamily: defaultFont,
    fontSize: 24,
  },
  h6: {
    fontFamily: defaultFont,
    fontSize: 18,
  },
  absolute: {
    position: 'absolute',
  },
  bottom: {
    bottom: 0,
  },
  row: {
    flexDirection: 'row',
  },
  atBottom: {
    bottom: 0,
    left: 0,
  },
  useWhiteColor: {
    color: colors.white,
  },
  usePrimaryColor: {
    color: colors.primary,
  },
  useGray3Color: {
    color: colors.gray3,
  },
  weightBold: {},
  weight700: {},
  useGray3BgColor: {
    backgroundColor: colors.gray3,
  },
  usePrimaryBgColor: {
    backgroundColor: colors.primary,
  },
  useRedBgColor: {
    backgroundColor: colors.red,
  },
  xs_btn: {
    padding: percentageWidth(0.9),
    borderRadius: 3,
  },
  itemListImage: {
    width: percentageWidth(14.5),
    height: percentageWidth(14.5),
    resizeMode: 'contain',
  },
  itemListPaddingVertical: {
    paddingVertical: percentageHeight(1.6),
  },
  itemListContent: {
    width: '60%',
    paddingHorizontal: percentageWidth(4),
  },
  grayRoundedInputContainer: {
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: '#F4F4F4',
    width: '100%',
  },
  captureButton: {
    width: percentageWidth(20),
    height: percentageWidth(20),
    borderRadius: percentageWidth(10),
    backgroundColor: colors.primary,
    alignSelf: 'center',
    marginBottom: 16,
  },
  cardContainer: {
    width: percentageWidth(100),
    backgroundColor: colors.white,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

const mergedStyles = {
  center: StyleSheet.flatten([
    themeStyles.justifyCenter,
    themeStyles.alignCenter,
  ]),
};
const commonStyles = {
  ...mergedStyles,
  ...themeStyles,
  percentageImage,
};


export default commonStyles;
