import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import GalleryItem from './GalleryItem'
import LargeSeparator from '../Common/Separator/LargeSeparator';

class Gallery extends React.Component {
    render() {
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
                    <LargeSeparator text='Gallerie' />
                    <ScrollView horizontal={true}>
                        <View style={styles.galleryContainer}>
                            {
                                list.map(function (item) { return <GalleryItem itemData={item} key={item.itemId} />; })
                            }
                        </View>
                    </ScrollView>
                </View>
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
    title: {
        flex: 1,
        marginTop: 25,
        marginBottom: 15,
        textAlign: 'center',
        color: '#5E7FB1',
        fontSize: 35,
    },

    galleryContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },

    galleryItem: {
        marginLeft: 10
    }
})
