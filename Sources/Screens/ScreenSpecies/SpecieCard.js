import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ProfilePicture from '../../Components/Image/ProfilePicture'
import {RkCard} from 'react-native-ui-kitten';


class SpecieCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            specieData: this.props.data
        };
        this.HandlePress = this.HandlePress.bind(this)
    }

    HandlePress() {
        this.props.handleClick(this.state.specieData.specieId)
    }

    render() {
        console.log('this.state.specieProfilePicture.largeThumb')
        console.log(this.state.specieData.specieProfilePicture.largeThumb)
        console.log('this.state.specieData.specieName')
        // Genre là il faut ajouter FR
        console.log(this.state.specieData.specieName.fr)
        // Il y pa de logique il faut juste regarder dans la base ce que tu récupère
        console.log('this.state.specieData.specieLatinName')
        console.log(this.state.specieData.specieLatinName)
        
        
        return (
<View style={styles.card}>
<RkCard>
  <View rkCardHeader>
    <Text style={styles.header}>{this.state.specieData.specieName.fr}</Text>
  </View> 
  <Image rkCardImg source={{uri:this.state.specieData.specieProfilePicture.largeThumb}}/>
  <View rkCardContent>
    <Text>{this.state.specieData.specieLatinName} has a {this.state.specieData.specieLifeExpectancy} average life expectancy.</Text>
  </View>
</RkCard>
</View>
        );
    }
}

export default SpecieCard

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
    },
    card : {
        padding: 15,
    }
});

