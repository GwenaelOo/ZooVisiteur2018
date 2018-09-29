import React from 'react';
import {View, Image, Dimensions} from 'react-native';

class ProfilePicture extends React.Component {
    state = {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height /2,
    }
  
    render() {
      return (
        <View>
            <Image
                style={{width: this.state.width, height: this.state.height}} 
                source={{uri: this.props.pic.largeThumb}}
            />
         </View>
        )
    }
}

export default ProfilePicture
