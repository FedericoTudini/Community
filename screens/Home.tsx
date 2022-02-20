import { Component, ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Map from '../components/Map';

export default class Home extends Component {
    render(): ReactNode {
        return (
            <View>
                <Map />
            </View>       
        )
    }
}

const styles = StyleSheet.create({
    top: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
    },
});
