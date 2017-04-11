import React, {Component} from 'react';

import {
    Text,
    Navigator,
    Image,
    View,
    StyleSheet,
} from 'react-native';

export default class MyPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return <View style={styles.container}>
        <Text>MyPage</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#eeeeee',
    }
})