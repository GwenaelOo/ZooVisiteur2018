import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, StatusBar, Platform } from 'react-native';
import { Header, createStackNavigator } from 'react-navigation';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { BlurView, Constants } from 'expo';
import ProfilePictureDesign from './ProfilePicture';

class ScreenEvent extends React.Component {
    static navigationOptions = {
        title: 'Gwen Screen',
        headerTransparent: true,
        headerBackground: Platform.select({
            ios: <BlurView style={{ flex: 1 }} intensity={98} />,
            android: (
                <View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0)' }} />
            ),
        }),
        headerTitleStyle: {
            fontWeight: 'bold',
            color: '#FFFFFF'
        },
        headerTintColor: '#FFFFFF',
    };
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            profileHeight: Dimensions.get('window').height * 0.35,
            profilePicture: 'https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?cs=srgb&dl=dawn-landscape-mountains-247478.jpg&fm=jpg'
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Image source={{uri: this.state.profilePicture}} style={{height: this.state.profileHeight, width: this.state.width}} />
                <View style={[styles.container, {height: this.state.profileHeight}]} />
            </View>
        );

    }


    getHeaderInset() {
        const NOTCH_HEIGHT = isIphoneX() ? 25 : 0;

        // $FlowIgnore: we will remove the HEIGHT static soon enough
        const BASE_HEADER_HEIGHT = Header.HEIGHT;

        const HEADER_HEIGHT =
            Platform.OS === 'ios'
                ? BASE_HEADER_HEIGHT + NOTCH_HEIGHT
                : BASE_HEADER_HEIGHT + Constants.statusBarHeight;

        return Platform.select({
            ios: {
                contentInset: { top: HEADER_HEIGHT },
                contentOffset: { y: -HEADER_HEIGHT },
            },
            android: {
                contentContainerStyle: {
                    paddingTop: HEADER_HEIGHT,
                },
            },
        });
    }
}
export default ScreenEvent

const styles = StyleSheet.create({
    container: {
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


//   {/* <View style={{ flex: 1, height: this.state.profileHeight}} >
//                     <View style={{backgroundColor: 'black'}}/> */}
//         {/* <Image style={{ height: this.state.profileHeight, width: this.state.width, position: 'absolute', top: 0, left: 0, }} source={{ uri: this.state.profilePicture }} /> */ }
//         {/* </View> */ }
//         {/* <View style={{ marginTop: this.state.profileHeight }}> */ }
//         {/* <Text>kikoo</Text>
//                 </View> */}