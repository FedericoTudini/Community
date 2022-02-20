import { Component, ReactNode } from 'react';
import { StyleSheet, Text, View, Dimensions, ProgressViewIOSComponent } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Region } from 'react-native-maps';
import mapStyle from '../utils/MapStyle';

type Props = {}

type State = {
  region: Region
}

export default class Map extends Component<Props, State> {

  state: State = {
    region: {
      latitude: 41.91375528914952,
      longitude: 12.503038840341285,
      latitudeDelta: 0.0322,
      longitudeDelta: 0.0321,
    }
  }

  render(): ReactNode {
    return (
      <MapView 
        style={styles.map}
        customMapStyle={mapStyle}
        provider={PROVIDER_GOOGLE}
        region={this.state.region}
      />
      )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
