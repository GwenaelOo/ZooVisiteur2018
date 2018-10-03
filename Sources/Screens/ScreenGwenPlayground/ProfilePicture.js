import React from 'react';
import {View, Image, Dimensions} from 'react-native';

class ProfilePictureDesign extends React.Component {
    state = {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height /3,
    }
  
    render() {
        console.log(this.props.img)
      return (
        <View>
            <Image
                style={{width: this.state.width, height: this.state.height}} 
                source={{uri: this.props.img}}
            />
         </View>
        )
    }
}

export default ProfilePictureDesign
