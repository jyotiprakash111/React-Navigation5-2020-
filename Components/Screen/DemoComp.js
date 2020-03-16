import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

const DemoHome = ({ ProfileData }) => {
    return (
        <ScrollView>
            <View style={{ width: 100, height: 80, backgroundColor: "#c1c1c1" }}>
                {ProfileData.map((data) => {
                    <Text>{data.price}</Text>
                })}
                <Text>Hello</Text>
            </View>
        </ScrollView>
    );
}

export default DemoHome;
