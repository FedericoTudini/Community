import { Component, ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

export default class Navbar extends Component {
    render(): ReactNode {
        return (
            <View style={styles.top}>
                <StatusBar />
                <Appbar.Header style={styles.appbar}>
                    <Appbar.Content title="Community" />
                </Appbar.Header>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    appbar: {
        backgroundColor: '#bb182b',
        elevation: 4
    },
    top: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
    },
});
