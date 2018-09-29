import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native';
import firebase from 'firebase';
import ListItem from './ListItem';

class ScreenList extends React.Component {
    static navigationOptions = {
        title: 'ServiceList',
    };
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            remoteList: null,
            dataType: this.props.navigation.getParam('dataType', null),
            listReadyToMap: []
        };
        this.handleSelection = this.handleSelection.bind(this)
        this.handleMapping = this.handleMapping.bind(this)
    }

    getReferenceFromDataType(dataType) {
        switch (dataType) {
            case 'service':
                return 'AkongoFakeZoo/servicesData/'
                break;
            case 'event':
                return 'AkongoFakeZoo/eventsData/'
                break;
            case 'animation':
                return 'AkongoFakeZoo/animationsData/'
                break;
            default:
                break;
        }
    }

    readDataFromDatabase(dataType) {

        let reference = this.getReferenceFromDataType(dataType)
        var self = this;
        var ref = firebase.database().ref(reference)
        ref.once('value').then(snap => {
            let remoteData = snap.val();
            self.setState({
                remoteList: remoteData
            });
        }).then(result => {
            this.handleMapping()
        });
    }

    handleMapping() {
        switch (this.state.dataType) {
            case 'service':
                this.setState({
                    listReadyToMap: this.mapService()
                })
                break;
            case 'animation':
                this.setState({
                    listReadyToMap: this.mapAnimation()
                })
                break;
            case 'event':
                this.setState({
                    listReadyToMap: this.mapEvent()
                })
                break;

            default:
                break;
        }
    }

    mapService() {
        let remoteList = this.state.remoteList;
        const list = [];
        for (let item in remoteList) {
            let itemData = {
                itemName: remoteList[item].serviceName,
                itemId: remoteList[item].serviceId,
                itemPhoto: remoteList[item].serviceProfilePicture.largeThumb,
            };
            list.push(itemData);
        }
        console.log(list)
        return list
    }

    mapEvent() {
        let remoteList = this.state.remoteList;
        const list = [];
        for (let item in remoteList) {
            let itemData = {
                itemName: remoteList[item].eventName,
                itemId: remoteList[item].eventId,
                itemPhoto: remoteList[item].eventProfilePicture.largeThumb,
            };
            list.push(itemData);
        }
        return list
    }

    mapAnimation() {
        let remoteList = this.state.remoteList;
        const list = [];
        for (let item in remoteList) {
            let itemData = {
                itemName: remoteList[item].animationName,
                itemId: remoteList[item].animationId,
                itemPhoto: remoteList[item].animationProfilePicture.largeThumb,
            };
            list.push(itemData);
        }
        return list
    }

    handleSelection(itemId) {
        switch (this.state.dataType) {
            case 'service':
                this.props.navigation.navigate('ScreenService', {
                    serviceId: itemId
                });
                break;
            case 'event':
                this.props.navigation.navigate('ScreenEvent', {
                    eventId: itemId
                });
                break;
            case 'animation':
                this.props.navigation.navigate('ScreenAnimation', {
                    animationId: itemId
                });
                break;
            default:
                break;
        }
    }

    componentWillMount() {
        this.readDataFromDatabase(this.state.dataType)
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    {
                        this.state.listReadyToMap.map(function (item) {
                            return <ListItem
                                itemData={item}
                                key={item.itemId}
                                handleClick={this.handleSelection} />;
                        }, this)
                    }
                </View>
            </ScrollView>
        );
    }
}

export default ScreenList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
