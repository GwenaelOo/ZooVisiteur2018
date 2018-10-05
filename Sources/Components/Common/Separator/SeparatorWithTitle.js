import React from 'react';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BlurView, Constants, LinearGradient } from 'expo';
import isLandscape from '../../../Components/Scripts/isLandscape';

class SeparatorWithTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getStyle() {
        if (isLandscape()) {
            return stylesLandscape
        } else {
            return stylesPortrait
        }
    }
    render() {
        stylesPortrait = StyleSheet.create({
            container: {
                position: 'relative',
                justifyContent: 'center',
                top: -Math.abs(hp('15%'))
            },
            separator: {
                backgroundColor: '#11768a',
                height: hp('3%'),
                alignItems: 'center',
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.8,
                shadowRadius: 3,
                elevation: 5,
            },
        });
        stylesLandscape = StyleSheet.create({
            container: {
                position: 'relative',
                justifyContent: 'center',
                top: -Math.abs(hp('20%'))
            },
            separator: {
                backgroundColor: '#11768a',
                height: hp('6%'),
                alignItems: 'center',
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 8 },
                shadowOpacity: 0.8,
                shadowRadius: 3,
                elevation: 5,
            },
        });

        return (
            <View style={this.getStyle().container}>
                <LinearGradient colors={['#11768a', '#016e8d']} style={this.getStyle().separator} />
            </View>
        )
    }
}

export default SeparatorWithTitle


let stylesPortrait
let stylesLandscape

