import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

let Image_Http_URL = { uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png' };

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviedetails: []
        };
    }


    // componentDidMount() {
    //     var data = navigation.getParam('data');
    //     this.setState({
    //         moviedetails: data
    //     })
    //     alert(JSON.stringify(data))
    // }
    render() {
        return (
            <View style={{ flex: 0.5, justifyContent: 'center', alignItems: "center" }}>
                <Text>Movie Details</Text>
                <View style={{ height: 100, width: 200, backgroundColor: "#ececec" }}>
                    <Image source={require('../../assets/starwars.jpg')} />
                </View>
            </View>
        );
    }
}

export default MovieDetails;
