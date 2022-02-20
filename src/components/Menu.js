import React, {useState} from 'react';
import {StyleSheet, Platform, View} from 'react-native';
import MenuItem from './MenuItem';

const Menu = ({visible}) => {
  const [focus, setFocus] = useState(false);

  return (
    <View
      style={[
        Platform.OS === 'android' ? styles.wrapperAndroid : styles.wrapperApple,
        focus || visible ? styles.wrapperFocused : null,
      ]}>
      <View style={styles.circle} />
      <MenuItem setMenuFocus={setFocus} />
      <MenuItem setMenuFocus={setFocus} />
      <MenuItem setMenuFocus={setFocus} />
      <MenuItem setMenuFocus={setFocus} />
      <MenuItem setMenuFocus={setFocus} />
      <MenuItem setMenuFocus={setFocus} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperAndroid: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    width: 100,
    height: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 1,
    left: -200,
    transform: [{translateX: 200}],
    alignItems: 'center',
  },
  wrapperApple: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    width: 100,
    height: '100%',
    alignItems: 'center',
  },
  wrapperFocused: {
    width: 200,
  },
  circle: {
    backgroundColor: '#808080',
    width: 50,
    height: 50,
    borderRadius: 30,
    marginBottom: 110,
    marginTop: 30,
  },
});

export default Menu;
