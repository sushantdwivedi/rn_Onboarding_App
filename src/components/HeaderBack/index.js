import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import {COLORS, FONTS, SIZES, icons} from '../../constants';
import Ripple from '../Ripple';

const HeaderBack = ({touchStyle, onPress}) => {
  return (
    // <TouchableOpacity style={[styles.btn, touchStyle]} onPress={onPress}>
    //   <Image
    //     source={require('../../assets/image/chevronLeft.png')}
    //     resizeMode="contain"
    //     style={styles.backIcon}
    //   />
    // </TouchableOpacity>
    <Ripple onTap={onPress} style={[styles.btn, touchStyle]}>
      <Image
        source={require('../../assets/image/chevronLeft.png')}
        resizeMode="contain"
        style={styles.backIcon}
      />
    </Ripple>
  );
};
export default HeaderBack;

const styles = StyleSheet.create({
  btn: {
    // width: SIZES.width * 0.09,
    // height: SIZES.width * 0.09,
    width: SIZES.width * 0.12,
    height: SIZES.width * 0.12,
    alignSelf: 'center',
    // alignItems: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    backgroundColor: COLORS.lightGray10,
    borderRadius: 50,
  },
  backIcon: {
    width: SIZES.width * 0.06,
    height: SIZES.width * 0.064,
  },
});
