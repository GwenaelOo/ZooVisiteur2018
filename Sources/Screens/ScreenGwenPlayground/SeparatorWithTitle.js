import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import { BlurView, Constants, LinearGradient } from 'expo';

class SeparatorWithTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            profileHeight: Dimensions.get('window').height * 0.35,
        };
    }
    render() {
        return (
            <View style={[styles.container, { top: -Math.abs(this.state.height * 0.15)}]}>
            <LinearGradient colors={['#11768a', '#016e8d']} style={[styles.separator, { height: this.state.height * 0.03 }]} />
            </View>
        )
    }
}

export default SeparatorWithTitle

const styles = StyleSheet.create({
    container:{
        position: 'relative',
        justifyContent: 'center',
    },
    separator: {
        backgroundColor: '#11768a',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 5,
    },
});
