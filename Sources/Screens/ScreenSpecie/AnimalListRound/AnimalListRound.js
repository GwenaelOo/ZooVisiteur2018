import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import AnimalListRoundItem from './AnimalListRoundItem';
import LargeSeparator from '../../../Components/Common/Separator/LargeSeparator';


class AnimalListRound extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (Object.keys(this.props.animalsOfThisSpecie).length > 0) {
            let animalsOfThisSpecie = this.props.animalsOfThisSpecie

            const animalsOfThisSpecieArray = [];

            for (let animal in animalsOfThisSpecie) {
                let animalData = {
                    animalId: animalsOfThisSpecie[animal].animalId,
                    animalProfilePicture: animalsOfThisSpecie[animal].animalProfilePicture.largeThumb,
                    animalName: animalsOfThisSpecie[animal].animalName,
                    animalSex: animalsOfThisSpecie[animal].animalSex,
                    animalAge: animalsOfThisSpecie[animal].animalAge,
                    specieId: animalsOfThisSpecie[animal].specieId,
                };
                animalsOfThisSpecieArray.push(animalData);
            }

            return (
                <View>
                    <LargeSeparator text='Nos animaux' />
                    <View style={styles.AnimalsList}>
                        {
                            animalsOfThisSpecieArray.map(function (animal) { return <AnimalListRoundItem animal={animal} key={animal.animalId} HandleSelection={this.HandleSelection} />; })
                        }
                    </View>
                </View>

            );
        }
        else {
            return (null)
        }

    }
}


const styles = StyleSheet.create({
    AnimalsList: {
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
        alignItems: "center",
        marginHorizontal: 25
    },
});


export default AnimalListRound

