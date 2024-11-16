// import {ScrollView, StyleSheet, Text, View} from 'react-native';
// import React, {useState} from 'react';
// import {COLORS, FONTS, SIZES} from '../../constants';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import ImagePick from '../../components/ImagePick';
// import BottomSheet from '../../components/BottomSheet';
// import {Image} from 'react-native';
// import Input from '../../components/Input';
// import SimpleButton from '../../components/simpleButton';
// import StarRating from 'react-native-star-rating-widget';

// const ProfileEdit = props => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImagePick = image => {
//     setSelectedImage(image.path);
//   };

//   const sheetContent = (
//     <View style={styles.sheetContent}>
//       <ImagePick
//         sourceType="gallery"
//         style={styles.imagePicker}
//         onImagePick={handleImagePick}>
//         <Image
//           source={require('../../assets/image/galleryIcon.png')}
//           style={styles.bottomSheetImage}
//         />
//         <Text style={styles.bottomSheetText}>Gallery</Text>
//       </ImagePick>
//       <ImagePick
//         sourceType="camera"
//         style={styles.imagePicker}
//         onImagePick={handleImagePick}>
//         <Image
//           source={require('../../assets/image/cameraIcon.png')}
//           style={styles.bottomSheetImage}
//         />
//         <Text style={styles.bottomSheetText}>Camera</Text>
//       </ImagePick>
//     </View>
//   );
//   console.log('op09----6556---', selectedImage);
//   const [rating, setRating] = useState(0);

//   return (
//     <ScrollView style={styles.scroll}>
//       <SafeAreaView style={styles.safeArea}>
//         {/* <View style={styles.headerContainer}>
//           <Text style={styles.headerText}>Profile</Text>
//         </View> */}
//         <BottomSheet
//           containerStyle={styles.imagePick}
//           content={sheetContent}
//           sheetHeight={SIZES.height * 0.24}
//           styleCamera={styles.styleCamera}>
//           {/* {selectedImage && (
//           <Image
//             source={{uri: selectedImage}}
//             style={[styles.selectedImage, styles.overlayImage]}
//           />
//         )} */}
//         </BottomSheet>
//         {selectedImage && (
//           <Image
//             source={{uri: selectedImage}}
//             style={[styles.imagePick, styles.overlayImage]}
//           />
//         )}
//         <Text style={styles.title}>Aman Sharma</Text>

//         <Input
//           placeholder="Amansharhma1234@gmail.com"
//           text="Email Id"
//           editable={true}
//         />
//         <Input placeholder="xyz colony" text="Address" editable={true} />
//         <Input
//           placeholder="Enter Phone Number"
//           text="Contact Number"
//           editable={true}
//         />
//         <View style={styles.containRating}>
//           <Text style={styles.label}>Ratings (4.5)</Text>
//           <StarRating rating={rating} onChange={setRating} />
//         </View>

//         <SimpleButton
//           containerStyle={styles.button}
//           style={styles.textButtom}
//           // onPress={() => props.navigation.navigate('Update')}
//         >
//           Update
//         </SimpleButton>
//       </SafeAreaView>
//     </ScrollView>
//   );
// };

// export default ProfileEdit;

// const styles = StyleSheet.create({
//   scroll: {
//     flex: 1,
//     backgroundColor: COLORS.lightGray10,
//   },
//   safeArea: {
//     flex: 1,
//     padding: -SIZES.width * 0.051, //20
//   },
//   headerContainer: {
//     width: SIZES.width * 0.789, //309
//     alignSelf: 'center',
//     // backgroundColor: 'yellow',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center', // Center horizontally
//     // marginBottom: 24,
//     // paddingVertical: 10, // Optional: Add padding if needed for vertical centering
//   },
//   headerText: {
//     // backgroundColor: 'red',
//     fontFamily: FONTS.LexMedium,
//     fontSize: 20,
//     color: COLORS.black,
//     textAlign: 'center', // Center the text inside the Text component
//   },
//   selectedImage: {
//     // width: 200,
//     // height: 200,
//     resizeMode: 'cover',
//   },
//   overlayImage: {
//     position: 'absolute',
//     top: 29,
//     alignSelf: 'center',
//     // left: 0,
//     // right: 0,
//     // bottom: 0,
//     // margin: 'auto',
//     backgroundColor: 'transparent',
//   },
//   imagePicker: {
//     alignItems: 'center',
//   },
//   // selectedImage: {
//   //   width: 200,
//   //   height: 200,
//   //   resizeMode: 'contain',
//   //   marginTop: 10,
//   // },

//   imagePick: {
//     // marginTop: SIZES.height * 0.03,
//     backgroundColor: COLORS.lightGray1,
//     // position: 'absolute',
//     width: SIZES.height * 0.229, // 184
//     height: SIZES.height * 0.229, // 184

//     borderRadius: 100,
//     alignSelf: 'center',
//     marginBottom: 16,
//   },
//   styleCamera: {
//     backgroundColor: COLORS.lightGray10,
//     padding: 12,

//     borderRadius: 8,
//     bottom: SIZES.height * 0.01,
//     right: SIZES.width * 0.001,
//   },
//   imagePickImage: {
//     width: SIZES.width * 0.065,
//     height: SIZES.width * 0.065,
//     bottom: -SIZES.height * 0.019,
//     right: -SIZES.width * 0.035,
//   },
//   contain: {
//     flexDirection: 'row',
//     width: SIZES.width * 0.85,
//     gap: SIZES.width * 0.1,
//     alignSelf: 'center',
//     justifyContent: 'center',
//     marginTop: SIZES.height * 0.04,
//   },
//   sheetContent: {
//     // position: 'absolute',
//     // top: 0,
//     display: 'flex',
//     alignSelf: 'center',
//     flexDirection: 'row',
//     // justifyContent: 'space-between',
//     gap: SIZES.width * 0.3,
//   },
//   bottomSheetImage: {
//     // backgroundColor: 'red',
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
//   title: {
//     fontFamily: FONTS.LexMedium,
//     fontSize: 24,
//     color: COLORS.black,
//     textAlign: 'center',
//     marginTop: 3,
//     marginBottom: 33,
//   },

//   button: {
//     marginVertical: 55,
//     alignSelf: 'center',
//     borderRadius: 14,
//     backgroundColor: COLORS.primary,
//     width: SIZES.width * 0.9, //309

//     height: SIZES.height * 0.06, //40
//   },
//   textButtom: {
//     borderColor: COLORS.white,
//     fontFamily: FONTS.semiBold,
//     fontSize: 16,
//   },
//   label: {
//     color: '#000', // Label color
//     fontFamily: FONTS.LexLight,
//     fontSize: SIZES.width * 0.04,
//     // opacity: 0.5,
//     // marginVertical: 10,
//     marginBottom: 16,
//   },
//   containRating: {
//     flex: 1,
//     justifyContent: 'center',
//     width: SIZES.width * 0.88,
//     // padding: 20,
//     // paddingVertical: SIZES.height * 0.01,
//     alignSelf: 'center',
//     backgroundColor: COLORS.lightGray10,
//   },
// });

/// with some code
// import React, {useState, useRef, useEffect} from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   Image,
//   ScrollView,
//   StyleSheet,
// } from 'react-native';
// import RBSheet from 'react-native-raw-bottom-sheet';
// import ImagePicker from 'react-native-image-crop-picker';
// import {COLORS, FONTS, SIZES} from '../../constants';
// import Input from '../../components/Input';
// // import SimpleButton from '../../components/SimpleButton';
// import StarRating, {StarRatingDisplay} from 'react-native-star-rating-widget';
// import ImagePickBottom from '../../components/ImagePickBottom';
// import SimpleButton from '../../components/simpleButton';
// import ImageCropPicker from 'react-native-image-crop-picker';
// import {connect} from 'react-redux';
// import {updateEmployeeData} from '../../redux/actions/updateProfileAction';
// import {getProfile} from '../../redux/actions/getProfileAction';

// const ProfileEdit = ({
//   profile,
//   employee,
//   updateEmployeeData,
//   getProfile,
//   navigation,
// }) => {
//   console.log('profile', profile);

//   //
//   const [firstImg, setFirstImg] = useState(null);
//   const [imageObject, setImageObject] = useState(null);
//   const [img, setImg] = useState();
//   const [error, setError] = useState(null);
//   const [rating, setRating] = useState(0);

//   const [userDetails, setUserDetails] = useState({
//     name: profile?.name, // Ensure default values
//     // email: profile?.email || '',
//     contact: profile?.contact.toString(), // Convert contact to string
//     address: profile?.address,

//   });

//   useEffect(() => {
//     // updateEmployeeData();
//     getProfile();
//   }, []);

//   const handleChange = (field, value) => {
//     setUserDetails({
//       ...userDetails,
//       [field]: value,
//     });
//   };
//   console.log('User Details:', userDetails);
//   console.log('Employee Data:', employee);

//   const handleUpdate = async () => {
//     try {
//       await updateEmployeeData(userDetails);

//       console.log('Update api called successfully');
//     } catch (error) {
//       // Handle error (e.g., show an error message)
//       console.error('Update failed', error);
//     }
//   };

//   const refRBSheet = useRef();

//   const ImagePick = async cond => {
//     try {
//       let image;
//       if (cond === 'gallery') {
//         image = await ImageCropPicker.openPicker({
//           width: SIZES.width,
//           height: SIZES.width,
//           borderRadius: 100,
//           cropping: true,
//         });
//       } else {
//         image = await ImageCropPicker.openCamera({
//           width: SIZES.width,
//           height: SIZES.width,
//           borderRadius: 100,

//           cropping: true,
//         });
//       }
//       setFirstImg(image.path);
//       setImg(image.path);
//       setImageObject({
//         uri: image.path,
//         name: image.filename || Date.now() + '-' + image.path.slice(-10),
//         type: image.mime,
//       });
//       refRBSheet.current.close();
//     } catch (err) {
//       setError('Failed to pick image. Please try again.');
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <View style={styles.profileContainer}>
//         <TouchableOpacity
//           style={styles.imageContainer}
//           activeOpacity={0.5}
//           onPress={() => refRBSheet.current.open()}>
//           <Image
//             source={img ? {uri: img} : require('../../assets/image/photo.png')}
//             resizeMode="contain"
//             style={styles.profileImg}
//           />
//           <Image
//             source={require('../../assets/image/camera.png')}
//             resizeMode="contain"
//             style={styles.cameraIcon}
//           />
//         </TouchableOpacity>
//         {error && <Text style={styles.errorText}>{error}</Text>}
//       </View>
//       <RBSheet
//         ref={refRBSheet}
//         closeOnDragDown={true}
//         closeOnPressMask={true}
//         customStyles={{
//           wrapper: {
//             backgroundColor: COLORS.transparentBlack2,
//           },
//           draggableIcon: {
//             backgroundColor: COLORS.gray40,
//           },
//           container: {
//             borderTopRightRadius: 10,
//             borderTopLeftRadius: 10,
//           },
//         }}
//         height={SIZES.height * 0.19}>
//         <ImagePickBottom
//           galleryPress={() => ImagePick('gallery')}
//           cameraPress={() => ImagePick('camera')}
//         />
//       </RBSheet>

//       {/* <Text style={styles.title}>{userDetails?.name}</Text> */}

//       <Input
//         placeholder="name"
//         // keyboardType="email-address"
//         text="Name"
//         value={userDetails.name}
//         onChangeText={text => handleChange('name', text)} // Use onChangeText
//       />
//       <Input
//         placeholder="Amansharhma1234@gmail.com"
//         keyboardType="email-address"
//         text="Email Id"
//         value={profile?.email}
//         // onChangeText={text => handleChange('email', text)} // Use onChangeText
//       />

//       <Input
//         placeholder="xyz colony"
//         text="Address"
//         editable={true}
//         value={userDetails.address}
//         onChangeText={text => handleChange('address', text)}
//       />
//       <Input
//         placeholder="Enter Phone Number"
//         keyboardType="numeric"
//         maxLength={10}
//         text="Contact Number"
//         editable={true}
//         value={userDetails.contact}
//         onChangeText={text => handleChange('contact', text)}
//       />
//       <View style={styles.containRating}>
//         <Text style={styles.label}>Ratings ({profile?.rating})</Text>
//         <StarRatingDisplay
//           starStyle={{borderRadius: 10}}
//           style={{borderRadius: 10, marginTop: SIZES.height * 0.015}}
//           rating={profile?.rating}
//         />
//       </View>

//       <SimpleButton
//         containerStyle={styles.button}
//         style={styles.textButtom}
//         onPress={() => handleUpdate()}>
//         Update
//       </SimpleButton>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     alignItems: 'center',
//     // paddingVertical: SIZES.height * 0.03,
//   },
//   profileContainer: {
//     alignItems: 'center',
//     marginBottom: SIZES.height * 0.04,
//   },
//   imageContainer: {
//     alignItems: 'center',
//   },
//   profileImg: {
//     width: SIZES.width * 0.45, //177
//     height: SIZES.width * 0.45, //177
//     borderRadius: 100,
//   },
//   cameraIcon: {
//     position: 'absolute',
//     bottom: 10,
//     right: 10,
//     width: 30,
//     height: 30,
//   },
//   errorText: {
//     color: 'red',
//     marginTop: 10,
//   },
//   title: {
//     fontFamily: FONTS.LexMedium,
//     fontSize: 24,
//     color: COLORS.black,
//     textAlign: 'center',
//     marginTop: 15,
//     marginBottom: 33,
//   },
//   button: {
//     marginTop: SIZES.height * 0.04,
//     marginBottom: SIZES.height * 0.02,
//     alignSelf: 'center',
//     borderRadius: 14,
//     backgroundColor: COLORS.primary,
//     width: SIZES.width * 0.9,
//     height: SIZES.height * 0.06,
//   },
//   textButtom: {
//     borderColor: COLORS.white,
//     fontFamily: FONTS.semiBold,
//     fontSize: 16,
//   },
//   label: {
//     color: '#000',
//     fontFamily: FONTS.LexLight,
//     fontSize: SIZES.width * 0.04,
//     marginBottom: 16,
//   },
//   containRating: {
//     flex: 1,
//     justifyContent: 'center',
//     width: SIZES.width * 0.88,
//     alignSelf: 'center',
//     backgroundColor: COLORS.lightGray10,
//   },
// });
// const mapStateToProps = state => ({
//   profile: state.getProfile.profile,
//   employee: state.updateProfile.employee,
// });

// const mapDispatchToProps = {
//   updateEmployeeData,
//   getProfile,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);

//updated the code

import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import {COLORS, FONTS, SIZES} from '../../constants';
import Input from '../../components/Input';
import StarRating, {StarRatingDisplay} from 'react-native-star-rating-widget';
import ImagePickBottom from '../../components/ImagePickBottom';
import SimpleButton from '../../components/simpleButton';
import ImageCropPicker from 'react-native-image-crop-picker';
import {connect} from 'react-redux';
import {updateEmployeeData} from '../../redux/actions/authAction';
import {GetProfile} from '../../redux/actions/authAction';
import {http2} from '../../services/api';
import FastImage from 'react-native-fast-image';
import {ImagePermission} from '../../services/permissions';
import Animated, {FadeInLeft} from 'react-native-reanimated';

const ProfileEdit = ({profile, updateEmployeeData, GetProfile, navigation}) => {
  // State for holding the profile picture
  const [img, setImg] = useState(
    profile?.profilePic ? http2 + profile?.profilePic : null,
  );
  // console.log('profile', profile);
  const [loading, setLoading] = useState(false);

  const [imageObject, setImageObject] = useState(null);
  // const [error, setError] = useState(null);
  const [rating, setRating] = useState(0);

  const [userDetails, setUserDetails] = useState({
    name: profile?.name,
    contact: profile?.contact?.toString(),
    address: profile?.address,
  });
  const indianPhoneNumberRegex = /^[6-9]\d{9}$/;

  const [errors, setErrors] = useState({
    // imageObject: '',
    img: '',
    name: '',
    address: '',
    contact: '',
  });
  // console.log('userDetails', userDetails);

  const openRBSheet = async () => {
    const hasPermission = await ImagePermission(); // Check permissions

    if (hasPermission) {
      refRBSheet.current.open(); // Open the RBSheet if permissions are granted
    }
  };

  const fetchProfileData = async () => {
    try {
      await GetProfile();
    } catch (error) {
      console.error('Error fetching profile data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfileData();
  }, []);

  // useEffect(() => {
  //   // Once profile is loaded, set the image from the profile data
  //   if (profile?.profilePic) {
  //     setImg(http2 + profile?.profilePic); // Set profile image
  //   }
  // }, [profile]);
  // console.log('profile', profile);
  // console.log('profile.profilePic', profile.profilePic);
  const handleChange = (field, value) => {
    setUserDetails({
      ...userDetails,
      [field]: value,
    });
  };

  const handleUpdate = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    try {
      const formData = new FormData();

      // Dynamically append non-empty user details
      Object.entries(userDetails).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });

      // Append image if it exists
      if (imageObject?.uri) {
        formData.append('profilePic', {
          uri: imageObject.uri,
          name: imageObject.name || 'profile-pic.jpg',
          type: imageObject.type || 'image/jpeg',
        });
      }

      // Send updated data to the API
      await updateEmployeeData(formData, navigation);

      console.log('Update API called successfully');
    } catch (error) {
      console.error('Update failed', error);
    }
  };

  // console.log('img', img);
  const refRBSheet = useRef();

  const ImagePick = async cond => {
    try {
      let image;
      if (cond === 'gallery') {
        image = await ImageCropPicker.openPicker({
          width: SIZES.width,
          height: SIZES.width,
          borderRadius: 100,
          cropping: true,
        });
      } else {
        image = await ImageCropPicker.openCamera({
          width: SIZES.width,
          height: SIZES.width,
          borderRadius: 100,
          cropping: true,
        });
      }
      setImg(image.path);
      setImageObject({
        uri: image.path,
        name: image.filename || `${Date.now()}-${image.path.split('/').pop()}`,
        type: image.mime || 'image/jpeg',
      });

      // console.log('imageObject', imageObject);
      console.log(
        'uri: image',

        image.path,
      );
      refRBSheet.current.close();
    } catch (err) {
      setError({...errors, img: 'Failed to pick image. Please try again.'});
    }
  };
  useEffect(() => {
    if (imageObject) {
      console.log('imageObject:', imageObject);
    }
  }, [imageObject]);
  // console.log('profile?.profilePic', profile?.profilePic);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      {/* <Animated.Image
        style={{
          alignSelf: 'center',
          width: 350,
          height: 350,
          backgroundColor: 'blue',
          borderRadius: 300,
        }}
        source={require('../../assets/image/photo.png')}
        sharedTransitionTag="hero"
      /> */}

      <View style={styles.profileContainer}>
        <TouchableOpacity
          style={styles.imageContainer}
          activeOpacity={0.5}
          onPress={() => {
            openRBSheet();
          }}>
          <Animated.Image
            source={
              img ? {uri: img} : require('../../assets/image/profileAvatar.png')
            }
            resizeMode="contain"
            style={styles.profileImg}
            sharedTransitionTag={'image/user'}
          />
          <FastImage
            source={require('../../assets/image/camera2.png')}
            resizeMode="contain"
            style={styles.cameraIcon}
          />
        </TouchableOpacity>
        {errors.img ? <Text style={styles.errorText}>{errors.img}</Text> : null}
      </View>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: COLORS.transparentBlack2,
          },
          draggableIcon: {
            backgroundColor: COLORS.gray40,
          },
          container: {
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          },
        }}
        height={SIZES.height * 0.19}>
        <ImagePickBottom
          galleryPress={() => ImagePick('gallery')}
          cameraPress={() => ImagePick('camera')}
        />
      </RBSheet>
      <View style={styles.inputField}>
        <Input
          // inputGroupStyle={styles.inputField}
          // sharedTransitionTag={`UserName`}
          placeholder="Name"
          text="Name"
          value={userDetails.name}
          // onChangeText={text => }
          onChangeText={text => {
            handleChange('name', text);

            if (text) {
              if (text.trim() !== '') {
                setErrors({...errors, name: ''});
              }
            } else {
              setErrors(prevErrors => ({
                ...prevErrors,
                name: 'Name is required *',
              }));
            }
          }}
        />
        {/* <View style={styles.errorContain}> */}
        {errors.name ? (
          <Text style={styles.errorText}>{errors.name}</Text>
        ) : null}
      </View>
      <Input
        inputGroupStyle={styles.inputField}
        placeholder="Amansharhma1234@gmail.com"
        text="Email Id"
        value={profile?.email}
        editable={false}
      />
      <View style={styles.inputField}>
        <Input
          // inputGroupStyle={styles.inputField}
          placeholder="xyz colony"
          text="Address"
          value={userDetails.address}
          // onChangeText={text => handleChange('address', text)}
          onChangeText={text => {
            handleChange('address', text);

            if (text) {
              if (text.trim() !== '') {
                setErrors({...errors, address: ''});
              }
            } else {
              setErrors(prevErrors => ({
                ...prevErrors,
                address: 'Address is required *',
              }));
            }
          }}
        />
        {errors.address ? (
          <Text style={styles.errorText}>{errors.address}</Text>
        ) : null}
      </View>
      <View style={styles.inputField}>
        <Input
          // inputGroupStyle={styles.inputField}
          placeholder="Enter Phone Number"
          keyboardType="numeric"
          maxLength={10}
          text="Contact Number"
          value={userDetails.contact}
          // onChangeText={text => handleChange('contact', text)}
          onChangeText={text => {
            handleChange('contact', text);
            if (text) {
              if (text.length !== 10) {
                setErrors(prevErrors => ({
                  ...prevErrors,
                  contact: 'Phone number should be exactly 10 digits',
                }));
              } else if (!indianPhoneNumberRegex.test(text)) {
                setErrors(prevErrors => ({
                  ...prevErrors,
                  contact: 'Please enter a valid phone number',
                }));
              } else {
                setErrors(prevErrors => ({
                  ...prevErrors,
                  contact: '',
                }));
              }
            } else {
              setErrors(prevErrors => ({
                ...prevErrors,
                contact: 'Phone number is required *',
              }));
            }
          }}
        />
        {errors.contact ? (
          <Text style={styles.errorText}>{errors.contact}</Text>
        ) : null}
      </View>
      <View style={styles.containRating}>
        <Text style={styles.label}>Ratings ({profile?.rating})</Text>
        <StarRatingDisplay
          starStyle={{borderRadius: 10}}
          style={{borderRadius: 10, marginTop: SIZES.height * 0.015}}
          rating={profile?.rating}
        />
      </View>

      <SimpleButton
        onPress={() => handleUpdate()}
        isLoading={loading}
        children="Update"
        containerStyle={styles.button}
        style={styles.textButton}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height: SIZES.height,
    // alignItems: 'center',
    backgroundColor: COLORS.lightGray10,
  },
  profileContainer: {
    // backgroundColor: COLORS.lightGray10,
    // alignItems: 'center',
    marginBottom: SIZES.height * 0.04,
  },
  imageContainer: {
    alignItems: 'center',
  },
  profileImg: {
    width: SIZES.width * 0.45,
    height: SIZES.width * 0.45,
    borderRadius: 100,
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 10,
    right: 110,
    borderRadius: 8,
    width: SIZES.height * 0.05, // 30

    height: SIZES.height * 0.04, // 30
    // color: COLORS.white,
    backgroundColor: COLORS.lightGray10,
    // padding: 20,
  },
  errorContain: {
    marginTop: -SIZES.height * 0.03,
    // marginBottom: SIZES.height * 0.01,
    marginLeft: SIZES.width * 0.07,
  },
  errorText: {
    color: 'red',
    marginTop: SIZES.height * 0.01,

    marginLeft: SIZES.width * 0.07,
  },
  button: {
    marginTop: SIZES.height * 0.04,
    marginBottom: SIZES.height * 0.1,
    alignSelf: 'center',
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    width: SIZES.width * 0.9,
    height: SIZES.height * 0.06,
  },
  textButton: {
    borderColor: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.042, //16
  },
  label: {
    color: '#000',
    fontFamily: FONTS.LexLight,
    fontSize: SIZES.width * 0.04,
    marginBottom: SIZES.height * 0.0185, //16
  },
  containRating: {
    // flex: 1,
    justifyContent: 'center',
    width: SIZES.width * 0.88,
    alignSelf: 'center',
    backgroundColor: COLORS.lightGray10,
  },
  inputField: {
    marginBottom: SIZES.height * 0.025,
  },
});

const mapStateToProps = state => ({
  profile: state.auth.profile,
  employee: state.auth.employee,
});

const mapDispatchToProps = {
  updateEmployeeData,
  GetProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
