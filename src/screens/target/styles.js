import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export default StyleSheet.create({
  scroll: {
    flex: 1,
    // backgroundColor: COLORS.white,
    backgroundColor: COLORS.lightGray10,
  },
  safeArea: {
    flex: 1,
    paddingVertical: -26,
  },
  // headerContainer: {
  //   width: SIZES.width * 0.789, //309
  //   alignSelf: 'center',
  //   // backgroundColor: 'yellow',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'center', // Center horizontally
  //   marginBottom: SIZES.height * 0.05, //40,
  //   // paddingVertical: 10, // Optional: Add padding if needed for vertical centering
  // },
  // headerText: {
  //   // backgroundColor: 'red',
  //   fontFamily: FONTS.LexMedium,
  //   fontSize: SIZES.width * 0.051, //20

  //   color: COLORS.black,
  //   textAlign: 'center', // Center the text inside the Text component
  // },
});
