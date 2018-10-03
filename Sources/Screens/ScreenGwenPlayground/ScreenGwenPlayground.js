import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';

class ScreenEvent extends React.Component {
    static navigationOptions = {
        title: 'Gwen Screen',
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
            <View>
            <StatusBar
                backgroundColor="blue"
                barStyle="light-content"
            />
            <ScrollView>
                <View style={styles.container}>

                </View>
            </ScrollView>
            </View>
        );
    }
}

export default ScreenEvent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
