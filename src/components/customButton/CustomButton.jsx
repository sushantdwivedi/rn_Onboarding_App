import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS, FONTS, SIZES, icons} from '../../constants';

const CustomButton = props => {
  const {
    title,
    children,
    disabled,
    onPress,
    style,
    containerStyle,
    isLoading,
    loaderColor,
  } = props;
  const handleOnPress = function () {
    if (disabled || isLoading || !onPress) return;
    onPress();
  };
  return (
    // <View style={[styles.container, style]}>
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.5}
      onPress={handleOnPress}
      style={[
        styles.container,
        containerStyle,
        disabled && styles.disableStyle,
      ]}>
      {!isLoading ? (
        <>
          <LinearGradient
            colors={['#FF4B3C', '#F09722']}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            style={styles.button}>
            <Text style={[styles.text, style]}>{children}</Text>
          </LinearGradient>
        </>
      ) : (
        <ActivityIndicator color={loaderColor ? loaderColor : '#fff'} />
      )}
    </TouchableOpacity>

    // </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: COLORS.white,

    flexDirection: 'row',
  },
  disableStyle: {
    opacity: 0.5,
  },
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: COLORS.white,
  // },
  button: {
    // backgroundColor: '#FF416C',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.height * 0.065,
    width: SIZES.width * 0.8,
    // marginTop: -SIZES.width * 0.1,
    backgroundColor: COLORS.white,
    elevation: 15,
  },
  text: {
    color: COLORS.white,
    fontFamily: FONTS.LexBold,
    fontSize: SIZES.margin,
  },
});

//////?????       BUTTON BY  CHAT GPt
// import React from 'react';
// import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import { COLORS, FONTS, SIZES } from '../../../constants';

// const CustomButton = props => {
//   const { title, onPress, containerStyle, isLoading, loaderColor } = props;
//   const handleOnPress = function () {
//     if (isLoading || !onPress) return;
//     onPress();
//   };

//   return (
//     <TouchableOpacity
//       activeOpacity={0.5}
//       onPress={handleOnPress}
//       style={[
//         styles.touchable,
//         containerStyle,
//       ]}
//     >
//       {!isLoading ? (
//         <View style={styles.elevatedContainer}>
//           <LinearGradient
//             colors={['#FF4B3C', '#F09722']}
//             start={{ x: 0, y: 0.5 }}
//             end={{ x: 1, y: 0.5 }}
//             style={styles.gradient}
//           >
//             <Text style={styles.text}>{title}</Text>
//           </LinearGradient>
//         </View>
//       ) : (
//         <ActivityIndicator color={loaderColor ? loaderColor : '#fff'} />
//       )}
//     </TouchableOpacity>
//   );
// };

// export default CustomButton;

// const styles = StyleSheet.create({
//   touchable: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//   },
//   elevatedContainer: {
//     elevation: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 3,
//     borderRadius: 20,
//   },
//   gradient: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 20,
//     height: SIZES.height * 0.065,
//     width: SIZES.width * 0.8,
//   },
//   text: {
//     color: COLORS.white,
//     fontFamily: FONTS.LexBold,
//     fontSize: SIZES.margin,
//   },
// });

/////// BUTTON BY CHAT GPT
// import React from 'react';
// import {
//   TouchableOpacity,
//   Text,
//   StyleSheet,
//   View,
//   ActivityIndicator,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import {COLORS, FONTS, SIZES} from '../../../constants';

// const CustomButton = props => {
//   const {children, disabled, onPress, containerStyle, isLoading, loaderColor} =
//     props;

//   const handleOnPress = () => {
//     if (disabled || isLoading || !onPress) return;
//     onPress();
//   };

//   return (
//     <TouchableOpacity
//       disabled={disabled}
//       activeOpacity={0.5}
//       onPress={handleOnPress}
//       style={[
//         styles.touchable,
//         containerStyle,
//         disabled && styles.disableStyle,
//       ]}>
//       {!isLoading ? (
//         <View style={[styles.elevatedContainer]}>
//           <LinearGradient
//             colors={['#FF4B3C', '#F09722']}
//             start={{x: 0, y: 0.5}}
//             end={{x: 1, y: 0.5}}
//             style={styles.gradient}>
//             <Text style={styles.text}>{children}</Text>
//           </LinearGradient>
//         </View>
//       ) : (
//         <ActivityIndicator color={loaderColor ? loaderColor : '#fff'} />
//       )}
//     </TouchableOpacity>
//   );
// };

// export default CustomButton;

// const styles = StyleSheet.create({
//   touchable: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'row',
//   },
//   disableStyle: {
//     opacity: 0.5,
//   },
//   elevatedContainer: {
//     elevation: 15,
//     shadowColor: '#000',
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.3,
//     shadowRadius: 3,
//     borderRadius: 20,
//   },
//   gradient: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: SIZES.height * 0.065,
//     width: SIZES.width * 0.8,
//   },
//   text: {
//     color: COLORS.white,
//     fontFamily: FONTS.LexBold,
//     fontSize: SIZES.margin,
//   },
// });

//// ORIGNAL  BUTTON
// import React from 'react';
// import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import {COLORS, FONTS, SIZES, icons} from '../../../constants';

// const CustomButton = ({onPress, title, style}) => {
//   return (
//     <View style={[styles.container, style]}>
//       <TouchableOpacity
//         style={{backgroundColor: 'white'}}
//         activeOpacity={0.1}
//         onPress={onPress}>
//         <LinearGradient
//           colors={['#FF4B3C', '#F09722']}
//           start={{x: 0, y: 0.5}}
//           end={{x: 1, y: 0.5}}
//           style={styles.button}>
//           <Text style={styles.buttonText}>{title}</Text>
//         </LinearGradient>
//       </TouchableOpacity>
//     </View>

//   );
// };

// export default CustomButton;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: COLORS.white,
//   },
//   button: {
//     // backgroundColor: '#FF416C',
//     borderRadius: 20, // Rounded corners
//     paddingVertical: 10,
//     paddingHorizontal: 25,
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: SIZES.height * 0.065,
//     width: SIZES.width * 0.8,
//     // marginTop: -SIZES.width * 0.1,
//     backgroundColor: COLORS.white,
//     elevation: 15,
//   },
//   buttonText: {
//     color: COLORS.white,
//     fontFamily: FONTS.LexBold,
//     fontSize: SIZES.margin,
//   },
// });
