import React from 'react';
import { View, Image, Dimensions } from 'react-native';

class ProfilePicture extends React.Component {
    state = {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 1.5,
    }

    render() {
        return (
            <View>
                <Image
                    style={{ width: this.state.width, height: (this.state.height / 2.5) }}
                    source={{ uri: this.props.img }}
                />
            </View>
        )
    }
}

export default ProfilePicture
