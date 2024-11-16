import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const Input = ({
  text,
  value,
  placeholder,
  keyboardType,
  secureTextEntry,
  maxLength,
  onChangeText,
  onPress,
  showSoftInputOnFocus,
  numberOfLines,
  multiline,
  style,
  source,
  onContentSizeChange,
  selectTextOnFocus,
  inputGroupStyle,
  editable,
  inputImage,
  inputImageStyle,
  // inputPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, inputGroupStyle]}
      onPress={onPress}
      activeOpacity={0.7}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>{text}</Text>
        <View style={styles.inputComp}>
          <TextInput
            editable={editable}
            multiline={multiline}
            textAlignVertical="top"
            // onPress={inputPress}
            showSoftInputOnFocus={showSoftInputOnFocus}
            numberOfLines={numberOfLines}
            style={[styles.input, style]}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            maxLength={maxLength}
            placeholder={placeholder}
            placeholderTextColor={COLORS.transparentBlack5}
            value={value}
            onChangeText={onChangeText}
            onContentSizeChange={onContentSizeChange}
            selectTextOnFocus={selectTextOnFocus}
          />
          {inputImage && (
            <Image
              source={inputImage}
              style={[styles.image, inputImageStyle]}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: SIZES.width * 0.88,
    alignSelf: 'center',
    backgroundColor: COLORS.lightGray10,
    borderRadius: SIZES.radius,
  },
  inputGroup: {
    // marginBottom: 20,
  },
  label: {
    color: '#000',
    fontFamily: FONTS.LexLight,
    fontSize: SIZES.width * 0.036,
    marginBottom: 8,
  },
  input: {
    flex: 1,
    fontFamily: FONTS.LexLight,
    paddingVertical: 0,
    fontSize: SIZES.width * 0.04,
    color: '#000',
  },
  image: {
    width: SIZES.width * 0.051,
    height: SIZES.width * 0.051,
    resizeMode: 'cover',

    marginLeft: SIZES.height * 0.0125, //10
  },
  inputComp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
  },
});

export default Input;

// import React from 'react';
// import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
// import {COLORS, FONTS, SIZES} from '../../constants';

// const Input = ({
//   text,
//   value,
//   placeholder,
//   keyboardType,
//   secureTextEntry,
//   maxLength,
//   onChangeText,
//   onPress,
//   showSoftInputOnFocus,
//   numberOfLines,
//   multiline,
//   style,
//   source,
//   onContentSizeChange,
//   selectTextOnFocus,
//   inputGroupStyle,
//   editable,
//   inputImage,
//   inputImageStyle,
// }) => {
//   return (
//     <View style={styles.container}>
//       <View style={[styles.inputGroup, inputGroupStyle]}>
//         <Text style={styles.label}>{text}</Text>
//         {/* <View style={styles.inputComp}> */}
//         <View
//           style={{
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             borderBottomColor: '#000',
//             borderBottomWidth: 0.5,
//             // paddingBottom: ,
//           }}>
//           <TextInput
//             // onFocus={onFocus}
//             // value={value}
//             editable={editable}
//             multiline={multiline}
//             textAlignVertical="top"
//             showSoftInputOnFocus={showSoftInputOnFocus}
//             numberOfLines={numberOfLines}
//             onPress={onPress}
//             style={[styles.input, style]}
//             keyboardType={keyboardType}
//             secureTextEntry={secureTextEntry}
//             maxLength={maxLength}
//             placeholder={placeholder}
//             placeholderTextColor={COLORS.transparentBlack5}
//             value={value}
//             onChangeText={onChangeText}
//             onContentSizeChange={onContentSizeChange}
//             selectTextOnFocus={selectTextOnFocus}>
//             {/* <Image source={source} style={styles.image} /> */}
//           </TextInput>
//           <Image source={inputImage} style={inputImageStyle} />
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     width: SIZES.width * 0.88,
//     alignSelf: 'center',
//     backgroundColor: COLORS.lightGray10,
//   },
//   inputGroup: {
//     // marginBottom: 20,
//   },
//   label: {
//     color: '#000',
//     fontFamily: FONTS.LexLight,
//     fontSize: SIZES.width * 0.036,
//     marginBottom: 8,
//   },
//   input: {
//     width: SIZES.width * 0.78,

//     fontFamily: FONTS.LexLight,
//     paddingVertical: 0,
//     // height: SIZES.height * 0.047,
//     // backgroundColor: 'red',
//     fontSize: SIZES.width * 0.04,
//     color: '#000',
//   },
//   image: {
//     width: SIZES.width * 0.051,
//     height: SIZES.width * 0.051,
//     alignSelf: 'center',
//     resizeMode: 'cover',
//     margin: SIZES.height * 0.0125, //10
//   },
//   inputComp: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
// });

// export default Input;
