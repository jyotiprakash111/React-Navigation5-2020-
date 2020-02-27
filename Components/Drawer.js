import * as React from 'react';
import { Button, View } from 'react-native';
import {
    createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Demo from './Screen/DemoComp';


const CustomDrawerContentComponent = props => (
    <ScrollView>
        <View style={styles.container}>
            <LinearGradient
                colors={['#f368e0', '#ea0788']}
                style={{
                    // flex: 1,
                    flexDirection: 'row',
                    height: 200,
                }}>
                <Image
                // style={styles.imgstyle}
                // source={{ uri: data.profile }}
                />
                <View>
                    <Text style={{ marginTop: 75, color: '#fff', fontSize: 15, fontWeight: '600', marginLeft: 10, }}>
                        Hello Drawer
            </Text>
                </View>
            </LinearGradient>
            <DrawerNavigatorItems  {...props} />
        </View>
    </ScrollView>
);

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



const Drawer = createDrawerNavigator();

export default function CustomDrawerContent(props) {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Notifications" component={NotificationsScreen} />
                <Drawer.Screen name="DemoComp" component={Demo} />
            </Drawer.Navigator>
        </NavigationContainer>
        // <DrawerContentScrollView {...props}>
        //     <DrawerItemList {...props} />
        // </DrawerContentScrollView>
    );
}