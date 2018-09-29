import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import DefaultImage from '../../Components/Image/image';
import Header1 from '../../Components/Common/Header/Header1'
import Description from '../../Components/Common/Text/Description'
import Button1 from '../../Components/Common/Button/Button1'

import firebase from 'firebase';

import Gallery from '../../Components/Gallery/Gallery'

class ScreenAnimation extends React.Component {
    static navigationOptions = {
        title: 'Animation Screen',
    };
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            image: '',
            titletext: 'Nom initial',
            animationProfilePicture: '',
            animationName: '',
            animationDescription: '',
            animationPhoto: []
        };
        this.readDataFromDatabase = this.readDataFromDatabase.bind(this)
    }

    readDataFromDatabase() {
        var self = this;
        var ref = firebase.database().ref('AkongoFakeZoo/animationsData/' + this.props.navigation.getParam('animationId', null))
        ref.once('value').then(snap => {
            let remoteData = snap.val();
            self.setState({
                animationName: remoteData.animationName,
                animationProfilePicture: remoteData.animationProfilePicture,
                animationDescription: remoteData.animationDescription,
                animationPhotos: remoteData.animationPhotos,
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
                    <DefaultImage pic={this.state.animationProfilePicture} />
                    <Header1 title={this.state.animationName} />
                    <Description description={this.state.animationDescription} />
                    <Button1 />
                    <Gallery galleryData={this.state.animationPhotos} />
                </ScrollView>
            </View>
        );
    }
}

export default ScreenAnimation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
});
