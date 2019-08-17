import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import SuperGrid from '../components/SuperGrid';

export default function HomeScreen(props) {
  return (
    <ScrollView >
      <View style={styles.container}>
        <SuperGrid navigate={props.navigation.navigate} />
      </View>
    </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  title: 'JamTunes',
  headerBackTitle: null,
  headerTintColor: 'white',
  headerStyle: {
    borderBottomWidth: 0,
    backgroundColor: '#008dff',
  },
  headerTitleStyle: {
    color: 'white',
    fontSize: 32,
    fontWeight: "500",
  },
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
