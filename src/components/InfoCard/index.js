import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const InfoCard = ({location, date, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require('../../assets/image/plusIcon.png')}
          style={styles.icon}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.locationText}>{location}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZES.width * 0.95, //309
    height: SIZES.height * 0.07,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: SIZES.height * 0.01, //5

    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingHorizontal: SIZES.width * 0.028, //10
    shadowColor: COLORS.gray60,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 7,
    justifyContent: 'center',
    // opacity: 0.6,
  },
  iconContainer: {
    width: SIZES.width * 0.065,
    height: SIZES.width * 0.065,
    borderRadius: 4,
    marginRight: SIZES.width * 0.035,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // elevation: 2,
  },
  icon: {
    width: SIZES.width * 0.035,
    height: SIZES.width * 0.035,
    resizeMode: 'cover',
    alignSelf: 'center',
    // backgroundColor: COLORS.primary,
  },
  textContainer: {
    flex: 1,
  },
  dateContainer: {
    marginLeft: 'auto',
  },
  locationText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * 0.033,
    color: '#000',
  },
  dateText: {
    fontFamily: FONTS.medium,
    marginRight: SIZES.height * 0.0062, //5

    fontSize: SIZES.width * 0.03,
    color: COLORS.green1,
  },
});

export default InfoCard;
