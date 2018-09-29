import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Header1 extends Component {
  render() {
    return (
        <View>
            <Text style={styles.type}>
                Restaurant
            </Text>
            <Text style={styles.container}>
                {this.props.title}
            </Text>
        </View>
    )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 35,
        marginLeft: 20,
        marginTop: 0,
        textAlign: 'left',
        color: '#5E7FB1',
    },
    type: {
        flex: 1,
        margin: 20,
        textAlign: 'left',
        color: '#5E7FB1',
    },
});