import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import firebase from 'firebase';
import ServiceListItem from './ServiceListItem';

class ServiceList extends React.Component {
    static navigationOptions = {
        title: 'Service List',
    };
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            serviceList: null
        };
        this.handleServiceSelection = this.handleServiceSelection.bind(this)
    }

    readDataFromDatabase () {
        var self = this;
        var ref = firebase.database().ref('AkongoFakeZoo/servicesData/')
        ref.once('value').then(snap => {
            let temp = snap.val();
            self.setState({
                serviceList: temp
            });
        });
    }

    handleServiceSelection(serviceId){
        this.props.navigation.navigate('ScreenTest', {   
            serviceId: serviceId 
        });
    }


    componentWillMount() {
        this.readDataFromDatabase()
        
    }

    render() {

    let services = this.state.serviceList;

    const list = [];

    for (let service in services) {

        let serviceData = {
            serviceName: services[service].serviceName,
            serviceProfilePicture: services[service].serviceProfilePicture,
            serviceId: services[service].serviceId,
            serviceDescription: services[service].serviceDescription
        };

        list.push(serviceData);
    } 

        return (
            <ScrollView>
                <View>
                {
                    list.map(function (service) { return <ServiceListItem 
                        serviceData={service}
                        key={service.serviceId}
                        handleClick={this.handleServiceSelection} />; }, this)
                }
                </View>
            </ScrollView>
        );
    }
}

export default ServiceList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
