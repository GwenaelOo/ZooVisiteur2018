import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, AsyncStorage } from 'react-native';
import firebase from 'firebase';
import ListItem from './ListItem';
import { RkTabView } from 'react-native-ui-kitten';

import { config } from '../../../config/config'

class ScreenList extends React.Component {
    static navigationOptions = {
        title: 'ServiceList',
    };
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            dataList: null,
            dataType: this.props.navigation.getParam('dataType', null),
            listReadyToMap: []
        };
        this.handleSelection = this.handleSelection.bind(this)
        this.handleMapping = this.handleMapping.bind(this)
        this.handleTabChange = this.handleTabChange.bind(this)
        this.readDataFromLocalData = this.readDataFromLocalData.bind(this)
        this.updateData = this.updateData.bind(this)
    }

    getReferenceFromDataType(dataType) {
        let reference
        switch (dataType) {
            case 'service':
                reference = {
                    online: config.zooId + '/servicesData/',
                    offline: 'servicesData'
                }
                return reference
                break;
            case 'event':
                reference = {
                    online: config.zooId + '/eventsData/',
                    offline: 'servicesData'
                }
                return reference
                break;
            case 'animation':
                reference = {
                    online: config.zooId + '/animationsData/',
                    offline: 'animationsData'
                }
                return reference
                break;
            default:
                break;
        }
    }

    handleTabChange(index) {
        switch (index) {
            case 0:
                this.setState({
                    dataType: 'event'
                })
                this.updateData()
                break;
            case 1:
                this.setState({
                    dataType: 'animation'
                })
                this.updateData()
                break;
            case 2:
                this.setState({
                    dataType: 'service'
                })
                this.updateData()
                break;
            default:
                break;
        }
    }

    readDataFromDatabase(dataType) {
        let remoteData
        let reference = this.getReferenceFromDataType(dataType)
        var self = this;
        var ref = firebase.database().ref(reference.online)
        ref.once('value').then(snap => {
            return snap.val(); 
        }).then(dataList => {
            let list = this.handleMapping(dataType,dataList)
            this.setState({
                listReadyToMap: list
            })
        });  
    }

    updateScreenFromLocalData(dataType){
        let reference = this.getReferenceFromDataType(dataType)
        let localData = this.state.localData

        localDataRef = localData[reference.offline]
        let list = this.handleMapping(dataType,localDataRef)
        console.log(list)
        this.setState({
            listReadyToMap: list
        })
    }

    readDataFromLocalData = async (dataType) => {
        let reference = this.getReferenceFromDataType(dataType)
        let localData = '';
        try {
            localData = await AsyncStorage.getItem('localData') || 'none';
        } catch (error) {
            this.readDataFromDatabase(dataType)
        }

        localData = JSON.parse(localData)

        this.setState({
            localData: localData
        })
        localDataRef = localData[reference.offline]
        let list = this.handleMapping(dataType,localDataRef)
        this.setState({
            listReadyToMap: list
        })
    }

    handleSelection(itemId) {
        console.log(this.state.dataType)
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

    handleMapping(dataType, dataList) {
        switch (dataType) {
            case 'service':
                return this.mapService(dataList)
                break;
            case 'animation':
         
                return this.mapAnimation(dataList)
                break;
            case 'event':
                return this.mapEvent(dataList)
                break;

            default:
            console.log('DataType non identifié')
                break;
        }
    }

    mapService(dataList) {
        const list = [];
        for (let item in dataList) {
            let itemData = {
                itemName: dataList[item].serviceName,
                itemId: dataList[item].serviceId,
                itemPhoto: dataList[item].serviceProfilePicture.largeThumb,
            };
            list.push(itemData);
        }
        return list
    }

    mapEvent(dataList) {
        const list = [];
        for (let item in dataList) {
            let itemData = {
                itemName: dataList[item].eventName,
                itemId: dataList[item].eventId,
                itemPhoto: dataList[item].eventProfilePicture.largeThumb,
            };
            list.push(itemData);
        }
        return list
    }

    mapAnimation(dataList) {
        const list = [];
        for (let item in dataList) {
            let itemData = {
                itemName: dataList[item].animationName,
                itemId: dataList[item].animationId,
                itemPhoto: dataList[item].animationProfilePicture.largeThumb,
            };
            list.push(itemData);
        }
        return list
    }

    updateData() {
        //this.updateScreenFromLocalData(this.state.dataType)
        this.readDataFromDatabase(this.state.dataType)
    }

    componentWillMount() {
        //this.readDataFromLocalData(this.state.dataType)
        this.readDataFromDatabase(this.state.dataType)

    }

    render() {
        return (
            <ScrollView>
                <View>
                    <RkTabView rkType='material' onTabChanged={(index) => this.handleTabChange(index)}>
                        <RkTabView.Tab title={'Events'}>
                            <Text></Text>
                        </RkTabView.Tab>
                        <RkTabView.Tab title={'Services'}>
                            <Text></Text>
                        </RkTabView.Tab>
                        <RkTabView.Tab title={'Animations'}>
                            <Text></Text>
                        </RkTabView.Tab>
                    </RkTabView>
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