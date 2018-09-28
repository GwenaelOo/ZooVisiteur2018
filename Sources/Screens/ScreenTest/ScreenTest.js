import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

class ScreenTest extends React.Component {
    static navigationOptions = {
        title: 'Test Screen',
      };
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
        };
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                   
                </View>
            </ScrollView>
        );
    }
}

export default ScreenTest

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  