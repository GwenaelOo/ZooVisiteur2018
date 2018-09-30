import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import {RkCard} from 'react-native-ui-kitten';

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
            <View>
{/*                 <View>
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
                </View> */}

            <View>
            <RkCard>
            <View rkCardHeader>
                <Text style={styles.header}>{this.props.serviceData.serviceName}</Text>
            </View>
            <TouchableOpacity onPress={this.HandlePress}> 
            <Image rkCardImg source={{uri:this.props.serviceData.serviceProfilePicture.largeThumb}}/>
            </TouchableOpacity> 
            <View rkCardContent>
                <Text>{this.state.specieData.specieLatinName} has a {this.state.specieData.specieLifeExpectancy} average life expectancy.</Text>
            </View>
            </RkCard>
            </View>

            </View>
        )
    }
}

export default ServiceListItem;

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
    },
    card : {
        padding: 15,
    }
});