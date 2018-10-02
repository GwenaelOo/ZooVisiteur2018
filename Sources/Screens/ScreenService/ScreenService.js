import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, AsyncStorage } from 'react-native';
import DefaultImage from '../../Components/Image/image';
import Header1 from '../../Components/Common/Header/Header1'
import Description from '../../Components/Common/Text/Description'
import Button1 from '../../Components/Common/Button/Button1'

import { colors } from '../../Theme/Theme';
import { config } from '../../../config/config'

import firebase from 'firebase';

import Gallery from '../../Components/Gallery/Gallery'
import ProfilePicture from '../../Components/Image/ProfilePicture';

class ScreenTest extends React.Component {
    static navigationOptions = {
        title: 'Service Screen',
    };
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            image: '',
            screenData: {
                titletext: 'Nom initial',
                serviceProfilePicture: 'https://hlfppt.org/wp-content/uploads/2017/04/placeholder.png',
                serviceName: '',
                serviceDescription: '',
                servicePhotos: {},
            }
        };
        this.readDataFromDatabase = this.readDataFromDatabase.bind(this)
        this.readDataFromLocalData = this.readDataFromLocalData.bind(this)
    }

    readDataFromLocalData = async () => {
        console.log('Screen Service - récupération des données locale')
        let localData = '';
        try {
            localData = await AsyncStorage.getItem('localData') || 'none';
        } catch (error) {
            console.log(error.message);
            this.readDataFromDatabase()
        }
        localData = JSON.parse(localData)
        localData = localData.servicesData[this.props.navigation.getParam('serviceId', null)]

        this.setState({
            screenData: localData
        })

    }

    readDataFromDatabase() {
        var self = this;
        var ref = firebase.database().ref(config.zooId + '/servicesData/' + this.props.navigation.getParam('serviceId', null))
        ref.once('value').then(snap => {
            let remoteData = snap.val();
            self.setState({
                screenData: remoteData
            });
        });
    }
    componentWillMount() {
     //   this.readDataFromDatabase()
     this.readDataFromLocalData()
    }

    render() {
        console.log(this.state.screenData.serviceProfilePicture)
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ProfilePicture img={this.state.screenData.serviceProfilePicture} />
                    <Header1 title={this.state.screenData.serviceName} />
                    <Description description={this.state.screenData.serviceDescription} />
                    <Button1 />
                    <Gallery galleryData={this.state.screenData.servicePhotos} />
                </ScrollView>
            </View>
        );
    }
}

export default ScreenTest

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: colors.BACKGROUND_COLOR,
        alignItems: 'center',
    },
});
