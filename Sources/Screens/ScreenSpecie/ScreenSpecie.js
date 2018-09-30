import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import DefaultImage from '../../Components/Image/image';
import Header1 from '../../Components/Common/Header/Header1'
import Description from '../../Components/Common/Text/Description'
import Button1 from '../../Components/Common/Button/Button1'

import { colors } from '../../Theme/Theme';
import { config } from '../../../config/config'

import firebase from 'firebase';

import Gallery from '../../Components/Gallery/Gallery'
import ProfilePicture from '../../Components/Image/ProfilePicture';
import Title from '../../Components/Common/Text/Title';
import LightTitle from '../../Components/Common/Text/LightTitle';
import BasicButton from '../../Components/Common/Button/BasicButton';
import AnimalListRound from './AnimalListRound/AnimalListRound';
import BlogWidget from '../../Components/Blog/BlogWidget';

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
            speciePhotos: {},
            specieAnimals: {},

            specieName: '',
            specieLatinName: '',

            articles: []

        };
        this.readDataFromDatabase = this.readDataFromDatabase.bind(this)
        this.HandleSelection = this.HandleSelection.bind(this)
    }

    readDataFromDatabase() {
        var self = this;
        var ref = firebase.database().ref(config.zooId + '/speciesData/' + this.state.specieId)
        ref.once('value').then(snap => {
            let remoteData = snap.val();
            self.setState({
                specieName: remoteData.specieName,
                specieProfilePicture: remoteData.specieProfilePicture,
                specieLatinName: remoteData.specieLatinName,
                specieDescription: remoteData.specieDescription,
                speciePhotos: remoteData.speciePhotos || {},
                specieAnimals: remoteData.specieAnimals || {},
            });
        });
    }

    HandleSelection(selectedAnimalId) {
        this.props.navigation.navigate('ScreenAnimal', {
            animalId: selectedAnimalId,
            specieId: this.state.specieId,
        })
    }

    componentWillMount() {
        this.readDataFromDatabase()
        this.getAticles()
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

                    <Description description={this.state.specieDescription.fr} separatorText='A propos' />

                    <BasicButton text="En savoir plus" width="150" />

                    <Gallery galleryData={this.state.speciePhotos} />

                    <AnimalListRound animalsOfThisSpecie={this.state.specieAnimals} HandleSelection={this.HandleSelection}/> 
                    
                    <BlogWidget articlesData={this.state.articles} />

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

