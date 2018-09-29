import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';

class ServiceListItem extends Component {
    static navigationOptions = {
        title: 'ServiceListItem',
    };
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height / 2,
            serviceData: this.props.serviceData
        };
        this.HandlePress = this.HandlePress.bind(this)
    }

    HandlePress() {
        this.props.handleClick(this.props.serviceData.serviceId)
    }

    render() {
        console.log(this.state.serviceData)
        return (
            <View style={styles.container}>
                <View>
                    <Text >
                        {this.props.serviceData.serviceName}
                    </Text>
                </View>
                <View>
                    <Text >
                        {this.props.serviceData.serviceDescription}
                    </Text>
                </View>
                <View>
                    <TouchableOpacity onPress={this.HandlePress}>
                        <Image
                            style={{ width: this.state.width, height: this.state.height }}
                            source={{ uri: this.props.serviceData.serviceProfilePicture.largeThumb }} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default ServiceListItem;

const styles = StyleSheet.create({
    container: {
        flex: 1
        /*         fontWeight: 'bold',
                fontSize: 35,
                marginLeft: 20,
                marginTop: 0,
                textAlign: 'left',
                color: '#5E7FB1', */
    },
    type: {
        /*  flex: 1, */
        /*         margin: 20,
                textAlign: 'left',
                color: '#5E7FB1', */
    },
});