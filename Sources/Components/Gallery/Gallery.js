import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import GalleryItem from './GalleryItem'

class Gallery extends React.Component {
    state = {

    }

    render() {

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
            <ScrollView horizontal={true}>
                <View style={styles.galleryContainer}>
                    {
                        list.map(function (item) { return <GalleryItem itemData={item} key={item.itemId} />; })
                    }
                </View>
            </ScrollView>
        )
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
