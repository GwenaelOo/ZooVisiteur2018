import React from 'react';
import { StyleSheet, Text, View, Button, Platform, AsyncStorage } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { config } from './config/config'

// IMPORTATION DES ECRANS

import ScreenGwenPlayground from './Sources/Screens/ScreenGwenPlayground/ScreenGwenPlayground'
import ScreenTedPlayground from './Sources/Screens/ScreenTedPlayground/ScreenTedPlayground'

import ScreenEvent from './Sources/Screens/ScreenEvent/ScreenEvent'
import ScreenService from './Sources/Screens/ScreenService/ScreenService'
import ScreenAnimation from './Sources/Screens/ScreenAnimation/ScreenAnimation'
import ScreenSpecies from './Sources/Screens/ScreenSpecies/ScreenSpecies'

import ScreenList from './Sources/Screens/ScreenList/ScreenList'

import ScreenSpecie from './Sources/Screens/ScreenSpecie/ScreenSpecie'

import ScreenAnimal from './Sources/Screens/ScreenAnimal/ScreenAnimal'

import ScreenMap from './Sources/Screens/ScreenMap/ScreenMap'

import Onboarding from './Sources/Components/Onboarding/Onboarding'


// IMPORTATION DES FICHIERS DE CONFIGURATION

import { firebaseConfig } from './config/config'
import registerForPushNotificationsAsync from './Sources/Components/api/registerForPushNotificationsAsync'

// IMPORTATION DES LIBRAIRIES

import * as firebase from 'firebase';

firebase.initializeApp(firebaseConfig);
registerForPushNotificationsAsync()

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the awesome APP',
  };
  constructor(props) {
    super(props);
    this.state = {
    };
    this.storeData = this.storeData.bind(this)
    this.readDataFromDatabase = this.readDataFromDatabase.bind(this)
  }

  createNotificationChannel() {
    console.log('les notifications c bon')
    Expo.Notifications.createChannelAndroidAsync('chat-messages', {
      name: 'BackendNotification',
      priority: 'max',
      sound: true,
      vibrate: [0, 250, 250, 250],
    });
  }

  storeData = async (remoteData) => {
    let stringData = JSON.stringify(remoteData)
    try {
      await AsyncStorage.setItem('localData', stringData);
    } catch (error) {
      // Error saving data
    }
  }

  readDataFromDatabase() {
    var self = this;
    var ref = firebase.database().ref('AkongoFakeZoo/')
    ref.once('value').then(snap => {
      return snap.val();
    }).then(data => {
      this.storeData(data)
    })
  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      this.createNotificationChannel()
    }
    this.readDataFromDatabase()
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-around' }}>

        <Button
          title="ScreenSpecies"
          onPress={() => {
            this.props.navigation.navigate('ScreenSpecies', {
            });
          }}
        />

        <Button
          title="Aller à la page Event"
          onPress={() => {
            this.props.navigation.navigate('ScreenList', {
              dataType: 'event'
            });
          }}
        />

        <Button
          title="Aller à la page Animation"
          onPress={() => {
            this.props.navigation.navigate('ScreenList', {
              dataType: 'animation'
            });
          }}
        />

        <Button
          title="Aller à la page Service"
          onPress={() => {
            this.props.navigation.navigate('ScreenList', {
              dataType: 'service'
            });
          }}
        />

        <Button
          title="Aller à la page Ted Playground"
          onPress={() => {
            this.props.navigation.navigate('ScreenTedPlayground', {
            });
          }}
        />
        <Button
          title="Aller à la page Map"
          onPress={() => {
            this.props.navigation.navigate('ScreenMap', {
            });
          }}
        />
        <Button
          title="Aller à la page Test"
          onPress={() => {
            this.props.navigation.navigate('ScreenTest', {
            });
          }}
        />
        <Button
          title="Animal Screen"
          onPress={() => {
            this.props.navigation.navigate('ScreenAnimal', {
            });
          }}
        />
                <Button
          title="Onboarding"
          onPress={() => {
            this.props.navigation.navigate('Onboarding', {
            });
          }}
        />

      </View>
    );
  }
}

const Navigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  ScreenEvent: {
    screen: ScreenEvent
  },
  ScreenTedPlayground: {
    screen: ScreenTedPlayground
  },
  ScreenGwenPlayground: {
    screen: ScreenGwenPlayground
  },
  ScreenSpecie: {
    screen: ScreenSpecie
  },
  ScreenList: {
    screen: ScreenList
  },
  ScreenEvent: {
    screen: ScreenEvent
  },
  ScreenService: {
    screen: ScreenService
  },
  ScreenAnimation: {
    screen: ScreenAnimation
  },
  ScreenSpecies: {
    screen: ScreenSpecies
  },
  ScreenAnimal: {
    screen: ScreenAnimal
  },
  ScreenMap: {
    screen: ScreenMap
  },
  Onboarding: {
    screen: Onboarding,
  },
  
}, {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerTintColor: '#5E7FB1',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#5E7FB1',
      },
    }
  });

export default class App extends React.Component {
  render() {
    return <Navigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
