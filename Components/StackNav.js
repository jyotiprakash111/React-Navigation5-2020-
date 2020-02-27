import React, { Component } from 'react';
import { View, Text, Button, Easing, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators, FadeFromBottomAndroid } from '@react-navigation/stack';
import { useIsFocused } from '@react-navigation/core';


const Stack = createStackNavigator()

const HomeScreen = ({ navigation }) => {
    navigation.setOptions({
        headerRight: () => (
            // <Button title="Save"
            //   onPress={() => {
            //     navigation.replace('Home');
            //   }}
            // />
            <TouchableOpacity onPress={() => {
                navigation.replace('Home')
            }}>
                <Text>Save</Text>
            </TouchableOpacity>
        )
    })
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
            <Text>Home Screeen</Text>
            <Button title="Goto Setting"
                onPress={() => navigation.navigate('Setting')}
            // onPress={() => navigation.setOptions({ title: 'Setting Screen' })}
            />
        </View>
    )
}
const SettingScreen = ({ navigation }) => {
    const isFocused = useIsFocused()
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
            <Text style={{ color: isFocused ? 'green' : "black" }}>Setting Screeen</Text>
        </View>
    )
}


const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 50,
        mass: 3,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

const closeConfig = {
    animations: 'timing',
    config: {
        duration: 500,
        easing: Easing.linear
    }
}
export default function App() {
    return (
        <NavigationContainer>
            {/* <Stack.Navigator initialRouteName="Setting"> */}
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    // ...TransitionPresets.SlideFromRightIOS,
                    ...TransitionPresets.FadeFromBottomAndroid,
                    // transitionSpec: {
                    //   open: config,
                    //   close: closeConfig
                    // },
                    // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                    // cardStyleInterpolator: CardStyleInterpolators.FadeFromBottomAndroid
                }}
                headerMode='float'
            >
                <Stack.Screen
                    options={{ title: "My Home" }}
                    name="Home"
                    component={HomeScreen} />
                <Stack.Screen name="Setting"
                    component={SettingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}