import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LargeSeparator from '../Separator/LargeSeparator'
import { TextTool } from '../../../Theme/style';

export default class Description extends Component {
    render() {
        return (
            <View>
                <LargeSeparator text={this.props.separatorText || 'Separateur'} />
                <View>
                    <Text style={[TextTool.PARAGRAPH, { marginHorizontal: 20 }]}>
                        {this.props.description || 'Pas de description'}
                    </Text>
                </View>
            </View>
        )
    }
}
