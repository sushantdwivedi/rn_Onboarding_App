// // components/HexagonTabIcon.js
// import React from 'react';
// import {View} from 'react-native';
// import Svg, {Polygon} from 'react-native-svg';
// import {COLORS} from '../../constants';

// const HexagonSvgIcon = ({focused, children, style}) => {
//   return (
//     <View style={style}>
//       {focused && (
//         <View
//           style={{
//             position: 'absolute',
//             top: -39,
//             elevation: 3.5,
//             shadowColor: '#000',
//             shadowOpacity: 0.3,
//             shadowRadius: 3,
//             shadowOffset: {width: 0, height: 2},
//           }}>
//           <Svg height="60" width="60" viewBox="0 0 100 100">
//             <Polygon
//               points="50,1 90,25 90,75 50,99 10,75 10,25"
//               fill={COLORS.primary}
//               stroke={COLORS.primary}
//               //   strokeWidth="1"
//             />
//           </Svg>
//         </View>
//       )}
//       {children}
//     </View>
//   );
// };

// export default HexagonSvgIcon;

import React from 'react';
import {View, Image, Text} from 'react-native';
// import Svg, {
//   ClipPath,
//   Defs,
//   Path,
//   Filter,
//   FeDropShadow,
//   Polygon,
// } from 'react-native-svg';
import Svg, {Polygon, Defs, Filter, FeDropShadow} from 'react-native-svg';
import {COLORS, SIZES, FONTS} from '../../constants'; // Adjust the import as per your file structure

const HexagonSvgIcon = ({focused, iconName, label}) => {
  const rotationAngle = 30;
  return (
    <View style={{alignItems: 'center'}}>
      {focused && (
        <View
          style={{
            position: 'absolute',
            top: -SIZES.height * 0.023,
            // elevation: 3,
            shadowColor: '#000',
            shadowOpacity: 0.3,
            shadowRadius: 3,
            shadowOffset: {width: 0, height: 2},
            alignItems: 'center',
            // elevation: 1,
          }}>
          {/* this works */}
          <Svg
            height={SIZES.width * 0.15}
            width={SIZES.width * 0.15}
            viewBox="0 0 70 70"
            fill={COLORS.primary}
            stroke-width="4">
            <Polygon
              // points="60.98076211353316,62 35,77 9.019237886466847,62.000000000000014 9.019237886466836,32.00000000000001 34.99999999999999,17 60.98076211353316,32.000000000000014"
              points="57.98076211353316,61.2 32,76.2 6.019237886466847,61.20000000000002 6.019237886466836,31.20000000000001 31.999999999999993,16.200000000000003 57.98076211353316,31.200000000000014"
              fill={COLORS.primary}
              stroke={COLORS.primary}
              strokeWidth="1"
              transform={`rotate(${rotationAngle}, 50, 50)`} // Rotate around center (50,50)
              // elevation={1}
            />
            <Image
              source={iconName}
              resizeMode="center"
              style={{
                width: SIZES.width * 0.078, // Adjust size as needed
                height: SIZES.width * 0.078, // Adjust size as needed
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: [{translateX: -14}, {translateY: 16}], // Center the image
              }}
            />
          </Svg>
        </View>
      )}
      {!focused && (
        <Image
          source={iconName}
          resizeMode="contain"
          style={{
            width: SIZES.width * 0.065,
            height: SIZES.width * 0.065,
            tintColor: focused ? COLORS.white : COLORS.grey99,
          }}
        />
      )}
      <Text
        style={{
          color: focused ? COLORS.primary : COLORS.grey99,
          fontFamily: FONTS.LexMedium,
          fontSize: 10,
          marginTop: focused ? SIZES.height * 0.044 : SIZES.height * 0.0125,
          //   color: focused ? COLORS.primary : COLORS.grey99,
        }}>
        {label}
      </Text>
    </View>
  );
};

export default HexagonSvgIcon;
