import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { BlurView, Constants, LinearGradient } from 'expo';

class SeparatorWithTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={[styles.container, { top: -Math.abs(hp('15%'))}]}>
            <LinearGradient colors={['#11768a', '#016e8d']} style={[styles.separator, { height: hp('3%')}]} />
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
