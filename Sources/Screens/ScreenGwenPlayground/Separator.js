import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import { BlurView, Constants, LinearGradient } from 'expo';

class Separator extends React.Component {
    state = {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        profileHeight: Dimensions.get('window').height * 0.35,
    }
    render() {
        return (
            <LinearGradient colors={['#11768a', '#016e8d']} style={[styles.separator, { height: this.state.height * 0.03 }]} />
        )
    }
}

export default Separator

const styles = StyleSheet.create({
    separator: {
        backgroundColor: '#11768a',
        position: 'relative',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 5,
    },
});
