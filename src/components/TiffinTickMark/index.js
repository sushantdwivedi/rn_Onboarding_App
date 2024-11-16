import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../constants';

const TiffinTickMark = ({
  children,
  styleText,
  source,
  isSelected,
  onSelect,
}) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={{
        alignSelf: 'flex-start',
        backgroundColor: isSelected ? COLORS.orange3 : COLORS.white, // Change color based on selection
        borderRadius: SIZES.height * 0.009,
        gap: SIZES.width * 0.015,
        paddingHorizontal: SIZES.width * 0.04,
        paddingVertical: SIZES.height * 0.007,
        flexShrink: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        elevation: 3,
      }}>
      <Image
        source={source}
        style={{
          width: SIZES.width * 0.095,
          height: SIZES.width * 0.095,
          resizeMode: 'cover',
        }}
      />
      <Text
        style={[
          {
            color: COLORS.primary,
            fontFamily: FONTS.LexRegular,
            fontSize: SIZES.width * 0.04,
            alignSelf: 'center',
          },
          styleText,
        ]}>
        {children}
      </Text>
      {isSelected && (
        <Image
          source={require('../../assets/image/tickMark.png')}
          style={{
            width: SIZES.width * 0.07,
            height: SIZES.width * 0.07,
            position: 'absolute',
            top: -SIZES.height * 0.015,
            right: -SIZES.width * 0.02,
            resizeMode: 'cover',
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default TiffinTickMark;

const styles = StyleSheet.create({});

// import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React, {useState} from 'react';
// import {COLORS, FONTS, SIZES} from '../../constants';

// const TiffinTickMark = ({children, styleText, imagePng, source, onSelect}) => {
//   const [isSelected, setIsSelected] = useState(false);

//   const handlePress = () => {
//     onSelect, setIsSelected(prevState => !prevState);
//   };

//   return (
//     <TouchableOpacity
//       onPress={handlePress}
//       style={{
//         alignSelf: 'flex-start',
//         backgroundColor: isSelected ? COLORS.orange3 : COLORS.white, // Change color based on selection
//         borderRadius: SIZES.height * 0.009,
//         gap: SIZES.width * 0.015,
//         paddingHorizontal: SIZES.width * 0.03,
//         paddingVertical: SIZES.height * 0.006,
//         flexShrink: 1,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         elevation: 3,
//       }}>
//       <Image
//         source={source}
//         style={{
//           width: SIZES.width * 0.095,
//           height: SIZES.width * 0.095,
//           resizeMode: 'cover',
//         }}
//       />
//       <Text
//         style={[
//           {
//             color: COLORS.orange2,
//             fontFamily: FONTS.LexRegular,
//             fontSize: SIZES.width * 0.0488,
//             alignSelf: 'center',
//           },
//           styleText,
//         ]}>
//         {children}
//       </Text>
//       {isSelected && (
//         <Image
//           source={require('../../assets/image/tickMark.png')}
//           style={{
//             width: SIZES.width * 0.07,
//             height: SIZES.width * 0.07,
//             position: 'absolute',
//             top: -SIZES.height * 0.015,
//             right: -SIZES.width * 0.02,
//             resizeMode: 'cover',
//           }}
//         />
//       )}
//     </TouchableOpacity>
//   );
// };

// export default TiffinTickMark;
