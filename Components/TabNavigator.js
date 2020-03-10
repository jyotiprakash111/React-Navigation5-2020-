import * as React from 'react';
import { Button, View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer';

function CustomHeader({ title, isHome, navigation }) {
    return (
        <View style={{ flexDirection: "row", height: 50 }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                {
                    isHome ?
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Image
                                style={{ width: 30, height: 30, marginLeft: 5, marginTop: 10 }}
                                source={require('../assets/open-menu.png')}
                                resizeMode='center'
                            />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            style={{ flexDirection: "row", alignItems: "center" }}
                            onPress={() => navigation.goBack()}
                        >
                            <Image style={{ width: 20, height: 20, marginLeft: 5 }}
                                source={require('../assets/back.png')}
                                resizeMode="contain"
                            />
                            <Text>Back</Text>
                        </TouchableOpacity>
                }
            </View>
            <View style={{ flex: 1.5, justifyContent: 'center' }}>
                <Text style={{ textAlign: "center" }}>{title}</Text>
            </View>
            <View style={{ flex: 1 }}></View>
        </View>
    )
}

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title="Home" isHome={true} navigation={navigation} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <Text>Home</Text>
                <TouchableOpacity style={{ marginTop: 20 }}
                    onPress={() => navigation.navigate("HomeDetail")}
                >
                    <Text>Go to Home Details</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
function HomeDetail({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title="Home Details" navigation={navigation} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <Text>Home Details</Text>
            </View>
        </SafeAreaView>
    )
}

function SettingScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title="Setting" isHome={true} navigation={navigation} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <Text>Setting</Text>
                <TouchableOpacity style={{ marginTop: 20 }}
                    onPress={() => navigation.navigate("SettingDetail")}
                >
                    <Text>Go to Setting Details</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

function SettingDetail({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title="Setting Detail" navigation={navigation} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <Text>Setting Details</Text>
            </View>
        </SafeAreaView>
    )
}



function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

function CustomDrawerContent(props) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ height: 155, alignItems: "center", justifyContent: "center" }}>
                <View style={{ borderRadius: 60, borderWidth: 1, borderColor: "#ea0788" }}>
                    <Image source={require('../assets/user.png')}
                        style={{ height: 120, width: 120, borderRadius: 60 }}
                    />
                </View>
            </View>
            <ScrollView style={{ marginLeft: 5 }}>
                <TouchableOpacity style={{ marginTop: 20 }}
                    onPress={() => props.navigation.navigate("MenuTab")}
                >
                    <Text>Menu Tab</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 20 }}
                    onPress={() => props.navigation.navigate("Notifications")}
                >
                    <Text>Notifications Tab</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const Tabs = createBottomTabNavigator();

const navigationOptionHandler = () => ({
    headerShown: false
})
const StackHome = createStackNavigator();

function Homestack() {
    return (
        <StackHome.Navigator initialRouteName="Home">
            <StackHome.Screen name="Home" component={HomeScreen} options={navigationOptionHandler} />
            <StackHome.Screen name="HomeDetail" component={HomeDetail} options={navigationOptionHandler} />
        </StackHome.Navigator>
    )
}

const StackSetting = createStackNavigator();

function SettingStack() {
    return (
        <StackSetting.Navigator initialRouteName="Setting">
            <StackSetting.Screen name="Setting" component={SettingScreen} options={navigationOptionHandler} />
            <StackSetting.Screen name="SettingDetail" component={SettingDetail} options={navigationOptionHandler} />
        </StackSetting.Navigator>
    )
}

function TabNavigator() {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? require('../assets/home.png')
                            : require('../assets/home-black.png');
                    } else if (route.name === 'Setting') {
                        iconName = focused ?
                            require('../assets/gear.png')
                            : require('../assets/settingsBlack.png');
                    }

                    // You can return any component that you like here!
                    return <Image source={iconName} style={{ width: 20, height: 20 }}
                        resizeMode="contain"
                    />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'black',
            }}>
            <Tabs.Screen name="Home" component={Homestack} />
            <Tabs.Screen name="Setting" component={SettingStack} />
        </Tabs.Navigator>
    )
}

const Drawer = createDrawerNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="MenuTab" drawerContent={props => CustomDrawerContent(props)}>
                <Drawer.Screen name="MenuTab" component={TabNavigator} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}