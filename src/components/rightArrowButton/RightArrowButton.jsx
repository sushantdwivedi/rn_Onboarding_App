import React from 'react';
import {TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS, FONTS, SIZES} from '../../constants'; // Make sure these constants are correctly defined in your project

const RightArrowButton = ({onPress, style, animatedStyle}) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity onPress={onPress}>
        <LinearGradient
          colors={['#FF4B3C', '#F09722']}
          style={[styles.button, animatedStyle]}>
          <Image
            source={require('../../assets/fonts/rightArrow.png')}
            style={styles.icon}
          />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default RightArrowButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  button: {
    height: SIZES.width * 0.14,
    width: SIZES.width * 0.14,
    borderRadius: (SIZES.width * 0.14) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: SIZES.width * 0.05,
    height: SIZES.width * 0.05,
    resizeMode: 'contain',
  },
});
