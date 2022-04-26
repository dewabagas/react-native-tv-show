import React, {memo} from 'react';

import {View, ViewStyle} from 'react-native';

interface ISpacer {
  style: ViewStyle;
}

const Spacer: React.FC<ISpacer> = props => {
  return <View style={props.style} />;
};

export default memo(Spacer);
