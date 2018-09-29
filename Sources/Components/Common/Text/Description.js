import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LargeSeparator from '../Separator/LargeSeparator'

export default class Description extends Component {
    render() {
        return (
            <View>
                <LargeSeparator text='Description'/>
                <View>
                    <Text style={styles.container}>{this.props.description}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 20,
        marginTop: 15,
        textAlign: 'left',
        color: '#5E7FB1',
    },
});