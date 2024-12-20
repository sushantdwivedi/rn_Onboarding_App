import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

const SegmentedControl = ({options, selectedOption, onOptionPress}) => {
  const internalPadding = 20;
  const segmentedControlWidth = SIZES.width - 40;

  const itemWidth = (segmentedControlWidth - internalPadding) / options.length;

  const rStyle = useAnimatedStyle(() => {
    return {
      left: withTiming(
        itemWidth * options.indexOf(selectedOption) + internalPadding / 2,
      ),
    };
  }, [selectedOption, options, itemWidth]);
  return (
    <View
      style={[
        styles.container,
        {
          width: segmentedControlWidth,
          borderRadius: 20,
          paddingLeft: internalPadding / 2,
        },
      ]}>
      <Animated.View
        style={[
          {
            width: itemWidth,
          },
          rStyle,
          styles.activeBox,
        ]}
      />
      {options.map(option => {
        return (
          <TouchableOpacity
            onPress={() => {
              onOptionPress?.(option);
            }}
            key={option}
            style={[
              {
                width: itemWidth,
              },
              styles.labelContainer,
            ]}>
            <Text style={styles.label}>{option}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default SegmentedControl;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 55,
    backgroundColor: COLORS.baseGray05,
  },
  activeBox: {
    position: 'absolute',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    elevation: 3,
    height: '80%',
    top: '10%',
    backgroundColor: '#fff',
  },
  labelContainer: {justifyContent: 'center', alignItems: 'center'},
  label: {
    fontFamily: FONTS.LexMedium,
    fontSize: 16,
  },
});
