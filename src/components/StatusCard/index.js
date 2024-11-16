import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const StatusCard = ({title, status, date, onPress, statusStyle}) => {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.6} onPress={onPress}>
      <View style={styles.leftSection}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightSection}>
        <Text style={[styles.status, statusStyle]}>{status}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: SIZES.width * 0.92, //309
    height: SIZES.height * 0.07,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.width * 0.042, //16
    paddingVertical: SIZES.height * 0.0187, //16
    borderRadius: 8,
    shadowColor: COLORS.gray60,
    shadowOffset: {width: 6, height: 7},
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 6,
    marginBottom: SIZES.height * 0.0125, //10    ,
  },
  leftSection: {
    flex: 2,
  },
  rightSection: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: SIZES.width * 0.042, //17

    fontFamily: FONTS.LexSemiBold,
    color: COLORS.black,
  },
  status: {
    fontSize: SIZES.width * 0.036, //13.5
    // backgroundColor: 'blue',

    fontFamily: FONTS.LexMedium,
    color: COLORS.primary,
  },
  date: {
    // marginRight: 5,
    // textAlign: 'center',
    fontSize: SIZES.width * 0.031, //12
    // backgroundColor: 'red',
    fontFamily: FONTS.LexLight,
    color: COLORS.black,
  },
});

export default StatusCard;
