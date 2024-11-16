import React, {useRef, useState} from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {COLORS, FONTS, SIZES} from '../../constants';
import {ImagePermission} from '../../services/permissions';

const BottomSheet = ({
  content,
  sheetHeight,
  containerStyle,
  styleCamera,
  onImagePick,
}) => {
  const refRBSheet = useRef();
  const [selectedImage, setSelectedImage] = useState(null);

  // const handleImagePick = imageUri => {
  //   setSelectedImage(imageUri);
  //   refRBSheet.current.close();
  //   if (onImagePick) {
  //     onImagePick(imageUri);
  //   }
  // };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => refRBSheet.current.open()}
        style={containerStyle}>
        {selectedImage ? (
          <Image
            source={{uri: selectedImage}}
            style={[styles.imagePick, styles.overlayImage]}
          />
        ) : (
          <Image
            source={require('../../assets/image/camera.png')}
            style={[
              {
                height: SIZES.height * 0.032,
                width: SIZES.width * 0.065,
                resizeMode: 'cover',
                position: 'absolute',
                zIndex: 1,
              },
              styleCamera,
            ]}
          />
        )}
      </TouchableOpacity>

      <RBSheet
        ref={refRBSheet}
        height={sheetHeight}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: COLORS.transparentBlack2,
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
          container: {
            borderTopLeftRadius: SIZES.width * 0.032,
            borderTopRightRadius: SIZES.width * 0.032,
          },
        }}>
        <View style={styles.box}></View>
        <View style={styles.content}>{content}</View>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: COLORS.gray40,
    display: 'flex',
    alignSelf: 'center',
    position: 'absolute',
    top: SIZES.height * 0.012,
    height: SIZES.height * 0.006,
    width: SIZES.width * 0.09,
    borderRadius: SIZES.width * 0.051, //20
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: SIZES.width * 0.04,
  },
  imagePick: {
    marginTop: SIZES.height * 0.03,
    backgroundColor: COLORS.lightGray1,
    borderRadius: SIZES.width * 0.016,
    alignSelf: 'center',
    width: SIZES.width * 0.55,
    height: SIZES.height * 0.14,
  },
  overlayImage: {
    position: 'absolute',
  },
  bottomSheetImage: {
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
  },
  styleCamera: {
    bottom: -SIZES.height * 0.018,
    right: -SIZES.width * 0.037,
  },
});

export default BottomSheet;

// import React, {useRef} from 'react';
// import {
//   View,
//   Button,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   Text,
// } from 'react-native';
// import RBSheet from 'react-native-raw-bottom-sheet';

// import {COLORS, FONTS, SIZES} from '../../constants';

// const BottomSheet = ({content, sheetHeight, containerStyle, styleCamera}) => {
//   const refRBSheet = useRef();

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         title="OPEN BOTTOM SHEET"
//         onPress={() => refRBSheet.current.open()}
//         style={[containerStyle]}>
//         <Image
//           source={require('../../assets/image/camera.png')}
//           style={[
//             {
//               // backgroundColor: 'red',

//               height: SIZES.height * 0.032,
//               width: SIZES.width * 0.065,
//               resizeMode: 'cover',
//               position: 'absolute',
//               zIndex: 1,
//             },
//             styleCamera,
//           ]}
//         />
//       </TouchableOpacity>

//       <RBSheet
//         ref={refRBSheet}
//         height={sheetHeight}
//         closeOnDragDown={true}
//         closeOnPressMask={true}
//         customStyles={{
//           wrapper: {
//             backgroundColor: COLORS.transparentBlack2,
//           },
//           draggableIcon: {
//             backgroundColor: '#000',
//           },
//           container: {
//             borderTopLeftRadius: SIZES.width * 0.032,
//             borderTopRightRadius: SIZES.width * 0.032,
//           },
//         }}>
//         <View style={styles.box}></View>
//         <View style={styles.content}>{content}</View>
//       </RBSheet>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     backgroundColor: COLORS.gray40,
//     display: 'flex',
//     alignSelf: 'center',
//     position: 'absolute',
//     top: SIZES.height * 0.012,
//     height: SIZES.height * 0.006,
//     width: SIZES.width * 0.09,
//     borderRadius: 20,
//   },
//   content: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//   },
//   imagePick: {
//     marginTop: SIZES.height * 0.03,
//     backgroundColor: COLORS.lightGray1,

//     borderRadius: SIZES.width * 0.016,
//     alignSelf: 'center',
//     width: SIZES.width * 0.488,
//     height: SIZES.height * 0.15,
//   },
//   imagePickImage: {
//     width: SIZES.width * 0.065,
//     height: SIZES.width * 0.065,
//     bottom: -SIZES.height * 0.019,
//     right: -SIZES.width * 0.035,
//   },
//   bottomSheetImage: {
//     width: SIZES.width * 0.16,
//     height: SIZES.width * 0.16,
//     resizeMode: 'cover',
//   },
//   bottomSheetText: {
//     marginTop: SIZES.height * 0.013,
//     color: COLORS.gray80,
//     fontFamily: FONTS.LexMedium,
//     alignSelf: 'center',

//     fontSize: SIZES.width * 0.039,
//     // width: SIZES.width * 0.58,
//   },
// });

// export default BottomSheet;
