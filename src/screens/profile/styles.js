import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

export default StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: COLORS.lightGray10,
  },
  safeArea: {
    flex: 1,
    padding: 16,
  },
  headerContainer: {
    width: SIZES.width * 0.789, //309
    alignSelf: 'center',
    // backgroundColor: 'yellow',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center horizontally
    marginBottom: 24,
    // paddingVertical: 10, // Optional: Add padding if needed for vertical centering
  },
  headerText: {
    // backgroundColor: 'red',
    fontFamily: FONTS.LexMedium,
    fontSize: SIZES.width * 0.051, //20

    color: COLORS.black,
    textAlign: 'center', // Center the text inside the Text component
  },
  image: {
    width: SIZES.height * 0.229, // 184
    height: SIZES.height * 0.229, // 184

    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: 16,
  },
  editContain: {
    borderRadius: 8,
    width: SIZES.height * 0.05, // 30

    height: SIZES.height * 0.05, // 30
    backgroundColor: COLORS.lightGray10,
  },
  editIcon: {
    borderRadius: 8,
    width: SIZES.height * 0.04, // 30

    height: SIZES.height * 0.04, // 30
    backgroundColor: COLORS.lightGray10,

    position: 'absolute',
    right: SIZES.width * 0.23, //90

    bottom: SIZES.height * 0.038, // 30
  },
  title: {
    fontFamily: FONTS.LexMedium,
    fontSize: SIZES.width * 0.061, //24

    color: COLORS.black,
    textAlign: 'center',
    marginTop: 8,
  },
  button: {
    marginVertical: SIZES.height * 0.0685, //55

    alignSelf: 'center',
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    width: SIZES.width * 0.9, //309

    height: SIZES.height * 0.06, //40
  },
  textButtom: {
    borderColor: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.042, //16
  },
  label: {
    color: '#000', // Label color
    fontFamily: FONTS.LexLight,
    fontSize: SIZES.width * 0.04,
    // opacity: 0.5,

    marginBottom: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.height * 0.0685, //55
  },
  modalView: {
    // width: SIZES.width * 0.8, //230
    // height: SIZES.height * 0.175,
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: SIZES.width * 0.044, //30

    alignItems: 'center',
    shadowColor: COLORS.gray60,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    color: COLORS.black,
    fontFamily: FONTS.LexLight,
    fontSize: SIZES.width * 0.04, //15

    marginBottom: SIZES.height * 0.025, //20

    textAlign: 'center',
  },
  modalTxt: {
    color: COLORS.black,

    fontFamily: FONTS.LexMedium,
    fontSize: SIZES.width * 0.05, //10
    // marginTop: -15,
    marginBottom: SIZES.height * 0.0187, //16

    textAlign: 'center',
  },
  textStyle: {
    // fontFamily: FONTS.LexLight,
    fontSize: SIZES.width * 0.04, //10

    // color: COLORS.white,
    // fontWeight: 'bold',
    textAlign: 'center',
    // color: '#000',
  },
  closeButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.height * 0.0125, //10

    paddingHorizontal: SIZES.width * 0.08, //30

    borderRadius: 10,
    marginTop: SIZES.height * 0.0125, //10
  },
  buttonContainer: {
    flexDirection: 'row',
    // backgroundColor: 'blue',
    justifyContent: 'center',
    gap: SIZES.width * 0.044, //30
  },
  closeButtonUnderline: {
    // backgroundColor: '#FFF5F5',
    borderWidth: 1,
    borderColor: COLORS.primary,
    paddingHorizontal: SIZES.width * 0.08, //30

    paddingVertical: SIZES.height * 0.0125, //10

    borderRadius: 10,
    marginTop: SIZES.height * 0.0125, //10
  },
});
