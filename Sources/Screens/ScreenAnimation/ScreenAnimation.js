import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, StatusBar, Platform, AsyncStorage } from 'react-native';
import { Header, createStackNavigator } from 'react-navigation';
import { BlurView, Constants, LinearGradient } from 'expo';
import { iOSUIKit, material } from 'react-native-typography'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange as loc,
    removeOrientationListener as rol
} from 'react-native-responsive-screen';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import isLandscape from '../../Components/Scripts/isLandscape'
import Description from '../../Components/Common/Text/Description';
import Gallery from '../../Components/Gallery/Gallery';
import Separator from '../../Components/Common/Separator/Separator';
import SeparatorWithTitle from '../../Components/Common/Separator/SeparatorWithTitle';
import ProfilePictureDesign from '../../Components/Image/ProfilePicture';
import ProfilePicture from '../../Components/Image/ProfilePicture';
import Hours from '../../Components/customs/Hours';
import GalleryWithTitle from '../../Components/Gallery/GalleryWithTitle';


class ScreenAnimation extends React.Component {
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
            screenData: {
                animationProfilePicture: 'https://images.pexels.com/photos/247478/pexels-photo-247478.jpeg?cs=srgb&dl=dawn-landscape-mountains-247478.jpg&fm=jpg',
                animationName: 'Animation',
                animationPhotos: {},
                isLandscape: isLandscape()
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
        localData = localData.animationsData[this.props.navigation.getParam('animationId', null)]

        this.setState({
            screenData: localData
        })
    }

    componentDidMount(){  
        loc(this)
    }

    updateOrientation(){
        this.setState({
            isLandscape: isLandscape()
        })
    }

    componentWillMount() {
        rol()
        this.updateOrientation()
        this.readDataFromLocalData()
    }

    render() {
        return (
        <View>
            <ScrollView>
                <ProfilePicture profilePicture={this.state.screenData.animationProfilePicture.largeThumb} />
                <Separator />
                <Hours />
                <Description title={this.state.screenData.animationName} text={this.state.screenData.animationDescription} />
                <GalleryWithTitle galleryData={this.state.screenData.animationPhotos} />
            </ScrollView>
        </View>

        );
    }
}

export default ScreenAnimation