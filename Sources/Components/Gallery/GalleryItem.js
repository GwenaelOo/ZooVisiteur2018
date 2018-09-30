import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

class GalleryItem extends React.Component {
    state = {

    }

    render() {
        return (
            <TouchableOpacity activeOpacity={0.5} delayPressIn={75} onPress={this.HandlePress}>
                <View style={styles.galleryItem}>
                    <Image
                        style={{ width: 150, height: 150 }}
                        source={{ uri: this.props.itemData.itemURL }}
                    />
                </View>
            </TouchableOpacity>
        )
    }
}

export default GalleryItem

const styles = StyleSheet.create({
    galleryItem: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginLeft: 10
    },
})
