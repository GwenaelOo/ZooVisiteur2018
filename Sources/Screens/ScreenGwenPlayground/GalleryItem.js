import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class GalleryItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <TouchableOpacity activeOpacity={0.5} delayPressIn={75} onPress={this.HandlePress}>
                <View style={styles.galleryItem}>
                    <Image
                        style={{ width: wp('30%'), height: wp('30%'), marginTop: hp('3%') }}
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
