import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

// import {DIMENSION} from '../constants/general.constants';
// import {COLORS} from '../constants/color';

import {COLORS, FONTS, SIZES, icons} from '../../constants';
import Ripple from '../Ripple/index';

const SimpleButton = props => {
  const {
    children,
    disabled,
    onPress,
    style,
    containerStyle,
    isLoading,
    loaderColor,
  } = props;

  const handleOnPress = function () {
    if (disabled || isLoading) return;
    if (onPress) onPress();
  };
  return (
    // <Ripple style={{flex: 1}}>
    <TouchableOpacity
      disabled={isLoading || disabled}
      activeOpacity={0.5}
      onPress={handleOnPress}
      style={[
        styles.container,
        containerStyle,
        (isLoading || disabled) && styles.disableStyle,
      ]}>
      {/* {!isLoading ? (
        <>
          <Text style={[styles.text, style]}>{children}</Text>
        </>
      ) : (
        <ActivityIndicator color={loaderColor ? loaderColor : '#fff'} />
      )} */}
      {isLoading && (
        <ActivityIndicator
          size="small"
          color={loaderColor || '#fff'}
          style={styles.loader}
        />
      )}
      <Text style={[styles.text, style]}>{children}</Text>
    </TouchableOpacity>
    // </Ripple>
  );
};

export default SimpleButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
    // paddingTop: 2,
    color: COLORS.white,
    fontSize: SIZES.margin,
  },
  disableStyle: {
    opacity: 0.7,
  },
  loader: {
    marginRight: 10, // Space between loader and text
  },
});

// import React from 'react';
// import {
//   ActivityIndicator,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
// } from 'react-native';
// import {COLORS, FONTS, SIZES} from '../../constants';

// const SimpleButton = ({
//   children,
//   disabled,
//   onPress,
//   style,
//   containerStyle,
//   isLoading,
//   loaderColor,
// }) => {
//   const handleOnPress = () => {
//     if (disabled || isLoading) return;
//     if (onPress) onPress();
//   };

//   return (
//     <TouchableOpacity
//       disabled={isLoading || disabled}
//       activeOpacity={0.7}
//       onPress={handleOnPress}
//       style={[
//         styles.container,
//         containerStyle,
//         (isLoading || disabled) && styles.disableStyle,
//       ]}>
//       {isLoading ? (
//         <ActivityIndicator
//           size="small"
//           color={loaderColor || '#fff'}
//           style={styles.loader}
//         />
//       ) : (
//         <Text style={[styles.text, style]}>{children}</Text>
//       )}
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: COLORS.primary,
//     paddingVertical: SIZES.padding,
//     paddingHorizontal: SIZES.padding * 2,
//     borderRadius: SIZES.radius,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: COLORS.white,
//     fontFamily: FONTS.medium,
//     fontSize: SIZES.body3,
//   },
//   disableStyle: {
//     // backgroundColor: COLORS.gray,
//     opacity: 0.6,
//   },
//   loader: {
//     padding: SIZES.padding,
//   },
// });

// export default SimpleButton;
