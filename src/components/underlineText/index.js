import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SIZES} from '../../constants';

const UnderlinedText = ({
  text,
  styletext,
  underlineWidth,
  underlineHeight,
  underlineColor,
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styletext]}>{text}</Text>
      <View
        style={[
          styles.underline,
          {
            width: underlineWidth,
            height: underlineHeight,
            backgroundColor: underlineColor,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
  },
  text: {
    fontSize: SIZES.width * 0.041,
  },
  underline: {
    marginTop: 2, // Adjust the space between text and underline
  },
});

export default UnderlinedText;
