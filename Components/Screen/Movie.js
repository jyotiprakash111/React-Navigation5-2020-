import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {
    const [profileData, setProfileData] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        fetch('https://api.androidhive.info/json/movies_2017.json')
            .then(res => res.json())
            .then((data) => {
                setProfileData(data)
                // alert(JSON.stringify(data))
                console.log(data)
            })
            .catch(console.log)
    }, [])

    const keyExtractor = (item, index) => index.toString();
    const renderHistory = ({ item, index }) => (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', paddingTop: 5 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Moviedetails", { data: item })}
                    style={{
                        height: 160,
                        width: "85%",
                        backgroundColor: "#ffff",
                        marginBottom: 10,
                        marginLeft: "6%"
                    }}>
                    <Image source={{ uri: item.image }}
                        style={{ height: "70%", width: "100%" }}
                    />
                    <Text>{item.title}</Text>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: "red", marginLeft: 50 }}>{item.price}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                numColumns={3}
                showsVerticalScrollIndicator={false}
                keyExtractor={keyExtractor}
                data={profileData}
                renderItem={renderHistory}
            />
        </View>
    );
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

