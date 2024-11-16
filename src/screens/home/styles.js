import {StyleSheet} from 'react-native';

import {COLORS, FONTS, SIZES} from '../../constants';

export default StyleSheet.create({
  scroll: {
    flex: 1,
    // height: SIZES.height * 2,
    backgroundColor: COLORS.lightGray10,
  },
  safeArea: {
    flex: 1,
    paddingVertical: -SIZES.height * 0.025, //20

    paddingHorizontal: SIZES.width * 0.051, //20
  },
  headerContainer: {
    // marginLeft: SIZES.width * 0.005, //15
    flexDirection: 'row',
    gap: SIZES.width * 0.028, //10

    alignItems: 'flex-start',
    marginBottom: SIZES.height * 0.03, //24
  },
  image: {
    width: SIZES.width * 0.103, //40

    height: SIZES.width * 0.103, //40

    resizeMode: 'contain',
  },
  title: {
    // alignSelf: 'center',
    // justifyContent: 'center',
    fontFamily: FONTS.LexBold,
    fontSize: SIZES.width * 0.061, //24

    // color: COLORS.black,
    content: {
  },
    // marginLeft: SIZES.width * 0.025, //15
    // marginRight: SIZES.width * 0.025, //15
    // width: SIZES.width * 0.87, //309
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: SIZES.width * 0.015, //15

    // gap: SIZES.width * 0.33,
    // backgroundColor: 'red',
  },
  greeting: {
    fontFamily: FONTS.LexRegular,
    fontSize: SIZES.width * 0.051, //20

    color: COLORS.black,
  },
  plusIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  plusIcon: {
    width: SIZES.width * 0.032,
    height: SIZES.width * 0.032,
    resizeMode: 'cover',
    alignSelf: 'center',
    // backgroundColor: COLORS.primary,
  },
  button: {
    // alignSelf: 'center',
    // alignItems: 'center',

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    width: SIZES.width * 0.38, //117
    height: SIZES.height * 0.04, // 30
    paddingHorizontal: SIZES.width * 0.042, //16

    borderRadius: SIZES.width * 0.045, //16

    // justifyContent: 'center',
  },
  buttonText: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.width * 0.03, //11
    marginTop: SIZES.width * 0.006,
    // alignSelf: 'center',
    color: COLORS.white,
    textAlign: 'center',
  },
  collectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // alignSelf: 'center',
    backgroundColor: COLORS.white,
    width: SIZES.width * 0.9, //309
    // width: SIZES.width * 0.789, //309

    height: SIZES.height * 0.175, //141
    // marginLeft: SIZES.width * 0.04, //15

    // gap: /,
    alignSelf: 'center',
    // padding: 16,
    borderRadius: SIZES.width * 0.055, //25

    shadowColor: COLORS.gray60,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    marginVertical: SIZES.height * 0.025, //20
  },
  iconContainer: {
    // marginRight: 16,
    height: SIZES.height * 0.175, //141
    backgroundColor: COLORS.primary,
    borderTopRightRadius: SIZES.width * 0.167, //65

    borderBottomRightRadius: SIZES.width * 0.167, //65

    borderTopLeftRadius: SIZES.width * 0.055, //22

    borderBottomLeftRadius: SIZES.width * 0.055, //22

    paddingHorizontal: 10,
    // paddingVertical: 10,
  },
  icon: {
    width: SIZES.width * 0.3,
    height: SIZES.width * 0.3,
    resizeMode: 'cover',
  },
  collectionTextContainer: {
    flex: 1,
    alignItems: 'center',
  },
  collectionTitle: {
    fontFamily: FONTS.LexBold,
    fontSize: SIZES.width * 0.042, //16

    color: COLORS.black,
    marginBottom: 4,
  },
  collectionAmount: {
    fontFamily: FONTS.LexRegular,
    fontSize: SIZES.width * 0.046, //18

    color: COLORS.primary,
  },
  boxMainContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: SIZES.width * 0.94,
    // gap: 65,
    alignSelf: 'center',
    justifyContent: 'space-between',
    padding: 10,
    // marginLeft: SIZES.width * 0.06, //15
    // marginTop: SIZES.width * 0.05,
  },
  boxMain: {
    height: SIZES.width * 0.4, //135
    width: SIZES.width * 0.4, //135
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 5,
    backgroundColor: COLORS.primary,
    borderRadius: 18,

    marginVertical: 16,
  },
  boxContainer: {
    height: SIZES.width * 0.342, //117
    width: SIZES.width * 0.342, //117

    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

    padding: 10,
    backgroundColor: COLORS.white,
    // backgroundColor: "#c0c0c0",
    borderRadius: 18,
    shadowColor: COLORS.gray60,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    marginVertical: 16,
  },
  boxTitle: {
    textAlign: 'center',
    fontFamily: FONTS.LexSemiBold,
    fontSize: SIZES.width * 0.077, //30

    color: COLORS.primary,
    marginBottom: 8,
  },
  boxSubtitle: {
    textAlign: 'center',
    fontFamily: FONTS.LexRegular,
    fontSize: SIZES.width * 0.038, //14

    color: COLORS.primary,
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignSelf: 'center',
  },
  skeletonContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skeletonBox: {
    width: '100%',
    height: SIZES.height * 0.1, //80

    backgroundColor: COLORS.lightGray1,
    borderRadius: 8,
    marginBottom: 16,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  errorText: {
    color: COLORS.red,
    fontSize: SIZES.h3,
    marginBottom: 16,
    textAlign: 'center',
  },
  retryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  retryButtonText: {
    color: COLORS.white,
    fontSize: SIZES.h4,
  },
});
