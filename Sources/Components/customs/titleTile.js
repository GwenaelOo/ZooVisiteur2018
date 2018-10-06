import React from 'react';
import { View, Image, Dimensions, StyleSheet, Text } from 'react-native';
import { iOSUIKit, material } from 'react-native-typography'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo';
import isLandscape from '../../Components/Scripts/isLandscape';

class TitleTile extends React.Component {
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
            itemData: {
                backgroundColor: '#016e8d',
                position: 'relative',
                height: hp('10%'),
                marginHorizontal: wp('10%'),
                top: -Math.abs(hp('6%')),
                bottom: 0,
                left: 0,
                right: 0,
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 15 },
                shadowOpacity: 0.8,
                shadowRadius: 5,
                elevation: 8,
            },
            hours: {
                flex: 5,
                justifyContent: 'space-around',
                flexDirection: 'column',
                alignItems: 'center',
            },
            buttonRemind: {
                flex: 3,
            },
            vignette: {
                flex: 1,
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'center',
            },
        });
        stylesLandscape = StyleSheet.create({
            itemData: {
                backgroundColor: '#016e8d',
                position: 'relative',
                height: hp('15%'),
                marginHorizontal: wp('10%'),
                top: -Math.abs(hp('10%')),
                bottom: 0,
                left: 0,
                right: 0,
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 15 },
                shadowOpacity: 0.8,
                shadowRadius: 5,
                elevation: 8,
            },
            hours: {
                flex: 5,
                justifyContent: 'space-around',
                flexDirection: 'column',
                alignItems: 'center',
            },
            buttonRemind: {
                flex: 3,
            },
            vignette: {
                flex: 1,
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'row',
                alignItems: 'center',
            },
        });
        
        return (
            <LinearGradient colors={['#4c669f', '#016e8d']} style={this.getStyle().itemData}>
                <View style={this.getStyle().vignette}>
                    <View style={this.getStyle().hours}>
                        <Text style={iOSUIKit.title3EmphasizedWhite}>{this.props.title}</Text>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}

export default TitleTile


let stylesPortrait 
let stylesLandscape