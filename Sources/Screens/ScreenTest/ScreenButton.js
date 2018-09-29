import React, { Component } from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

export default class ScreenHeader extends Component {

    onPress() {
        alert('Button pressed')
    }

    render() {
        return (
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.container}
                    onPress={this.onPress}>

                    <Text style={{padding: 15}}>
                         Voir sur le plan
                     </Text>
                
                 </TouchableOpacity>
                 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,        
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        backgroundColor: '#fff',
        elevation: 2, // Android
      
    },
    button: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
