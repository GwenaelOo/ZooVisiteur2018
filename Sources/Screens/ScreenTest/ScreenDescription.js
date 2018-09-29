import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class ScreenHeader extends Component {
  render() {
    return (
        <View>
            <Text  style={styles.container}>{this.props.description}</Text>
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
