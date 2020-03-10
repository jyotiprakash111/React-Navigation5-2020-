import * as React from 'react';
import { Button, View, Text } from 'react-native';
import {
    createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Demo from './Screen/DemoComp';



function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                onPress={() => navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        </View>
    );
}

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}


function CustomDrawerContent({ progress }) {
    return (
        <View style={{ justifyContent: "center", alignItems: "center", height: "20%", backgroundColor: "#280CE8" }}>
            <View style={{ height: 50, width: 50, borderRadius: 50, borderColor: '#fff', borderWidth: 0.5 }}>
                <Text style={{ textAlign: 'center', color: "#fff", fontSize: 15 }}>
                    Custom
                </Text>
            </View>
        </View>
    );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawerContent {...props} />}
        // drawerType='front'
        // drawerPosition="right"
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
            <Drawer.Screen name="DemoComp" component={Demo} />
        </Drawer.Navigator>
    );
}

export default function (props) {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
}