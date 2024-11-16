import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {COLORS, FONTS, SIZES, icons} from '../../constants';

const ImagePickBottom = ({galleryPress, cameraPress}) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={styles.cameraTouch}
        onPress={galleryPress}
        activeOpacity={0.5}>
        <Image
          source={require('../../assets/image/galleryIcon.png')}
          resizeMethod="resize"
          resizeMode="cover"
          style={styles.galleryIcon}
        />
        <Text style={styles.text}>Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cameraTouch}
        onPress={cameraPress}
        activeOpacity={0.5}>
        <Image
          source={require('../../assets/image/cameraIcon.png')}
          resizeMethod="resize"
          resizeMode="cover"
          style={[styles.galleryIcon]}
        />
        <Text style={styles.text}>Camera</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ImagePickBottom;

const styles = StyleSheet.create({
  galleryIcon: {
    width: SIZES.width * 0.17,
    height: SIZES.width * 0.17,
    resizeMode: 'cover',
  },

  main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: SIZES.width * 0.18,
    marginTop: SIZES.height * 0.032,
    resizeMode: 'cover',
  },
  cameraTouch: {
    alignItems: 'center',
  },
  text: {
    color: COLORS.gray80,
    fontFamily: FONTS.medium,
    fontSize: SIZES.width * 0.04,
    marginTop: SIZES.height * 0.005,
  },
});
