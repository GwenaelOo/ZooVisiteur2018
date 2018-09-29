import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import ScreenImage from './ScreenImage';
import ScreenHeader from './ScreenHeader';
import ScreenDescription from './ScreenDescription';
import ScreenButton from './ScreenButton';
import ScreenGallery from './ScreenGallery';
import firebase from 'firebase';

import Gallery from '../../Components/Gallery/Gallery'

class ScreenTest extends React.Component {
    static navigationOptions = {
        title: 'Test Screen',
    };
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            image: '',
            titletext: 'Nom initial',
            serviceProfilePicture: '',
            serviceName: '',
            serviceDescription: '',
            servicePhoto: []
        };
        this.readDataFromDatabase = this.readDataFromDatabase.bind(this)
    }

    readDataFromDatabase() {
        var self = this;
        var ref = firebase.database().ref('AkongoFakeZoo/servicesData/' + this.props.navigation.getParam('serviceId', null))
        ref.once('value').then(snap => {
            let remoteData = snap.val();
            self.setState({
                serviceName: remoteData.serviceName,
                serviceProfilePicture: remoteData.serviceProfilePicture,
                serviceDescription: remoteData.serviceDescription,
                servicePhotos: remoteData.servicePhotos,
            });
        });
    }
    componentWillMount() {
        this.readDataFromDatabase()
       
        console.log()
    }

    render() {
        return (
          <View style={styles.container }> 
                <ScrollView>
                    <ScreenImage pic={this.state.serviceProfilePicture} />
                    <ScreenHeader title={this.state.serviceName} />
                    <ScreenDescription description={this.state.serviceDescription} />
                    <ScreenButton />
                    <Gallery galleryData={this.state.servicePhotos} />
                </ScrollView>
            </View>
        );
    }
}

export default ScreenTest

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
});
