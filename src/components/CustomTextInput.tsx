import React, {memo, useState} from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';
import colors from '../configs/constants/colors';
import {defaultFont} from '../configs/constants/constants';

interface inputType extends TextInputProps {
  focusedColor?: string;
  onFocus?: () => void;
  validator?: () => string | undefined;
}

const CustomTextInput = React.forwardRef<TextInput, inputType>((props, ref) => {
  const [focusedColor, setFocusedColor] = useState<string | undefined>(
    props.focusedColor ?? '#a7a7a7',
  );

  function _onFocus(): void {
    setFocusedColor(colors.primary);
  }

  function _onBlur() {
    setFocusedColor('#a7a7a7');
  }

  return (
    <>
      <TextInput
        {...props}
        ref={ref}
        style={[
          styles.borderOutside,
          {
            borderColor: focusedColor ?? colors.gray2,
            fontFamily: defaultFont,
          },
        ]}
        underlineColorAndroid='transparent'
        onBlur={_onBlur}
        onFocus={_onFocus}
      />
    </>
  );
});

const styles = StyleSheet.create({
  borderOutside: {
    backgroundColor: colors.white,
    width: '100%',
    borderWidth: 0.75,
    borderRadius: 8,
    paddingLeft: 16,
  },
});

export default memo(CustomTextInput);
