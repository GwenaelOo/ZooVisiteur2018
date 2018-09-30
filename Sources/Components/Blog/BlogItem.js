import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { RkCard } from 'react-native-ui-kitten';

class GalleryItem extends React.Component {
    state = {

    }

    render() {
<<<<<<< HEAD
=======
        console.log('props article data')
        console.log(this.props.articleData)
>>>>>>> Bug fixing
        return (
            <RkCard>
                <TouchableOpacity >
                    <View rkCardHeader>
                        <Text style={styles.header}>{this.props.articleData.articleTitle}</Text>
                    </View>
                    {/* <Image rkCardImg source={{ uri: this.state.specieData.specieProfilePicture.largeThumb }} /> */}
                    <View rkCardContent>
                        <HTMLView
                            value={this.props.articleData.articleContentHTML}
                            stylesheet={styles}
                        />
                    </View>
                </TouchableOpacity>
            </RkCard>
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
    }, header: {
        fontSize: 30,
    },
    card: {
        padding: 15,
    }
})
