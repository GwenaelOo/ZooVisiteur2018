import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import DefaultImage from '../../Components/Image/image';
import Header1 from '../../Components/Common/Header/Header1'
import Description from '../../Components/Common/Text/Description'
import Button1 from '../../Components/Common/Button/Button1'

import { colors } from '../../Theme/Theme';

import firebase from 'firebase';

import Gallery from '../../Components/Gallery/Gallery'
import ProfilePicture from '../../Components/Image/ProfilePicture';
import Title from '../../Components/Common/Text/Title';
import LightTitle from '../../Components/Common/Text/LightTitle';
import BasicButton from '../../Components/Common/Button/BasicButton';
import RoundThumbnail from '../../Components/Image/RoundThumbnail';

class ScreenAnimal extends React.Component {
    static navigationOptions = {
        title: 'Animal Screen',
    };
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,

            specieId: /*'CHIEN1537970805',*/this.props.navigation.getParam('specieId', null),
            animalId: /*'HEVEA1537970909',*/ this.props.navigation.getParam('animalId', null),
            
            animalProfilePicture: "http://res.cloudinary.com/akongo/image/upload/v1537970871/temp/ueufbs9ddnvpsivyyhs3.jpg",

            animalBiography: '',
            /* animalProfilePicture: [], */

            animalName: 'Hevea',
            animalSex: '',
       
        };
        this.readDataFromDatabase = this.readDataFromDatabase.bind(this)
    }

     readDataFromDatabase() {
        var self = this;
        var ref = firebase.database().ref('AkongoFakeZoo/speciesData/' + this.state.specieId + '/specieAnimals/' + this.state.animalId)
        ref.once('value').then(snap => {
            let remoteData = snap.val();
            self.setState({
                animalName: remoteData.animalName,
                animalProfilePicture: remoteData.animalProfilePicture.largeThumb,
                animalAge: remoteData.animalAge,
                animalBiography: remoteData.animalBiography,
                animalPhotos: remoteData.animalPhotos,
                animalSex: remoteData.animalSex,
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
                    <View style={styles.header}>
                    <RoundThumbnail uri={this.state.animalProfilePicture} />

                    <View style={{ marginLeft: 24 }}>
                        <Title text={this.state.animalName} />
                        <LightTitle text={this.state.animalSex} />
                    </View>
                    </View>

                    <Description description={this.state.animalBiography} separatorText='A propos'/>
                    
                    <View style={styles.button}>
                    <BasicButton text="En savoir plus" width={this.state.width} />
                    </View>

                    <Gallery galleryData={this.state.animalPhotos}/>
 
                </ScrollView>
            </View>
        );
    }
}

export default ScreenAnimal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: colors.BACKGROUND_COLOR,
        alignItems: 'center',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        width: "100%",
        backgroundColor: colors.BACKGROUND_COLOR,
        alignItems: 'center',
    },
    button: {
        marginLeft: 130,
        marginRight: 130,
        
    }
});

