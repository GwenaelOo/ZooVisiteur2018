import React from 'react';
import { View, Image, Dimensions, StyleSheet, Text } from 'react-native';
import { iOSUIKit, material } from 'react-native-typography'
import { LinearGradient } from 'expo';

class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,
            profileHeight: Dimensions.get('window').height * 0.35,
            title: 'Animation'
        };
    }

    render() {
        return (
            <View style={[styles.container, {top: -Math.abs(this.state.height * 0.15) }]}>
                <View name="title" style={{ marginTop: this.state.height * 0.12, marginLeft: this.state.width * 0.1 }}>
                    <Text style={material.title}>{this.state.title}</Text>
                </View>
                <View name="Description" style={{ marginTop: this.state.height * 0.02, marginBottom:this.state.height * 0.05,  marginHorizontal: this.state.width * 0.1, }}>
                    <Text style={[material.body1, { textAlign: 'justify' }]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl ante, pretium ac imperdiet ut, auctor vitae ipsum. In nec felis molestie, vehicula orci sed, porta ligula. Aenean eget blandit tortor. Aenean rhoncus enim et eleifend volutpat. Vestibulum at orci eu lectus lacinia feugiat. Suspendisse volutpat pretium placerat. Fusce diam magna, consequat at libero at, ullamcorper elementum est. Quisque ac volutpat ex. Nullam non condimentum ex. Nam pharetra nec est quis condimentum. Duis dictum, enim vitae lobortis fringilla, lectus leo tempus mauris, ac feugiat turpis ipsum non purus. In non est ex. Praesent auctor, neque a viverra egestas, velit enim facilisis orci, sed viverra mi nisl et massa. In hac habitasse platea dictumst. Sed in lorem eu nulla aliquam hendrerit a eget libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl ante, pretium ac imperdiet ut, auctor vitae ipsum. In nec felis molestie, vehicula orci sed, porta ligula. Aenean eget blandit tortor. Aenean rhoncus enim et eleifend volutpat. Vestibulum at orci eu lectus lacinia feugiat. Suspendisse volutpat pretium placerat. Fusce diam magna, consequat at libero at, ullamcorper elementum est. Quisque ac volutpat ex. Nullam non condimentum ex. Nam pharetra nec est quis condimentum. Duis dictum, enim vitae lobortis fringilla, lectus leo tempus mauris, ac feugiat turpis ipsum non purus. In non est ex. Praesent auctor, neque a viverra egestas, velit enim facilisis orci, sed viverra mi nisl et massa. In hac habitasse platea dictumst. Sed in lorem eu nulla aliquam hendrerit a eget libero.</Text>
                </View>
            </View>
        )
    }
}

export default Description

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        opacity: 0.55
    },
    itemData: {
        backgroundColor: '#016e8d',
        position: 'relative',
        top: -30,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 15 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 8,
    },
    container: {
        backgroundColor: 'white',
        position: 'relative',
        top: 0,
    },
    hours: {
        flex: 5,
        justifyContent: 'space-around',
        flexDirection: 'column',
        alignItems: 'center',
    },
    buttonRemind: {
        flex: 3,
    },
    vignette: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});
