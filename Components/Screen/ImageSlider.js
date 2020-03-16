import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://source.unsplash.com/1024x768/?nature",
                "https://source.unsplash.com/1024x768/?water",
                "https://source.unsplash.com/1024x768/?girl",
                "https://source.unsplash.com/1024x768/?tree", // Network image
                // require('./assets/images/girl.jpg'),          // Local image
            ]
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <SliderBox
                    images={this.state.images}
                    sliderBoxHeight={200}
                    autoplay
                    circleLoop
                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    dotColor="#FFEE58"
                    inactiveDotColor="#ffff"
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 15,
                        marginHorizontal: 1,
                        padding: 0,
                        margin: 0
                    }}
                />
            </View>
        );
    }
}

export default ImageSlider;
