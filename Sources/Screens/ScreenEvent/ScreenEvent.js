import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, AsyncStorage } from 'react-native';
import ProfilePicture from '../../Components/Image/ProfilePicture'
import DefaultImage from '../../Components/Image/image';
import Header1 from '../../Components/Common/Header/Header1'
import Description from '../../Components/Common/Text/Description'
import Button1 from '../../Components/Common/Button/Button1'

import { colors } from '../../Theme/Theme';
import { config } from '../../../config/config'

import firebase from 'firebase';

import Gallery from '../../Components/Gallery/Gallery'

class ScreenEvent extends React.Component {
    static navigationOptions = {
        title: 'Event Screen',
    };
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            dataReference: '/eventsData/' + this.props.navigation.getParam('eventId', null),
            image: '',
            screenData: {
                titletext: 'Nom initial',
                eventProfilePicture: '',
                eventName: '',
                eventDescription: '',
                eventPhotos: {}
            }
        };
        this.readDataFromDatabase = this.readDataFromDatabase.bind(this)
    }

    readDataFromDatabase() {
        var self = this;
        var ref = firebase.database().ref(config.zooId + this.state.dataReference)
        ref.once('value').then(snap => {
            let remoteData = snap.val();
            self.setState({
                screenData: {
                    remoteData
                }
            });
        });
    }

    readDataFromLocalData = async () => {
        console.log('Screen Event - récupération des données locale')
        let localData = '';
        try {
            localData = await AsyncStorage.getItem('localData') || 'none';
        } catch (error) {
            console.log(error.message);
            this.readDataFromDatabase()
        }
        localData = JSON.parse(localData)
        localData = localData.eventsData[this.props.navigation.getParam('eventId', null)]

        this.setState({
            screenData: localData
        })

    }

    componentWillMount() {
        this.readDataFromLocalData()
        //this.readDataFromDatabase()

    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ProfilePicture img={this.state.screenData.eventProfilePicture} />
                    <Header1 title={this.state.screenData.eventName} />
                    <Description description={this.state.screenData.eventDescription} />
                    <Button1 />
                    <Gallery galleryData={this.state.screenData.eventPhotos} />
                </ScrollView>
            </View>
        );
    }
}

export default ScreenEvent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: colors.BACKGROUND_COLOR,
        alignItems: 'center',
    },
});