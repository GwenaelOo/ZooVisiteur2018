import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import DefaultImage from '../../Components/Image/image';
import Header1 from '../../Components/Common/Header/Header1'
import Description from '../../Components/Common/Text/Description'
import Button1 from '../../Components/Common/Button/Button1'

import firebase from 'firebase';

import Gallery from '../../Components/Gallery/Gallery'

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
    
    }

    render() {
        return (
          <View style={styles.container }> 
                <ScrollView>
                    <DefaultImage pic={this.state.serviceProfilePicture} />
                    <Header1 title={this.state.serviceName} />
                    <Description description={this.state.serviceDescription} />
                    <Button1 />
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
