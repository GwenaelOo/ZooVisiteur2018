import React from 'react';
import { View, Image, Dimensions, StyleSheet, Text } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { iOSUIKit, material } from 'react-native-typography'
import { LinearGradient } from 'expo';

class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
    
        };
    }

    render() {
        return (
            <View style={[styles.container, {top: -Math.abs(hp('15%')) }]}>
                <View name="title" style={{ marginTop: hp('12%'), marginLeft: hp('10%') }}>
                    <Text style={material.title}>{this.props.title}</Text>
                </View>
                <View name="Description" style={{ marginTop: hp('2%'), marginBottom: hp('5%'),  marginHorizontal: wp('10%') }}>
                    <Text style={[material.body1, { textAlign: 'justify' }]}>{this.props.text}</Text>
                </View>
            </View>
        )
    }
}

export default Description

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
        opacity: 0.55
    },
    itemData: {
        backgroundColor: '#016e8d',
        position: 'relative',
        top: -30,
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
    container: {
        backgroundColor: 'white',
        position: 'relative',
        top: 0,
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
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});
