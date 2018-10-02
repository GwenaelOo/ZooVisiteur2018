

import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'center',
   
  },
  image: {
    
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  }
});

const slides = [
  {
    key: 'somethun',
    title: 'Quick setup, good defaults',
    text: 'React-native-app-intro-slider is easy to setup with a small footprint and no dependencies. And it comes with good default layouts!',
    /* icon: 'ios-images-outline', */
    image: require('../../../assets/onboarding1.jpg'),
    colors: ['#63E2FF', '#B066FE'], 
  },
  {
    key: 'somethun1',
    title: 'Super customizable',
    text: 'The component is also super customizable, so you can adapt it to cover your needs and wants.',
    /* icon: 'ios-options-outline', */
    image: require('../../../assets/onboarding2.jpg'),
    colors: ['#A3A1FF', '#3A3897'],
  },
  {
    key: 'somethun2',
    title: 'No need to buy me beer',
    text: 'Usage is all free',
    /* icon: 'ios-beer-outline', */
    image: require('../../../assets/onboarding1.jpg'),
    colors: ['#29ABE2', '#4F00BC'],
  },
];

export default class App extends React.Component {
  static navigationOptions = {
    header: null,
  };
  _renderItem = props => (
<View>
  <Image
    source={props.image}
    style={{width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,}} >
    </Image>
    <View style={{
      position: 'absolute',
      top: 300,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
  <Text 
    style={{
      color: 'white',

  }}>
    Centered text
  </Text>
</View>
      
      </View>
  );

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        bottomButton
      />
    );
  }
}