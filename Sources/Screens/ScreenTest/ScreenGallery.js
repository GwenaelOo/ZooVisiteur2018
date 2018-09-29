import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';

class ScreenImage extends React.Component {
    state = {
      
    }
  
    render() {
        return (
<View style={{flex: 1, justifyContent: 'space-between'}}>
            <View>
               <Text style={styles.title} >Gallery</Text>
            </View>

            <ScrollView horizontal={true}>

            <Image
                style={{width: 150, height: 150}} 
                source={{uri: this.props.pic.largeThumb}}
            />
            <Image
                style={{width: 150, height: 150}} 
                source={{uri: this.props.pic.largeThumb}}
            />
            <Image
                style={{width: 150, height: 150}} 
                source={{uri: this.props.pic.largeThumb}}
            />
            </ScrollView>

</View>         
      )
    }
  }

export default ScreenImage

const styles = StyleSheet.create({
title: {
    flex: 1,
    marginTop: 25,
    marginBottom: 15,
    textAlign: 'center',
    color: '#5E7FB1',
    fontSize: 35,
},
})
