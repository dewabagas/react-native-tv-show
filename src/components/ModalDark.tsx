import React, {memo, useState} from 'react';
import {
  KeyboardAvoidingView,
  ModalProps,
  StatusBar,
  TouchableWithoutFeedback,
  ViewStyle,
} from 'react-native';
import {Modal, StyleSheet, View} from 'react-native';
import {percentageHeight} from '../configs/utils/screenSize';

interface IModalDark {
    modalContainerStyle?: ViewStyle;
    statusBarColor?: string;
    avoidView?: boolean;
    avoidViewBehaviour?: 'height' | 'position' | 'padding' | undefined;
    keyboardVerticalOffset?: number;
}

const ModalDark: React.FC<
  ModalProps & IModalDark & {children: React.ReactNode}
> = props => {
  const [isVisible, setIsVisible] = useState<boolean>(props.visible ?? false);

  function _toggleVisible(): void {
    setIsVisible(!isVisible);
  }

  function _renderAvoidView() {
    if (props.avoidView) {
      return (
        <KeyboardAvoidingView
          style={{...styles.modalContainer, ...props.modalContainerStyle}}
          behavior={props.avoidViewBehaviour}
          keyboardVerticalOffset={props.keyboardVerticalOffset}
          pointerEvents="box-none">
          <StatusBar backgroundColor={props.statusBarColor} />
          {props.children}
        </KeyboardAvoidingView>
      );
    }
    return (
      <View
        style={{...styles.modalContainer, ...props.modalContainerStyle}}
        pointerEvents="box-none">
        <StatusBar backgroundColor={props.statusBarColor} />
        {props.children}
      </View>
    );
  }

  return (
    <Modal
      transparent
      visible={isVisible}
      statusBarTranslucent={true}
      onRequestClose={props.onRequestClose ?? _toggleVisible}
      {...props}>
      <TouchableWithoutFeedback
        onPress={props.onRequestClose ?? _toggleVisible}>
        <View style={styles.backDrop} />
      </TouchableWithoutFeedback>
      {_renderAvoidView()}
    </Modal>
  );
};

ModalDark.defaultProps = {
  statusBarColor: 'rgba(34, 34, 34, 0.5)',
  avoidViewBehaviour: 'padding',
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  backDrop: {
    minHeight: percentageHeight(100),
    minWidth: percentageHeight(100),
    position: 'absolute',
    backgroundColor: 'rgba(34, 34, 34, 0.5)',
    // opacity: 0,
  },
});

export default memo(ModalDark);