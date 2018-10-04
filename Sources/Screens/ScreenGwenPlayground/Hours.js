import React from 'react';
import { View, Image, Dimensions, StyleSheet, Text } from 'react-native';
import { iOSUIKit, material } from 'react-native-typography'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo';

class Hours extends React.Component {
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
            <LinearGradient colors={['#4c669f', '#016e8d']} style={[styles.itemData, { height: hp('15%'), marginHorizontal: wp('10%'), top: -Math.abs(hp('6%')) }]}>
                <View style={styles.vignette}>
                    <View style={styles.hours}>
                        <Text style={material.headlineWhite}>14H30</Text>
                        <Text style={material.subheadingWhite}>Prochaine Session</Text>
                    </View>
                    <View style={styles.buttonRemind}>
                    </View>
                </View>
            </LinearGradient>
        )
    }
}

export default Hours

const styles = StyleSheet.create({
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
