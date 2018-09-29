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
import AnimalListRound from './AnimalListRound/AnimalListRound';




class ScreenSpecie extends React.Component {
    static navigationOptions = {
        title: 'Specie Screen',
    };
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,

            specieId: this.props.navigation.getParam('specieId', null),
            specieProfilePicture: 'https://hlfppt.org/wp-content/uploads/2017/04/placeholder.png',

            specieDescription: '',
            speciePhotos: [],

            specieName: '',
            specieLatinName: '',

            specieAnimals: []

       
        };
        this.readDataFromDatabase = this.readDataFromDatabase.bind(this)
    }

    readDataFromDatabase() {
        var self = this;
        var ref = firebase.database().ref('AkongoFakeZoo/speciesData/' + this.state.specieId)
        ref.once('value').then(snap => {
            let remoteData = snap.val();
            self.setState({
                specieName: remoteData.specieName,
                specieProfilePicture: remoteData.specieProfilePicture,
                specieLatinName: remoteData.specieLatinName,
                specieDescription: remoteData.specieDescription,
                speciePhotos: remoteData.speciePhotos,
                specieAnimals: remoteData.specieAnimals
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
                    <ProfilePicture img={this.state.specieProfilePicture.largeThumb} />

                    <View style={{ marginLeft: 24 }}>
                        <Title text={this.state.specieName.fr} />
                        <LightTitle text={this.state.specieLatinName} />
                    </View>

                    <Description description={this.state.specieDescription.fr} separatorText='A propos'/>
<<<<<<< HEAD
=======

>>>>>>> recupTed

                    <BasicButton text="En savoir plus" width="150" />

                    <Gallery galleryData={this.state.speciePhotos}/>

                    <AnimalListRound animalsOfThisSpecie={this.state.specieAnimals}/> 

                </ScrollView>
            </View>
        );
    }
}

export default ScreenSpecie

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: colors.BACKGROUND_COLOR,
        alignItems: 'center',
    },
});

