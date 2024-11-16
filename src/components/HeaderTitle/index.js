import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const HeaderText = ({textStyle, children, statusBarColor}) => {
  const [numberOfLines, setNumberOfLines] = useState(0);

  const onTextLayout = event => {
    const {lines} = event.nativeEvent;
    setNumberOfLines(lines.length);
    // console.log('firstLine', lines.length);
  };
  return (
    <Text
      style={[styles.text, numberOfLines > 1 && {marginBottom: 0}, textStyle]}
      onTextLayout={onTextLayout}
      numberOfLines={1}>
      {children}
    </Text>
  );
};
export default HeaderText;

const styles = StyleSheet.create({
  text: {
    // marginLeft: SIZES.width * 0.028,
    color: COLORS.gray80,
    fontFamily: FONTS.LexRegular,
    fontSize: SIZES.width * 0.049,
    // width: SIZES.width * 0.88 - SIZES.width * 0.18,
    textAlign: 'center',
    alignSelf: 'center',
    // backgroundColor: COLORS.primary,
  },
});
