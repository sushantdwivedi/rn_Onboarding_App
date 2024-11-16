import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants';

const OnboardingStatus = ({
  children,
  styleText,
  source,
  belowText,
  markIconSource,
  isSelected,
  onSelect,
  customStyles = {},
}) => {
  // const [isPressed, setIsPressed] = useState(false);

  // const handlePress = () => {
  //   setIsPressed(!isPressed);
  // };

  return (
    <View style={[customStyles.container]}>
      <TouchableOpacity
        onPress={onSelect}
        style={[
          {backgroundColor: isSelected ? COLORS.orange3 : COLORS.white},
          // {opacity: isSelected ? 0.9 : 1},
          {elevation: isSelected ? 3 : 3},

          customStyles.touchable,
        ]}>
        <View
          style={[
            // {opacity: isPressed ? 0.24 : 1},
            customStyles.content,
          ]}>
          <Image source={source} style={[customStyles.image]} />
          <Text style={[styleText, customStyles.text]}>{children}</Text>
          {isSelected && (
            <Image source={markIconSource} style={[customStyles.markIcon]} />
          )}
        </View>
      </TouchableOpacity>
      <Text style={[customStyles.belowText]}>{belowText}</Text>
    </View>
  );
};

export default OnboardingStatus;
