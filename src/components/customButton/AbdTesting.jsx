// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   TouchableOpacity,
// } from 'react-native';
// import React from 'react';
// import {COLORS, FONTS, SIZES} from '../../../constants';
// import ImagePick from '../../components/ImagePick';
// import styles from './styles';
// import TiffinTickMark from '../../components/TiffinTickMark';
// import Input from '../../components/Input';
// import DateTimePicker from '../../components/DateTimePicker';
// import SimpleButton from '../../components/simpleButton';

// const AddResturant = props => {
//   return (
//     <ScrollView
//       style={{
//         flex: 1,
//         backgroundColor: COLORS.lightGray10,
//       }}>
//       <ImagePick style={styles.imagePick} styleImage={styles.imagePickImage} />
//       <View style={styles.contain}>
//         <TiffinTickMark source={require('../../assets/image/2personTable.png')}>
//           Restaurant
//         </TiffinTickMark>
//         <TiffinTickMark source={require('../../assets/image/tiffin.png')}>
//           Tiffin
//         </TiffinTickMark>
//       </View>
//       <View
//         style={{
//           paddingVertical: SIZES.height * 0.02,
//           // flex: 1,
//           // justifyContent: 'center',
//           // alignSelf: 'center',
//         }}>
//         <Input
//           placeholder="Enter Restaurant Name"
//           text="Restaurant Name"
//           editable={true}
//         />
//         <Input
//           placeholder="Enter Owner Name"
//           text="Owner Name"
//           editable={true}
//         />
//         <Input
//           placeholder="Enter e - mail (Optional)"
//           text="E-mail"
//           editable={true}
//         />
//         <Input placeholder="9898989898" text="Phone" editable={true} />
//         <View
//           style={{
//             flex: 1,
//             justifyContent: 'center',
//             alignSelf: 'center',
//             flexDirection: 'row',
//             width: SIZES.width * 0.81,
//             gap: 30,
//           }}>
//           <DateTimePicker
//             isImage={true}
//             text={'Open Time'}
//             placeholder="Select Time"
//           />
//           <DateTimePicker
//             isImage={true}
//             text={'Close Time'}
//             placeholder="Select Time"
//           />
//         </View>
//         <SimpleButton
//           onPress={() => props.navigation.navigate('Verify Mobile Number')}
//           // title="Get Otp"
//           children="Submit"
//           containerStyle={{
//             elevation: 3,
//             shadowRadius: 80,
//             borderRadius: 14,
//             marginTop: 12,
//             backgroundColor: COLORS.orange2,
//             alignSelf: 'center',

//             height: SIZES.height * 0.065,
//             width: SIZES.width * 0.81,
//           }}
//           style={{
//             fontFamily: FONTS.LexBold,
//             paddingVertical: 5,
//           }}
//         />
//       </View>
//     </ScrollView>
//   );
// };

// export default AddResturant;
