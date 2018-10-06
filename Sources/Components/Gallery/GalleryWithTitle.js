import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { BlurView, Constants, LinearGradient } from 'expo';
import GalleryItem from './GalleryItem'
import isLandscape from '../../Components/Scripts/isLandscape';
import SeparatorWithTitle from '../Common/Separator/SeparatorWithTitle';


class GalleryWithTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            pictDim: Dimensions.get('window').width * 0.3,
            marginTop: Dimensions.get('window').width * 0.03,
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
            galleryContainer: {
                flex: 1,
                justifyContent: 'space-around',
                flexDirection: 'row',
                flexWrap: 'wrap',
                top: (hp('-25%')),
                paddingTop: hp('5%'),
                paddingBottom: hp('3%')
            },
        })

        stylesLandscape = StyleSheet.create({
            galleryContainer: {
                flex: 1,
                justifyContent: 'space-around',
                flexDirection: 'row',
                flexWrap: 'wrap',
                top: (hp('-35%')),
                paddingTop: hp('10%'),
                paddingBottom: hp('3%')
            },
        })

        if (this.props.galleryData === undefined) {
            return null
        }
        if (Object.keys(this.props.galleryData).length > 0) {
            let gallery = this.props.galleryData;
            let list = []

            for (let item in gallery) {
                let galleryData = {
                    itemURL: gallery[item].largeThumb,
                    itemId: item
                };
                list.push(galleryData);
            }

            return (
                <View>
                    <SeparatorWithTitle title={this.props.title || 'Gallerie'} />
                    <LinearGradient colors={['#f5f7fa', '#c3cfe2']} style={this.getStyle().galleryContainer}>
                        {
                            list.map(function (item) { return <GalleryItem itemData={item} key={item.itemId} />; })
                        }
                    </LinearGradient>
                </View>
            )
        } else {
            return (
                null
            )
        }
    }
}


export default GalleryWithTitle


let stylesPortrait
let stylesLandscape

