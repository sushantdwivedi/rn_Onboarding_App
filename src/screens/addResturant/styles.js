import {StyleSheet} from 'react-native';

import {COLORS, FONTS, SIZES} from '../../constants';

export default StyleSheet.create({
  selectedImage: {
    // width: 200,
    // height: 200,
    resizeMode: 'cover',
  },
  overlayImage: {
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    // left: 0,
    // right: 0,
    // bottom: 0,
    margin: 'auto',
    backgroundColor: 'transparent',
  },
  imagePicker: {
    alignItems: 'center',
  },
  // selectedImage: {
  //   width: 200,
  //   height: 200,
  //   resizeMode: 'contain',
  //   marginTop: 10,
  // },

  imagePick: {
    marginTop: SIZES.height * 0.03,
    backgroundColor: COLORS.lightGray1,
    // position: 'absolute',
    borderRadius: SIZES.width * 0.016,
    alignSelf: 'center',
    width: SIZES.width * 0.55, //217
    height: SIZES.height * 0.14, // 122
  },
  imagePickImage: {
    width: SIZES.width * 0.065,
    height: SIZES.width * 0.065,
    bottom: -SIZES.height * 0.019,
    right: -SIZES.width * 0.035,
  },
  styleCamera: {
    bottom: -SIZES.height * 0.018,
    right: -SIZES.width * 0.037,
  },
  contain: {
    flexDirection: 'row',
    width: SIZES.width * 0.88,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: SIZES.height * 0.03,
    // marginBottom: SIZES.height * 0.016,
  },
  sheetContent: {
    // position: 'absolute',
    // top: 0,
    display: 'flex',
    alignSelf: 'center',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    gap: SIZES.width * 0.3,
  },
  bottomSheetImage: {
    // backgroundColor: 'red',
    width: SIZES.width * 0.16,
    height: SIZES.width * 0.16,
    resizeMode: 'cover',
  },
  bottomSheetText: {
    marginTop: SIZES.height * 0.013,
    color: COLORS.gray80,
    fontFamily: FONTS.LexMedium,
    alignSelf: 'center',

    fontSize: SIZES.width * 0.039,
    // width: SIZES.width * 0.58,
  },
  button: {
    marginVertical: SIZES.height * 0.032,
    alignSelf: 'center',
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    width: SIZES.width * 0.9, //309
    justifyContent: 'center',
    height: SIZES.height * 0.06, //40
  },
  textButtom: {
    borderColor: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.042, //16

    textAlign: 'center',
  },
  textUnderline: {
    fontFamily: FONTS.LexLight,
    fontSize: SIZES.width * 0.04,
    // width: SIZES.width,
    // backgroundColor: 'red',
    color: COLORS.black,
  },
  onboardingStatus: {
    container: {
      // width: SIZES.width * 0.9,

      alignItems: 'center',
      // alignSelf: 'center',
      // backgroundColor: COLORS.white,
    },
    touchable: {
      alignSelf: 'center',
      // position: 'absolute',
      // flexGrow: 1,
      borderRadius: SIZES.height * 0.009,
      // width: SIZES.width * 0.176,
      height: SIZES.height * 0.086,
      elevation: 3,
      // backgroundColor: COLORS.white,
      // backgroundColor: COLORS.primary,
    },
    button: {},
    content: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: SIZES.width * 0.03,
      paddingVertical: SIZES.height * 0.006,
      width: SIZES.width * 0.176,
      height: SIZES.height * 0.086,
    },
    image: {
      width: SIZES.width * 0.12,
      height: SIZES.width * 0.12,
      alignSelf: 'center',
      resizeMode: 'cover',
    },
    text: {
      color: COLORS.orange2,
      fontFamily: FONTS.LexRegular,
      fontSize: SIZES.width * 0.0488,
      textAlign: 'center',
    },
    markIcon: {
      width: SIZES.width * 0.07,
      height: SIZES.width * 0.07,
      position: 'absolute',
      top: -SIZES.height * 0.015,
      right: -SIZES.width * 0.02,
      resizeMode: 'cover',
    },
    belowText: {
      marginTop: SIZES.height * 0.01,
      color: COLORS.black,
      width: SIZES.width * 0.19,
      // alignItems: 'center',
      fontFamily: FONTS.LexRegular,
      fontSize: SIZES.width * 0.031,
      textAlign: 'center',
    },
  },
  customStylesSerices: {
    containcontainer: {
      // width: SIZES.width * 0.9,

      alignItems: 'center',
      // alignSelf: 'center',
      // backgroundColor: COLORS.white,
    },
    touchable: {
      width: SIZES.width * 0.5,
      alignSelf: 'flex-start',
      backgroundColor: COLORS.lightGray1,
      borderRadius: SIZES.height * 0.009,
      gap: SIZES.width * 0.015,
      paddingHorizontal: SIZES.width * 0.03,
      paddingVertical: SIZES.height * 0.006,
      flexShrink: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    button: {},
    content: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: SIZES.width * 0.03,
      paddingVertical: SIZES.height * 0.006,
      width: SIZES.width * 0.176,
      height: SIZES.height * 0.086,
    },
    image: {
      width: SIZES.width * 0.12,
      height: SIZES.width * 0.12,
      alignSelf: 'center',
      resizeMode: 'cover',
    },
    text: {
      color: COLORS.orange2,
      fontFamily: FONTS.LexRegular,
      fontSize: SIZES.width * 0.0488,
      textAlign: 'center',
    },
    markIcon: {
      width: SIZES.width * 0.07,
      height: SIZES.width * 0.07,
      position: 'absolute',
      top: -SIZES.height * 0.015,
      right: -SIZES.width * 0.02,
      resizeMode: 'cover',
    },
    belowText: {
      marginTop: SIZES.height * 0.01,
      color: COLORS.black,
      width: SIZES.width * 0.19,
      // alignItems: 'center',
      fontFamily: FONTS.LexRegular,
      fontSize: SIZES.width * 0.031,
      textAlign: 'center',
    },
  },
  addAddress: {
    container: {
      alignItems: 'center',
    },
    touchable: {
      alignSelf: 'center',
      width: SIZES.width * 0.755, //296
      height: SIZES.height * 0.05, //40
    },
    button: {
      borderRadius: SIZES.height * 0.009,
      backgroundColor: COLORS.blue,
      width: SIZES.width * 0.755, //296
      height: SIZES.height * 0.05, //40
      elevation: 3,
      justifyContent: 'center', // Added to center the content vertically
      alignItems: 'center', // Added to center the content horizontally
    },
    content: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: SIZES.width * 0.755, // Match button width to center content properly
      height: SIZES.height * 0.05, // Match button height to center content properly
    },
    image: {
      width: SIZES.width * 0.051, //20
      height: SIZES.width * 0.051, //20
      alignSelf: 'center',
      resizeMode: 'cover',
    },
    text: {
      color: COLORS.black,
      fontFamily: FONTS.LexRegular,
      fontSize: SIZES.width * 0.031, //12
      marginLeft: 10, // Added margin to separate text from image
    },
  },
  profileContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',

    // backgroundColor: 'red',
    // width: SIZES.width, //177
    // height: SIZES.height * 0.14, //177
  },
  profileImg: {
    alignSelf: 'center',
    width: SIZES.width * 0.65,
    height: SIZES.width * 0.325,
    borderRadius: SIZES.width * 0.03,
    // borderTopRightRadius: 10,
    // borderTopLeftRadius: 10,
    // backgroundColor: 'red',
  },
  cameraIcon: {
    position: 'absolute',
    right: SIZES.width * 0.028, //10

    bottom: SIZES.width * 0.028, //10

    height: SIZES.height * 0.038, // 30

    width: SIZES.width * 0.077, //30
  },
  errorText: {
    color: COLORS.primary,
    flex: 1,
    justifyContent: 'center',
    width: SIZES.width * 0.88,
    alignSelf: 'center',
    backgroundColor: COLORS.lightGray10,
    marginTop: SIZES.height * 0.005,
    // marginBottom: 20,
  },
  result: {
    width: SIZES.width * 0.9,

    marginTop: SIZES.height * 0.0125, //10

    textAlign: 'center',

    color: COLORS.orange2,
    fontFamily: FONTS.LexRegular,
    fontSize: SIZES.width * 0.031, //12
    alignSelf: 'center',
  },
  image: {
    width: SIZES.width * 0.075,
    height: SIZES.width * 0.075,
    alignSelf: 'center',
    resizeMode: 'cover',
    // margin: 10,
    // padding: 5,
  },
  touchable: {
    alignSelf: 'center',
    marginTop: SIZES.height * 0.02,
    width: SIZES.width * 0.87,
    // height: SIZES.height * 0.05,
    borderRadius: SIZES.height * 0.009,
    flexDirection: 'row',
    elevation: 3,
  },
  text: {
    color: COLORS.black,
    fontFamily: FONTS.LexRegular,
    fontSize: SIZES.width * 0.031,
    width: SIZES.width * 0.75,
    padding: 5,

    marginLeft: SIZES.width * 0.065, //2

    alignSelf: 'center',
  },
  inputComp: {
    flex: 1,
    // justifyContent: 'center',
    width: SIZES.width * 0.88,
    alignSelf: 'center',
    backgroundColor: COLORS.lightGray10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconContainer: {
    position: 'absolute',
    right: SIZES.width * 0.028, //10

    top: '50%', // Center vertically relative to the input field
    transform: [{translateY: -20}], // Adjust for vertical alignment
  },
  inputAndroid: {
    fontFamily: FONTS.LexLight,
    paddingVertical: 0,
    height: SIZES.height * 0.04,
    // backgroundColor: COLORS.orange2,

    fontSize: SIZES.width * 0.045,
    color: '#000',
    //
  },
  // placeholder: {
  //   fontFamily: FONTS.LexRegular,
  //   paddingVertical: 0,
  //   height: SIZES.height * 0.047,
  //   backgroundColor: 'red',
  //   fontSize: SIZES.width * 0.045,
  //   color: 'red',
  //   //
  // },
  selectDropdown: {
    // justifyContent: 'center',
    width: SIZES.width * 0.88,
    // marginBottom: 20,
    alignSelf: 'center',
    backgroundColor: COLORS.lightGray10,
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
    // backgroundColor: 'red',
    margin: 0,
    padding: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    // gap: 2,
  },
  dropdownButtonStyle: {
    height: SIZES.height * 0.05, //50
    // width: SIZES.width * 0.9,
    // backgroundColor: COLORS.orange3,
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // alignSelf: 'center',
    // paddingHorizontal: SIZES.width * 0.03, //12
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    // fontSize: 18,
    fontFamily: FONTS.LexLight,
    fontSize: SIZES.width * 0.04,
    color: COLORS.black,
    padding: 0,
    margin: 0,
  },
  dropdownButtonArrowStyle: {
    fontSize: 24, // Ensure the size is appropriate
    color: '#000', // Ensure the color contrasts with the background
  },
  dropdownMenuStyle: {
    backgroundColor: COLORS.lightGray10,
    borderRadius: 8,
    // backgroundColor: 'red',
    width: SIZES.width * 0.84,
    // marginRight: 22,
  },
  dropdownItemStyle: {
    width: SIZES.width * 0.9,

    flexDirection: 'row',
    paddingHorizontal: SIZES.width * 0.038, //15

    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontFamily: FONTS.LexLight,
    fontSize: SIZES.width * 0.04,
    color: COLORS.black,
  },
  dropdownButtonIconStyle: {
    // fontSize: 28,
    // marginRight: 8,
  },

  // inputField
  inputField: {
    marginBottom: SIZES.height * 0.025,
  },
});
