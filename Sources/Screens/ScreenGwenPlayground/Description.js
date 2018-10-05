import React from 'react';
import { View, Image, Dimensions, StyleSheet, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { iOSUIKit, material } from 'react-native-typography'
import { LinearGradient } from 'expo';
import returnOrientation from '../../Components/Scripts/returnOrientation'

class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {

        const styles = ((returnOrientation() === 'portrait')?stylesPortrait : stylesPaysage)
        return (
            <View style={[styles.container]}>
                <View name="title" style={styles.title}>
                    <Text style={material.title}>{this.props.title}</Text>
                </View>
                <View name="Description" style={styles.text}>
                    <Text style={[material.body1, { textAlign: 'justify' }]}>{this.props.text}</Text>
                </View>
            </View>
        )

    }
}

export default Description


const stylesPortrait = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        position: 'relative',
        top: -Math.abs(hp('15%'))
    },
    title: {
        marginTop: hp('12%'),
        marginLeft: wp('10%')
    },
    text: {
        marginTop: hp('2%'),
        marginBottom: hp('5%'),
        marginHorizontal: wp('10%')
    }
});

const stylesPaysage = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        position: 'relative',
        top: -Math.abs(hp('15%'))
    },
    title: {
        marginTop: hp('12%'),
        marginLeft: wp('10%')
    },
    text: {
        marginTop: hp('2%'),
        marginBottom: hp('5%'),
        marginHorizontal: wp('10%')
    }
});