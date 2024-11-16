// 10/09
import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS, FONTS, SIZES} from '../../constants';
import Pending from '../../screens/Restaurant/Pending';
import Installed from '../../screens/Restaurant/Installed';
import Onboarded from '../../screens/Restaurant/Onboarded';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedTabTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const Tab = createMaterialTopTabNavigator();

const CustomTabBar = ({state, descriptors, navigation}) => {
  const animatedStyle = index => {
    const isFocused = state.index === index;

    return useAnimatedStyle(() => {
      return {
        backgroundColor: withTiming(
          isFocused ? COLORS.white : COLORS.lightGray5,
          {duration: 200},
        ),
        borderTopWidth: withTiming(isFocused ? 4 : 0, {duration: 200}),
        borderTopColor: COLORS.primary,
      };
    });
  };

  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        let iconSource;
        let iconStyle = [styles.tabBarIcon];

        if (route.name === 'Pending') {
          iconSource = require('../../assets/image/pendingIcon.png');
        } else if (route.name === 'Installed') {
          iconSource = require('../../assets/image/installedIcon.png');
        } else if (route.name === 'Onboarded') {
          iconSource = require('../../assets/image/onboardIcon.png');
        }

        if (isFocused) {
          iconStyle.push(styles.tabBarIconFocused);
        }

        return (
          <AnimatedTabTouchable
            key={index}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.tabBarItem,
              // isFocused && styles.tabBarItemFocused,

              animatedStyle(index), // Apply the animated style
              index === 0 && styles.firstTab,
              index === state.routes.length - 1 && styles.lastTab,
            ]}>
            <Image source={iconSource} style={iconStyle} />
            <Text
              style={[
                styles.tabBarLabel,
                isFocused && styles.tabBarLabelFocused,
              ]}>
              {label}
            </Text>
          </AnimatedTabTouchable>
        );
      })}
    </View>
  );
};

const RestaurantTab = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        tabBarIndicatorContainerStyle={{height: SIZES.height * 0.05}}>
        <Tab.Screen name="Pending" component={Pending} />
        <Tab.Screen name="Installed" component={Installed} />
        <Tab.Screen name="Onboarded" component={Onboarded} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.lightGray10,
  },
  tabBarContainer: {
    marginHorizontal: SIZES.width * 0.045,
    flexDirection: 'row',
    backgroundColor: COLORS.lightGray5,
    borderRadius: SIZES.width * 0.02,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  tabBarItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: SIZES.height * 0.07,
  },
  firstTab: {
    borderTopLeftRadius: SIZES.width * 0.02,
    borderBottomLeftRadius: SIZES.width * 0.02,
    borderRightColor: 'rgba(0, 0, 0, 0.2)',
    borderRightWidth: 1,
  },
  lastTab: {
    borderTopRightRadius: SIZES.width * 0.02,
    borderBottomRightRadius: SIZES.width * 0.02,
    borderLeftColor: 'rgba(0, 0, 0, 0.2)',
    borderLeftWidth: 1,
  },
  tabBarItemFocused: {
    backgroundColor: COLORS.white,
    borderTopWidth: 4,
    borderTopColor: COLORS.primary,
  },
  tabBarLabel: {
    fontSize: SIZES.width * 0.032,
    fontFamily: FONTS.LexRegular,
    color: COLORS.gray,
    textAlign: 'center',
  },
  tabBarLabelFocused: {
    color: COLORS.primary,
  },
  tabBarIcon: {
    width: SIZES.height * 0.03,
    height: SIZES.height * 0.03,
    tintColor: COLORS.gray,
  },
  tabBarIconFocused: {
    tintColor: COLORS.primary,
  },
  // Animated indicator style
  indicator: {
    position: 'absolute',
    // height: 3,
    // width: SIZES.width * 0.3, // Each tab width (adjust based on design)
    backgroundColor: COLORS.primary,
    bottom: 0,
  },
});

export default RestaurantTab;

// 02/09/2024
// import React from 'react';
// import {View, Text, Image, StyleSheet} from 'react-native';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import {COLORS, FONTS, SIZES} from '../../constants';
// import Pending from '../../screens/Restaurant/Pending';
// import Installed from '../../screens/Restaurant/Installed';
// import Onboarded from '../../screens/Restaurant/Onboarded';

// const Tab = createMaterialTopTabNavigator();

// const CustomTabBar = ({state, descriptors, navigation}) => {
//   return (
//     <View style={styles.tabBarContainer}>
//       {state.routes.map((route, index) => {
//         const {options} = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         let iconSource;
//         let iconStyle = [styles.tabBarIcon];

//         if (route.name === 'Pending') {
//           iconSource = require('../../assets/image/pendingIcon.png');
//         } else if (route.name === 'Installed') {
//           iconSource = require('../../assets/image/installedIcon.png');
//         } else if (route.name === 'Onboarded') {
//           iconSource = require('../../assets/image/onboardIcon.png');
//         }

//         if (isFocused) {
//           iconStyle.push(styles.tabBarIconFocused);
//         }

//         return (
//           <View
//             key={index}
//             style={[
//               styles.tabBarItem,
//               isFocused && styles.tabBarItemFocused,
//               index === 0 && styles.firstTab,
//               index === state.routes.length - 1 && styles.lastTab,
//             ]}>
//             <Image source={iconSource} style={iconStyle} />
//             <Text
//               onPress={onPress}
//               onLongPress={onLongPress}
//               style={[
//                 styles.tabBarLabel,
//                 isFocused && styles.tabBarLabelFocused,
//               ]}>
//               {label}
//             </Text>
//           </View>
//         );
//       })}
//     </View>
//   );
// };

// const RestaurantTab = () => {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <Tab.Navigator
//         tabBar={props => <CustomTabBar {...props} />}
//         tabBarIndicatorContainerStyle={{height: SIZES.height * 0.05}}>
//         <Tab.Screen name="Pending" component={Pending} />
//         <Tab.Screen name="Installed" component={Installed} />
//         <Tab.Screen name="Onboarded" component={Onboarded} />
//       </Tab.Navigator>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     paddingVertical: -SIZES.height * 0.025, //20
//     backgroundColor: COLORS.lightGray10,
//   },
//   tabBarContainer: {
//     marginHorizontal: SIZES.width * 0.045,
//     flexDirection: 'row',
//     // backgroundColor: 'rgba(242, 242, 242, 1)',

//     backgroundColor: COLORS.lightGray1,
//     borderRadius: SIZES.width * 0.02, //7

//     borderWidth: 1,
//     borderColor: 'rgba(0, 0, 0, 0.2)',
//   },
//   tabBarItem: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: SIZES.height * 0.07,
//     overflow: 'hidden',

//     // borderWidth: 1,
//     // borderColor: 'rgba(0, 0, 0, 0.2)',
//   },
//   firstTab: {
//     borderTopLeftRadius: SIZES.width * 0.02, //7

//     borderBottomLeftRadius: SIZES.width * 0.02, //7

//     borderRightColor: 'rgba(0, 0, 0, 0.2)',

//     borderRightWidth: 1,
//   },
//   lastTab: {
//     borderTopRightRadius: SIZES.width * 0.02, //7

//     borderBottomRightRadius: SIZES.width * 0.02, //7

//     borderLeftColor: 'rgba(0, 0, 0, 0.2)',
//     borderLeftWidth: 1,
//   },
//   tabBarItemFocused: {
//     backgroundColor: COLORS.white,
//     borderTopWidth: 4,
//     borderBottomWidth: 0,
//     borderTopColor: COLORS.primary,
//   },
//   tabBarLabel: {
//     fontSize: SIZES.width * 0.032, //12

//     fontFamily: FONTS.LexRegular,
//     color: COLORS.gray,
//     textAlign: 'center',
//   },
//   tabBarLabelFocused: {
//     color: COLORS.primary,
//   },
//   tabBarIcon: {
//     width: SIZES.height * 0.03,
//     height: SIZES.height * 0.03,
//     tintColor: COLORS.gray,
//   },
//   tabBarIconFocused: {
//     tintColor: COLORS.primary,
//   },
// });
// export default RestaurantTab;

// this code works
// const CustomTabBar = ({state, descriptors, navigation}) => {
//   return (
//     <View style={styles.tabBarContainer}>
//       {state.routes.map((route, index) => {
//         const {options} = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         let iconSource;
//         let iconStyle = [styles.tabBarIcon];

//         if (route.name === 'Pending') {
//           iconSource = require('../../assets/image/pendingIcon.png');
//         } else if (route.name === 'Installed') {
//           iconSource = require('../../assets/image/installedIcon.png');
//         } else if (route.name === 'Onboarded') {
//           iconSource = require('../../assets/image/onboardIcon.png');
//         }

//         if (isFocused) {
//           iconStyle.push(styles.tabBarIconFocused);
//         }

//         return (
//           <View
//             key={index}
//             style={[styles.tabBarItem, isFocused && styles.tabBarItemFocused]}>
//             <Image source={iconSource} style={iconStyle} />
//             <Text
//               onPress={onPress}
//               onLongPress={onLongPress}
//               style={[
//                 styles.tabBarLabel,
//                 isFocused && styles.tabBarLabelFocused,
//               ]}>
//               {label}
//             </Text>
//           </View>
//         );
//       })}
//     </View>
//   );
// };

// const RestaurantTab = () => {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <Tab.Navigator
//         tabBar={props => <CustomTabBar {...props} />}
//         tabBarIndicatorContainerStyle={(height = SIZES.height * 0.05)}>
//         <Tab.Screen name="Pending" component={Pending} />
//         <Tab.Screen name="Installed" component={Installed} />
//         <Tab.Screen name="Onboarded" component={Onboarded} />
//       </Tab.Navigator>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     paddingVertical: -20,
//   },
//   tabBarContainer: {
//     marginHorizontal: SIZES.width * 0.045,
//     borderWidth: 1,
//     borderColor: 'rgba(0, 0, 0, 0.2)',
//     flexDirection: 'row',
//     backgroundColor: COLORS.lightGray1,
//     borderRadius: 7,
//   },
//   tabBarItem: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
//     overflow: 'hidden',
//     height: SIZES.height * 0.07,
//     borderRadius: 7,
//   },
//   tabBarItemFocused: {
//     backgroundColor: COLORS.white,
//     borderTopWidth: 4,
//     borderBottomWidth: 0,
//     borderTopColor: COLORS.primary,
//   },
//   tabBarLabel: {
//     fontSize: SIZES.width * 0.03, //11,
//     fontFamily: FONTS.LexRegular,
//     color: COLORS.gray,
//     textAlign: 'center',
//   },
//   tabBarLabelFocused: {
//     color: COLORS.primary,
//   },
//   tabBarIcon: {
//     width: SIZES.height * 0.03,
//     height: SIZES.height * 0.03,
//     tintColor: COLORS.gray,
//   },
//   tabBarIconFocused: {
//     tintColor: COLORS.primary,
//   },
// });

// old code
// const CustomTabBar = ({state, descriptors, navigation}) => {
//   return (
//     <View style={styles.tabBarContainer}>
//       {state.routes.map((route, index) => {
//         const {options} = descriptors[route.key];
//         const label =
//           options.tabBarLabel !== undefined
//             ? options.tabBarLabel
//             : options.title !== undefined
//             ? options.title
//             : route.name;

//         const isFocused = state.index === index;

//         const onPress = () => {
//           const event = navigation.emit({
//             type: 'tabPress',
//             target: route.key,
//           });

//           if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route.name);
//           }
//         };

//         const onLongPress = () => {
//           navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//           });
//         };

//         let iconSource;

//         if (route.name === 'Pending') {
//           iconSource = require('../../assets/image/pendingIcon.png');
//         } else if (route.name === 'Installed') {
//           iconSource = require('../../assets/image/installedIcon.png');
//         } else if (route.name === 'Onboarded') {
//           iconSource = require('../../assets/image/onboardIcon.png');
//         }

//         return (
//           <View
//             key={index}
//             style={[styles.tabBarItem, isFocused && styles.tabBarItemFocused]}>
//             <Image
//               source={iconSource}
//               style={[
//                 styles.tabBarIcon,
//                 isFocused && styles.tabBarLabelFocused,
//               ]}
//             />
//             <Text
//               onPress={onPress}
//               onLongPress={onLongPress}
//               style={[
//                 styles.tabBarLabel,
//                 isFocused && styles.tabBarLabelFocused,
//               ]}>
//               {label}
//             </Text>
//           </View>
//         );
//       })}
//     </View>
//   );
// };

// const RestaurantTab = () => {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <Tab.Navigator
//         tabBar={props => <CustomTabBar {...props} />}
//         tabBarIndicatorContainerStyle={(height = SIZES.height * 0.05)}>
//         <Tab.Screen name="Pending" component={Pending} />
//         <Tab.Screen name="Installed" component={Installed} />
//         <Tab.Screen name="Onboarded" component={Onboarded} />
//       </Tab.Navigator>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     paddingVertical: -20,
//   },
//   headerContainer: {
//     width: SIZES.width * 0.789, //309
//     alignSelf: 'center',
//     // backgroundColor: 'yellow',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 24,
//   },
//   headerText: {
//     // backgroundColor: 'red',
//     fontFamily: FONTS.LexMedium,
//     fontSize: 20,
//     color: COLORS.black,
//     textAlign: 'center',
//   },
//   centered: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   tabBarContainer: {
//     marginHorizontal: SIZES.width * 0.045,
//     borderWidth: 1,
//     // borderRadius:10,
//     // borderColor: COLORS.gray,
//     borderColor: 'rgba(0, 0, 0, 0.2)',
//     gap: 0,
//     flexDirection: 'row',
//     backgroundColor: COLORS.lightGray1,
//     // backgroundColor: 'red',
//     // backgroundColor: 'red',
//     borderRadius: 7,
//   },
//   tabBarItem: {
//     // paddingHorizontal: 16,

//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     alignSelf: 'center',
//     padding: 0,
//     margin: 0,
//     // gap: 10,
//     // flexDirection: 'column',
//     // flexWrap: 'wrap',
//     // borderWidth: 1,
//     // borderColor: 'rgba(0, 0, 0, 0.2)',

//     // borderColor: COLORS.gray,
//     overflow: 'hidden',
//     height: SIZES.height * 0.07,
//     // padding: 10,
//     // backgroundColor: COLORS.lightGray1,
//     // backgroundColor: 'blue',

//     borderRadius: 7,
//   },
//   tabBarItemFocused: {
//     backgroundColor: COLORS.white,
//     borderTopWidth: 4,
//     borderBottomWidth: 0,
//     padding: 0,
//     margin: 0,
//     // borderRadius: 7,
//     overflow: 'hidden',

//     // flexDirection: 'row',
//     borderTopColor: COLORS.primary,
//     // height: SIZES.height * 0.07,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//   },
//   tabBarLabel: {
//     fontSize: 10,
//     fontFamily: FONTS.LexRegular,
//     color: COLORS.gray,
//     textAlign: 'center',
//   },
//   tabBarLabelFocused: {
//     color: COLORS.primary,
//     // backgroundColor: 'red',
//   },
//   tabBarIcon: {
//     width: SIZES.height * 0.03, // 184
//     height: SIZES.height * 0.03, // 184
//     // padding: 10,
//     // borderRadius: 50,
//     alignSelf: 'center',
//     // marginBottom: 16,
//   },
// });
