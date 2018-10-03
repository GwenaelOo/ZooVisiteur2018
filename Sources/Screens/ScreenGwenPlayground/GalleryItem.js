import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';

class GalleryItem extends React.Component {
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
        return (
            <TouchableOpacity activeOpacity={0.5} delayPressIn={75} onPress={this.HandlePress}>
                <View style={styles.galleryItem}>
                    <Image
                        style={{ width: this.state.pictDim, height: this.state.pictDim, marginTop: this.state.marginTop }}
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
    },
})
