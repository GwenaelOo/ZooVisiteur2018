import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { View, Image, Dimensions, StyleSheet } from 'react-native';
import isLandscape from '../../Components/Scripts/isLandscape';

class ProfilePictureBackground extends React.Component {
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
            overlay: {
                height: hp('100%'),
                width: wp('100%'),
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black',
                opacity: 0.3,
            },
            image: {
                height: hp('100%'),
                width: (wp('100%')),
            }
        });
        stylesLandscape = StyleSheet.create({
            overlay: {
                height: hp('100%'),
                width: wp('100%'),
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black',
                opacity: 0.3
            },
            image: {
                height: hp('100%'),
                width: (wp('100%'))
            }
        });
        return (
            <View style={{ flex: 1 }}>
                <Image source={{ uri: this.props.profilePicture || null }} style={this.getStyle().image} />
                <View style={this.getStyle().overlay} />
            </View>
        )
    }
}

export default ProfilePictureBackground

let stylesPortrait
let stylesLandscape

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        opacity: 0.45
    },
});

