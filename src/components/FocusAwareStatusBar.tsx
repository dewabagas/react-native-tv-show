import React from 'react';
import {StatusBar, StatusBarProps} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

const FocusAwareStatusBar: React.FC<StatusBarProps> = props => {
  const focused = useIsFocused();
  return focused ? <StatusBar {...props} /> : null;
};

export default FocusAwareStatusBar;
