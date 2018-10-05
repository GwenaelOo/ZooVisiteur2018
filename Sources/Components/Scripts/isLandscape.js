import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';


export default function isLandscape(){
    return ((wp('100%')) > (hp('100%')) ? true : false)
}

