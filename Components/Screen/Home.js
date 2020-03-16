import React, { Component } from 'react';
import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import ImageSlider from '../Screen/ImageSlider';
import DemoComp from '../Screen/DemoComp';
import Movie from './Movie';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ProfileData: []
        };
    }

    componentDidMount() {
        fetch('https://api.androidhive.info/json/movies_2017.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({ ProfileData: data })
                // alert(JSON.stringify(data))
                console.log(data)
            })
            .catch(console.log)
    }



    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageSlider />
                <View style={{ flex: 2, backgroundColor: "#b6b6b6" }}>
                    {/* <View style={{ width: 100, height: 80, backgroundColor: "#c1c1c1" }}>
                        {this.state.ProfileData.map(e => {
                            return (
                                <Text>{e.title}</Text>
                            )
                        })}
                        <Text>Hello</Text>
                    </View> */}
                    <Movie />
                </View>
            </View>
        );
    }
}

export default Home;
