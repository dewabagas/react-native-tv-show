import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../redux/store'
import colors from '../configs/constants/colors'

const mapStateToProps = (state: RootState) => ({
    network: state.network
});

const connector = connect(mapStateToProps);

const NetworkStatusComponent: React.FC<ConnectedProps<typeof connector>> = ({
    network,
}) => {
    const {isConnected} = network;

    return (
        <View style={{ 
            bottom: 0,
            position: isConnected ? 'absolute' : 'relative',
            padding: 5,
            width: isConnected ? 0 : '100%',
            backgroundColor: isConnected ? 'transparent' : colors.error
         }}>
            <Text style={{ 
                textAlign: 'center',
                fontSize: 10.5,
                color: '#FFF'
             }}>
                 {isConnected ? '' : 'Offline Mode'}
             </Text>
        </View>
    );
};

export default connector(memo(NetworkStatusComponent));