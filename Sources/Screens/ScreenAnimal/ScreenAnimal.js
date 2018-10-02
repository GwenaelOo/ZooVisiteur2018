import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, AsyncStorage } from 'react-native';
import DefaultImage from '../../Components/Image/image';
import Header1 from '../../Components/Common/Header/Header1'
import Description from '../../Components/Common/Text/Description'
import Button1 from '../../Components/Common/Button/Button1'
import { config } from '../../../config/config'
import { colors } from '../../Theme/Theme';

import firebase from 'firebase';

import Gallery from '../../Components/Gallery/Gallery'
import ProfilePicture from '../../Components/Image/ProfilePicture';
import Title from '../../Components/Common/Text/Title';
import LightTitle from '../../Components/Common/Text/LightTitle';
import BasicButton from '../../Components/Common/Button/BasicButton';
import RoundThumbnail from '../../Components/Image/RoundThumbnail';
import BlogWidget from '../../Components/Blog/BlogWidget';
import LargeSeparator from '../../Components/Common/Separator/LargeSeparator';

class ScreenAnimal extends React.Component {
    static navigationOptions = {
        title: 'Animal Screen',
    };
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            specieId: this.props.navigation.getParam('specieId', null),
            animalId: this.props.navigation.getParam('animalId', null),
            screenData: {
                animalProfilePicture: '',
                animalBiography: '',
                animalName: '',
                animalSex: '',
                animalPhotos: {},
                articles: []
            }


        };
        this.readDataFromDatabase = this.readDataFromDatabase.bind(this)
    }

    readDataFromDatabase() {
        var self = this;
        var ref = firebase.database().ref('AkongoFakeZoo/speciesData/' + this.state.specieId + '/specieAnimals/' + this.state.animalId)
        ref.once('value').then(snap => {
            let remoteData = snap.val();
            
            self.setState({
                screenData: remoteData
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
        localData = localData.speciesData[this.props.navigation.getParam('specieId', null)].specieAnimals[this.props.navigation.getParam('animalId', null)]

        this.setState({
            screenData: localData
        })
    }

    componentWillMount() {
        this.readDataFromLocalData()
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.header}>
                        <ProfilePicture img={this.state.screenData.animalProfilePicture} />
       
                        <View style={{ marginLeft: 24 }}>
                            <Title text={this.state.screenData.animalName} />
                            <LightTitle text={this.state.screenData.animalSex} />
                        </View>
                    </View>

                    <Description description={this.state.screenData.animalBiography} separatorText='A propos' />

                    <View style={styles.button}>
                        <BasicButton text="En savoir plus" width={this.state.screenData.width} />
                    </View>

                    <Gallery galleryData={this.state.screenData.animalPhotos} />

                
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

