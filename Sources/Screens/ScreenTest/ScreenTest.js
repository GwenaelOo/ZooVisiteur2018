import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import ScreenImage from './ScreenImage';
import ScreenHeader from './ScreenHeader';
import ScreenDescription from './ScreenDescription';
import ScreenButton from './ScreenButton';
import ScreenGallery from './ScreenGallery';
import firebase from 'firebase';

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
        };
        // GWEN - Ajout du bind des méthodes attachées aux states de la classe
        this.readDataFromDatabase = this.readDataFromDatabase.bind(this)
    }

    /*     componentWillMount() {
            var self = this;
            var ref = firebase.database().ref('/servicesData/VEGANPOWER1538166135/serviceProfilePicture/fullPhoto')
            ref.once('value').then(snap=>{
                let temp = snap.val();
                self.setState({
                image: temp
                });  
            });
        }    */

    // Ajout de Gwen pour debug
    readDataFromDatabase() {
        
        //Créer une méthode dédiée permet de la binder au "context global de la class"
        var self = this;
        // Gwen - Récupération de l'objet veganpower complet et pas juste la donnée du champ 
        var ref = firebase.database().ref('AkongoFakeZoo/servicesData/VEGANPOWER1538166135/')
        ref.once('value').then(snap => {
            console.log(snap.val())
            let temp = snap.val();

            self.setState({
                serviceName: temp.serviceName,
                serviceProfilePicture: temp.serviceProfilePicture,
                serviceDescription: temp.serviceDescription,
            });
        });
    }


    //

    componentWillMount() {
        // GWEN : Création d'une méthode dédiée à la lecture de la base de donnée dans componentWillmount
        this.readDataFromDatabase()

    }

    render() {
        console.log(this.state.titletext);
        
        console.log(this.state.serviceProfilePicture)
        return (
          <View style={styles.container }> 
                <ScrollView>
                    <ScreenImage pic={this.state.serviceProfilePicture} />
                    <ScreenHeader title={this.state.serviceName} />
                    <ScreenDescription description={this.state.serviceDescription} />
                    <ScreenButton />
                    <ScreenGallery pic={this.state.serviceProfilePicture} />
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
