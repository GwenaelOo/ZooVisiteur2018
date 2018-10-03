import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, StatusBar, Platform } from 'react-native';
import { Header, createStackNavigator } from 'react-navigation';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { BlurView, Constants } from 'expo';

class ScreenEvent extends React.Component {
    static navigationOptions = {
        title: 'Gwen Screen',
        headerTransparent: true,
        headerBackground: Platform.select({
            ios: <BlurView style={{ flex: 1 }} intensity={98} />,
            android: (
                <View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.1)' }} />
            ),
        }),
        headerTitleStyle: {
            fontWeight: 'bold',
            color: '#5E7FB1'
        }
    };
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            image: 'http://www.thelittlegreenbag.nl/upload/artikelen/ColorSwitch/backgrounds/iphone_4/aztec_galaxy_blue_iphone_4.png'
        };
    }

    render() {
        return (
            <View>

                <View>
                    <Image style={{ height: this.state.height, width: this.state.width, position: 'absolute', top: 0, left: 0 }} source={{ uri: this.state.image }} />
                </View>

                <ScrollView style={{ flex: 1 }} {...this.getHeaderInset()} >

                    <View>
                        <Text>kikoo</Text>
                    </View>

                </ScrollView>
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
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

