import React from 'react';
import { View, Image, Dimensions, StyleSheet, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { iOSUIKit, material } from 'react-native-typography'
import { LinearGradient } from 'expo';
import isLandscape from '../../../Components/Scripts/isLandscape';

let stylesPortrait
let stylesLandscape 

class Description extends React.Component {
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
                backgroundColor: 'white',
                position: 'relative',
                top: -Math.abs(hp('15%')),
            },
            title: {
                marginTop: hp('12%'),
                marginLeft: wp('10%')
            },
            text: {
                marginTop: hp('2%'),
                marginBottom: hp('10%'),
                marginHorizontal: wp('10%')
            }
        });

        stylesLandscape = StyleSheet.create({
            container: {
                backgroundColor: 'white',
                position: 'relative',
                top: -Math.abs(hp('20%'))
            },
            title: {
                marginTop: hp('12%'),
                marginLeft: wp('10%')
            },
            text: {
                marginTop: hp('2%'),
                marginBottom: hp('15%'),
                marginHorizontal: wp('10%')
            }
        });

        return (
            <View style={this.getStyle().container} onLayout={this.onLayout}>
                <View name="title" style={this.getStyle().title}>
                    <Text style={material.title}>{this.props.title}</Text>
                </View>
                <View name="Description" style={this.getStyle().text}>
                    <Text style={[material.body1, { textAlign: 'justify' }]}>{this.props.text}</Text>
                </View>
            </View>
        )

    }
}

export default Description


