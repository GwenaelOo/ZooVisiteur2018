import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';


export default function returnOrientation(){
    return ((wp('100%')) > (hp('100%')) ? 'landscape' : 'portrait ')
}

