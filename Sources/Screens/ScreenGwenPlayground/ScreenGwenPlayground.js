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
import ProfilePictureBackground from '../../Components/Image/ProfilePictureBackground';
import SpecieProfilePictureWidget from '../ScreenSpecie/SpecieProfilePictureWidget';
import SpecieIntro from '../ScreenSpecie/SpecieIntro'
import GalleryWithTitle from '../../Components/Gallery/GalleryWithTitle';

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
            screenData: {
                specieProfilePicture: {},
                specieDescription: {},
                specieName: {},
                speciePhotos: {},
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
        localData = localData.speciesData["CHIEN1537970805"]

        this.setState({
            screenData: localData
        })
    }

    componentDidMount() {
        loc(this)
    }

    updateOrientation() {
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
                    <ProfilePictureBackground profilePicture={this.state.screenData.specieProfilePicture.largeThumb} />
                    <SpecieProfilePictureWidget />
                    <Separator top={hp('-15%')}/>
                    <SpecieIntro title={this.state.screenData.specieName.fr} text={this.state.screenData.specieDescription.fr} />
                    <GalleryWithTitle galleryData={this.state.screenData.speciePhotos} />
                </ScrollView>
            </View>

        );
    }
}

export default ScreenEvent