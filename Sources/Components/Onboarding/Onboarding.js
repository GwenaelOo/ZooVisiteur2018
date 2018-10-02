import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
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
    backgroundColor: 'black',
    opacity: 0.8,
    padding: 15,
    textAlign: 'center',
    marginBottom: 16,
  }
});


const slides = [
  {
    key: 'somethun',
    title: 'Quick setup, good defaults',
    text: 'Bienvenue dans notre Parc !',
    image: require('../../../assets/onboarding1.jpg'),
  },
  {
    key: 'somethun1',
    title: 'Super customizable',
    text: 'Rencontrez nos animaux...',
    image: require('../../../assets/onboarding2.jpg'),
  },
  {
    key: 'somethun2',
    title: 'no need to buy me a beer ',
    text: 'Et profitez de nos restaurants !',
    image: require('../../../assets/onboarding3.jpg'),
  },
];


export default class App extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    showRealApp: false
  }
  
  }


  static navigationOptions = {
    header: null,
  };

  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    console.log('test')
    this.props.navigation.navigate('Home', {}); 
  }

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
    style={styles.title}>
    {props.text}
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
        onDone={this._onDone}
      />   
    )}
}
