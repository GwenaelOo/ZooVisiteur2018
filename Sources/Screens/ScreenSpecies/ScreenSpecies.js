import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import firebase from 'firebase';
import SpecieCard from './SpecieCard'
import { config } from '../../../config/config'

class ScreenSpecies extends React.Component {
    static navigationOptions = {
        title: 'Species Screen',
    };
    constructor(props) {
        super(props);
        this.state = {
            speciesData: null
        };
        this.readDataFromDatabase = this.readDataFromDatabase.bind(this)
        this.handleServiceSelection = this.handleServiceSelection.bind(this)
    }

    readDataFromDatabase() {
        var self = this;
        var ref = firebase.database().ref(config.zooId + '/speciesData/')
        ref.once('value').then(snap => {

            let temp = snap.val();

            self.setState({
                speciesData : temp
            });
        });
    }

    handleServiceSelection(specieId){
        this.props.navigation.navigate('ScreenSpecie', {   
            specieId: specieId 
        });
    }

    componentWillMount() {
        this.readDataFromDatabase()
    }

    render() {

        let list = [];
        let species = this.state.speciesData;
        for (let specie in species) {

            let data = {
                specieName: species[specie].specieName,
                specieProfilePicture: species[specie].specieProfilePicture,
                specieId: species[specie].specieId,
                specieDescription: species[specie].specieDescription,
                specieLatinName: species[specie].specieLatinName,
                specieLifeExpectancy: species[specie].specieLifeExpectancy,
            }
            list.push(data)
            
        
        }
        console.log('this.state.speciesData')
        console.log(this.state.speciesData)
        return (
          <View style={styles.container}> 
                <ScrollView>
                    <View> 
                    {
                        list.map(function (specie) { return <SpecieCard
                            data={specie}
                            key={specie.specieId}
                            handleClick={this.handleServiceSelection}
                        />; }, this)
                    }
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default ScreenSpecies

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
    },
});
