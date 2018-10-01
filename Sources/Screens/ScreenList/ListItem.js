import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import {RkCard} from 'react-native-ui-kitten';

class ListItem extends Component {
    static navigationOptions = {
        title: 'Welcome to the APP',
    };
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height / 2,
            serviceData: this.props.serviceData
        };
        this.HandlePress = this.HandlePress.bind(this)
    }

    HandlePress() {
        this.props.handleClick(this.props.itemData.itemId)
    }

    render() {
        console.log('Free Gazaaaa')
        return (
            <View style={styles.container}>

            <View style={styles.card}>
            <RkCard>
            <View rkCardHeader>
                <Text style={styles.header}>{this.props.itemData.itemName}</Text>
            </View>
            <TouchableOpacity onPress={this.HandlePress}> 
            <Image rkCardImg source={{uri:this.props.itemData.itemPhoto}}/>
            </TouchableOpacity> 
{/*             <View rkCardContent>
                <Text>{this.state.specieData.specieLatinName} has a {this.state.specieData.specieLifeExpectancy} average life expectancy.</Text>
            </View> */}
            </RkCard>
            </View>

            </View>
        )
    }
}

export default ListItem;

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
    },
    card : {
        padding: 15,
    }
});