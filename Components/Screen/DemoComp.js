import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DemoComp extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> DemoComp </Text>
            </View>
        );
    }
}

export default DemoComp;
