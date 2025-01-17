/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  useTVEventHandler,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Gallery from './src/components/Gallery';
import Menu from './src/components/Menu';

const App = () => {
  const [menuVisible, setMenuVisible] = React.useState(true);
  useTVEventHandler((evt) => {
    if (evt?.eventType === 'right') {
      setMenuVisible(false);
    }
    if (evt?.eventType == 'left') {
      setMenuVisible(true);
    }
  });
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Menu visible={menuVisible} />
            <View style={styles.sectionContainer}>
              <Gallery rowNumber={0} />
              <Gallery />
              <Gallery />
              <Gallery />
              <Gallery />
              <Gallery />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.black,
    flexDirection: 'row',
  },
  sectionContainer: {
    marginTop: 32,
    marginLeft: 10,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
