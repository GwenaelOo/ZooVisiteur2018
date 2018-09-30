import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import DefaultImage from '../../Components/Image/image';
import Header1 from '../../Components/Common/Header/Header1'
import Description from '../../Components/Common/Text/Description'
import Button1 from '../../Components/Common/Button/Button1'

import firebase from 'firebase';
import moment from 'moment';

import { colors } from '../../Theme/Theme';
import { config } from '../../../config/config'

import ProfilePicture from '../../Components/Image/ProfilePicture'
import Gallery from '../../Components/Gallery/Gallery'
import LargeSeparator from '../../Components/Common/Separator/LargeSeparator';

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
            animationProfilePicture: 'https://hlfppt.org/wp-content/uploads/2017/04/placeholder.png',
            animationName: '',
            animationDescription: '',
            animationPhotos: {}
        };
        this.readDataFromDatabase = this.readDataFromDatabase.bind(this)
    }

    readDataFromDatabase() {
        var self = this;
        var ref = firebase.database().ref(config.zooId + '/animationsData/' + this.props.navigation.getParam('animationId', null))
        ref.once('value').then(snap => {
            let remoteData = snap.val();
            self.setState({
                animationName: remoteData.animationName,
                animationProfilePicture: remoteData.animationProfilePicture.largeThumb,
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
            <View style={styles.container}>
                <ScrollView>
                    <ProfilePicture img={this.state.animationProfilePicture} />
                    <Header1 title={this.state.animationName} />
                    <Description description={this.state.animationDescription} separatorText='Description' />
                    <Button1 />

                    <LargeSeparator text='Horaire'/>
                    <View>
                        <Text>Ouverture</Text>
                    </View>
                    <View>
                        <Text>Fermeture</Text>
                    </View>
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
        width: "100%",
        backgroundColor: colors.BACKGROUND_COLOR,
        alignItems: 'center',
    },
});
