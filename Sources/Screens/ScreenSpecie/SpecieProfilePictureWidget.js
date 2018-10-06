import React from 'react';
import { View, Image, Dimensions, StyleSheet, Text } from 'react-native';
import { iOSUIKit, material, systemWeights } from 'react-native-typography'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo';
import isLandscape from '../../Components/Scripts/isLandscape';

class SpecieProfilePictureWidget extends React.Component {
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
            widgetContainer: { 
                position: 'relative',
                height: hp('15%'),
                marginHorizontal: wp('3%'),
                top: (hp('-35%')),
                bottom: 0,
                left: 0,
                right: 0,
                justifyContent: 'center',
            },
            widgetSubContainer: {
                marginTop: hp('2%'),
                marginLeft: wp('1%'),
                flexDirection: "row",
                justifyContent: 'flex-start'
            },
            widgetSubItem: {
                marginRight: wp('1%'),
            },
        });
        stylesLandscape = StyleSheet.create({
            widgetContainer: { 
                position: 'relative',
                height: hp('15%'),
                marginHorizontal: wp('3%'),
                top: (hp('-35%')),
                bottom: 0,
                left: 0,
                right: 0,
                justifyContent: 'center',
            },
            widgetSubContainer: {
                marginTop: hp('2%'),
                marginLeft: wp('1%'),
                flexDirection: "row",
                justifyContent: 'flex-start'
            },
            widgetSubItem: {
                marginRight: wp('1%'),
            },
        });
        return (
            <View>
                <View style={this.getStyle().widgetContainer}>
                    <Text style={material.display3White}>Chien sauvage</Text>
                    <View style={this.getStyle().widgetSubContainer}>
                        <View style={this.getStyle().widgetSubItem}>
                            <Text style={material.captionWhite}>Canigus canis</Text>
                        </View>
                        <View style={this.getStyle().widgetSubItem}>
                            <Text style={material.captionWhite}>|</Text>
                        </View>
                        <View style={this.getStyle().widgetSubItem}>
                            <Text style={material.captionWhite}>Savane africaine</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default SpecieProfilePictureWidget


let stylesPortrait
let stylesLandscape