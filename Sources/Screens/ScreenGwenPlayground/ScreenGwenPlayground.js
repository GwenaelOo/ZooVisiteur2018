import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, StatusBar, Platform, AsyncStorage } from 'react-native';
import { Header, createStackNavigator } from 'react-navigation';
import { BlurView, Constants, LinearGradient } from 'expo';
import { iOSUIKit, material } from 'react-native-typography'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfilePicture from './ProfilePicture';
import Separator from './Separator';
import Hours from './Hours';
import Description from './Description';
import SeparatorWithTitle from './SeparatorWithTitle';
import Gallery from './Gallery';


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
            screenData:{
                profilePicture: 'https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?cs=srgb&dl=dawn-landscape-mountains-247478.jpg&fm=jpg',
                title: 'Animation',
                animationPhotos: {}
            }        
        };
    }

    readDataFromLocalData = async () => {
        console.log('Screen Animation - récupération des données locale')
        let localData = '';
        try {
            localData = await AsyncStorage.getItem('localData') || 'none';
        } catch (error) {
            console.log(error.message);
            this.readDataFromDatabase()
        }
        localData = JSON.parse(localData)
        localData = localData.animationsData["LANAGEAVECLESDAUPHINS1538608855"]

        this.setState({
            screenData: localData
        })
    }

    componentWillMount(){
        this.readDataFromLocalData()
    }

    render() {
        let width = this.state.width
        let height = this.state.height
        let profileHeight = this.state.profileHeight

        return (

            <ScrollView>

                <ProfilePicture profilePicture={this.state.profilePicture} />

                <Separator />

                <Hours />

                <Description title={this.state.title}/>

                <SeparatorWithTitle />

                <Gallery galleryData={this.state.screenData.animationPhotos}  />
            </ScrollView>

        );
    }
}

export default ScreenEvent

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
    itemData: {
        backgroundColor: '#016e8d',
        position: 'relative',
        top: -30,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 15 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 8,
    },
    separator: {
        backgroundColor: '#11768a',
        position: 'relative',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 5,
    },
    container: {
        backgroundColor: 'white',
        position: 'relative',
        top: 0,
    },
    hours: {
        flex: 5,
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center',
    },
    buttonRemind: {
        flex: 3,
    },
    vignette: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});
