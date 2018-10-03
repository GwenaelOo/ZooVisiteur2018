import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { BlurView, Constants, LinearGradient } from 'expo';
import GalleryItem from './GalleryItem'


class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            pictDim: Dimensions.get('window').width * 0.3,
            marginTop: Dimensions.get('window').width * 0.03,
        };
    }
    render() {
        console.log(this.props.galleryData)
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
                console.log(list)
            }

            return (
                <LinearGradient colors={['#f5f7fa' , '#c3cfe2']} style={[styles.galleryContainer, { top: -Math.abs(this.state.height * 0.15), paddingTop: 50, paddingBottom: 150 }]}>

                    {
                        list.map(function (item) { return <GalleryItem itemData={item} key={item.itemId} />; })
                    }
                </LinearGradient>
            )
        } else {
            return (
                null
            )
        }
    }
}


export default Gallery

const styles = StyleSheet.create({
    galleryContainer: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
})
