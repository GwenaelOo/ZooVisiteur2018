import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BlurView, Constants, LinearGradient } from 'expo';
import isLandscape from '../../Scripts/isLandscape'


class Separator extends React.Component {
    getStyle() {
        if (isLandscape()) {
            return stylesLandscape
        } else {
            return stylesPortrait
        }
    }
    render() {
        stylesPortrait = StyleSheet.create({
            separator: {
                backgroundColor: '#11768a',
                position: 'relative',
                height: hp('3%'),
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

        stylesLandscape = StyleSheet.create({
            separator: {
                backgroundColor: '#11768a',
                position: 'relative',
                height: hp('6%'),
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

        return (
            <LinearGradient colors={['#11768a', '#016e8d']} style={this.getStyle().separator} />
        )
    }
}

export default Separator

let stylesPortrait
let stylesLandscape