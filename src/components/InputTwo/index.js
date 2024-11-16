import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants';

const InputTwo = ({
  placeholderText,
  style,
  placeholderTextColor,
  secureTextEntry,
  keyboardType,
  maxLength,
  onChangeText,
}) => {
  return (
    <TextInput
      placeholder={placeholderText}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      maxLength={maxLength}
      onChangeText={onChangeText}
      placeholderTextColor={placeholderTextColor}
      style={[style]}
    />
  );
};

export default InputTwo;

const styles = StyleSheet.create({
  input: {
    // backgroundColor: COLORS.transparentWhite1,
    borderColor: COLORS.white,
    // borderWidth: 2,
    // borderBottomLeftRadius: 5,
    width: 280,
    // height: 50,
    // borderColor: 'gray',
    // borderWidth: 1,
    borderBottomWidth: 1,
    paddingHorizontal: SIZES.width * 0.028,
    color: COLORS.white,
    alignSelf: 'center',
    // marginTop: 15,
    fontFamily: FONTS.LexBold,
    fontSize: 16,
  },
  placeholder: {
    color: COLORS.white,
  },
  text: {
    color: COLORS.white,
    alignSelf: 'center',
    marginTop: 15,
    fontFamily: FONTS.LexBold,
    fontSize: 20,
  },
});
