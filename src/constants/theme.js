import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // Primary
  primary: '#FF4B3C',
  secondPrimary: '#FE724C',
  secondary: '#FA4A0C',
  // primary: '#FA4A0C',

  // secondary
  textGray: '#334669',

  // light
  light: '#CDCDCD',
  red: 'red',

  //white
  white: '#FFFFFF',

  // black
  black: '#000000',
  black1: 'rgba(100, 100, 100, 1)',
  black25: 'rgba(0, 0, 0, 0.25)',

  // blue
  blue: '#1080E9',

  // grey
  gray: '#616161',
  gray5: '#9796A1',
  gray1: 'rgba(101, 98, 98, 1)',
  gray10: 'rgba(89, 84, 84, 1)',
  // gray10: "#E5E5E5",
  gray20: '#CCCCCC',
  gray30: '#A1A1A1',
  gray40: '#999999',
  gray50: '#7F7F7F',
  gray60: '#666666',
  gray70: '#4C4C4C',
  gray80: '#333333',
  gray85: '#242526',
  gray90: '#191919',

  // lightGray
  lightGray: '#C1C1C1',
  lightGray1: '#DDDDDD',
  // lightGray10: 'rgba(242, 242, 242, 1)',
  lightGray5: 'rgba(242, 242, 242, 1)',

  lightGray10: '#fff',
  lightGray31: 'rgba(196, 196, 196, 0.31)',

  // yellow
  yellow: '#FFC107',

  // orange
  orange: '#FF3D00',

  // ButtonColor
  orange2: '#FF7954',
  orange3: '#FFD2CE',

  // customs
  baseGray05: '#E5E2DC',
  baseGray80: '#30302E',
  background: '#F1EEE8',

  // footer text color
  blue2: '#334669',

  // grey1
  grey3: '#F5F5F5',
  grey2: '#8B8B8B',
  grey4: '#B9B9B9',
  grey99: '#999999',

  // green
  green: '#00FF47',
  green10: 'rgba(30, 125, 40, 1)',
  green1: 'rgba(71, 183, 43, 1)',

  transparent: 'transparent',
  transparentWhite1: 'rgba(255, 255, 255, 0.1)',
  transparentWhite2: 'rgba(255, 255, 255, 0.2)',
  transparentWhite3: 'rgba(255, 255, 255, 0.3)',
  transparentWhite4: 'rgba(255, 255, 255, 0.4)',
  transparentWhite5: 'rgba(255, 255, 255, 0.5)',
  transparentBlack1: 'rgba(0, 0, 0, 0.1)',
  transparentBlack2: 'rgba(0, 0, 0, 0.2)',
  transparentBlack3: 'rgba(0, 0, 0, 0.3)',
  transparentBlack4: 'rgba(0, 0, 0, 0.4)',
  transparentBlack5: 'rgba(0, 0, 0, 0.5)',
  transparentBlack6: 'rgba(0, 0, 0, 0.6)',
  transparentBlack7: 'rgba(0, 0, 0, 0.7)',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  padding1: 15,
  margin: 20,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  //Font family
  black: 'Poppins-Black',
  bold: 'Poppins-Bold',
  semiBold: 'Poppins-SemiBold',
  medium: 'Poppins-Medium',
  regular: 'Poppins-Regular',
  light: 'Poppins-Light',
  thin: 'Poppins-Thin',

  //LexendDeca Font
  LexBlack: 'LexendDeca-Black',
  LexBold: 'LexendDeca-Bold',
  LexExtraBold: 'LexendDeca-ExtraBold',
  LexExtraLight: 'LexendDeca-ExtraLight',
  LexLight: 'LexendDeca-Light',
  LexMedium: 'LexendDeca-Medium',
  LexRegular: 'LexendDeca-Regular',
  LexSemiBold: 'LexendDeca-SemiBold',
  LexThin: 'LexendDeca-Thin',

  largeTitle: {fontFamily: 'Poppins-Black', fontSize: SIZES.largeTitle},
  h1: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h4, lineHeight: 22},
  h5: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h5, lineHeight: 22},
  body1: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body5, lineHeight: 22},
};

export const darkTheme = {
  backgroundColor: COLORS.darkBackground,
};

export const lightTheme = {
  backgroundColor: COLORS.white,
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
