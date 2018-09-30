import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import ProfilePicture from '../../Components/Image/ProfilePicture'
import { RkCard } from 'react-native-ui-kitten';


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
        return (
            <View style={styles.card}>
                <RkCard>
                    <TouchableOpacity onPress={this.HandlePress}>
                        <View rkCardHeader>
                            <Text style={styles.header}>{this.state.specieData.specieName.fr}</Text>
                        </View>
                        <Image rkCardImg source={{ uri: this.state.specieData.specieProfilePicture.largeThumb }} />
                        <View rkCardContent>
                            <Text>{this.state.specieData.specieLatinName} has a {this.state.specieData.specieLifeExpectancy} average life expectancy.</Text>
                        </View>
                    </TouchableOpacity>
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
    card: {
        padding: 15,
    }
});

