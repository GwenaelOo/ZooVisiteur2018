import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';

class ProfilePictureDesign extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            profileHeight: Dimensions.get('window').height * 0.35,
            profilePicture: 'https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?cs=srgb&dl=dawn-landscape-mountains-247478.jpg&fm=jpg',
        };
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image source={{ uri: this.state.profilePicture }} style={{ height: this.state.profileHeight, width: this.state.width }} />
                <View style={[styles.overlay, { height: this.state.profileHeight }]} />
            </View>
        )
    }
}

export default ProfilePictureDesign

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        opacity: 0.55
    },
});
