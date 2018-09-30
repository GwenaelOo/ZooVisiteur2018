import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
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
            image: '',
            titletext: 'Nom initial',
            eventProfilePicture: 'https://hlfppt.org/wp-content/uploads/2017/04/placeholder.png',
            eventName: '',
            eventDescription: '',
            eventPhotos: {}

        };
        this.readDataFromDatabase = this.readDataFromDatabase.bind(this)
    }

    readDataFromDatabase() {
        var self = this;
        var ref = firebase.database().ref(config.zooId + '/eventsData/' + this.props.navigation.getParam('eventId', null))
        ref.once('value').then(snap => {
            let remoteData = snap.val();
            self.setState({
                eventName: remoteData.eventName,
                eventProfilePicture: remoteData.eventProfilePicture,
                eventDescription: remoteData.eventDescription,
                eventPhotos: remoteData.eventPhotos || {},
            });
        });
    }
    componentWillMount() {
        this.readDataFromDatabase()

    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ProfilePicture img={this.state.eventProfilePicture} />
                    <Header1 title={this.state.eventName} />
                    <Description description={this.state.eventDescription} />
                    <Button1 />
                    <Gallery galleryData={this.state.eventPhotos} />
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