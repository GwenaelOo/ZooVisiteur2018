import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import RoundThumbnail from '../../../Components/Image/RoundThumbnail';
import Title from '../../../Components/Common/Text/Title';
import LightTitle from '../../../Components/Common/Text/LightTitle';

class AnimalListRoundItem extends React.Component {
    constructor(props) {
        super(props);

        this.HandlePress = this.HandlePress.bind(this)
    }
    
    HandlePress() {
       this.props.HandleSelection(this.props.animal.animalId)
       
    }

    render() {
console.log(this.props.animal.animalId)
        return (
        <View>
            <TouchableOpacity 
                onPress={this.HandlePress}
            >
            <View style={styles.AnimalItem}>
                    
                    <RoundThumbnail uri={this.props.animal.animalProfilePicture} />
                    <View style={{ marginLeft: 24 }}>
                        <Title text={this.props.animal.animalName} size="big" />
                        <LightTitle text={this.props.animal.animalSex + ' ' + this.props.animal.animalAge} size="big" />
                    </View>

                </View>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    AnimalItem: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        width: "100%",
        alignItems: "center",

    },
});

export default AnimalListRoundItem;


