import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import BottomSheet from '../../components/BottomSheet';
import {COLORS, FONTS, SIZES} from '../../constants';
import OnboardingStatus from '../../components/OnboardingStatus';
import Input from '../../components/Input';
import SimpleButton from '../../components/simpleButton';
import styles from './styles';
import UnderlinedText from '../../components/underlineText';
import RBSheet from 'react-native-raw-bottom-sheet';
import ImagePickBottom from '../../components/ImagePickBottom';
import ImageCropPicker from 'react-native-image-crop-picker';
import FastImage from 'react-native-fast-image';
import {useRoute} from '@react-navigation/native';
import {connect} from 'react-redux';
import {UpdateRestaurantAPI} from '../../redux/actions/restaurantAction';
import {ImagePermission} from '../../services/permissions';
import TiffinTickMark from '../../components/TiffinTickMark';
import DateTimePicker from '../../components/DateTimePicker';
import {http2} from '../../services/api';

const AddRestaurant = ({UpdateRestaurantAPI, navigation}) => {
  const route = useRoute();
  const restaData = route?.params?.resData;
  const [resData, setresData] = useState(restaData);
  const [img, setImg] = useState(resData?.logo ? http2 + resData?.logo : null);
  const [loading, setLoading] = useState(false);
  console.log('resData', resData?.logo);

  const [formData, setFormData] = useState({
    employeeId: resData?.employeeId || '', // Ensure a default value
    // img: resData?.photos || '',
    name: resData?.name || '',
    ownerName: resData?.ownerName || '',
    email: resData?.email || '',
    phone: resData?.contact || '',
    address: resData?.address || '',
    openTime: resData?.openTime || '',
    closeTime: resData?.closeTime || '',
  });

  console.log('resData.coordinates', resData);

  // console.log('resData', resData);
  const [onboardingStatus, setonboardingStatus] = useState(
    resData?.onboardingStatus,
  );
  const [imageObject, setImageObject] = useState(null);
  const [height, setHeight] = useState(SIZES.height * 0.047);
  const {selectedAddress, coordinates} = route?.params;
  console.log('coordinates', coordinates);
  const [errors, setErrors] = useState({});
  const refRBSheet = useRef();

  const [preference, setPreference] = useState({veg: null, nonVeg: null});

  useEffect(() => {
    if (resData?.preference === 'veg') {
      setPreference({veg: 'veg', nonVeg: null});
    } else if (resData?.preference === 'non-veg') {
      setPreference({veg: null, nonVeg: 'non-veg'});
    } else if (resData?.preference === 'both') {
      setPreference({veg: 'veg', nonVeg: 'non-veg'});
    } else {
      setPreference({veg: null, nonVeg: null});
    }
  }, [resData?.preference]);
  // console.log('preference', preference);
  const [type, setType] = useState({restaurant: null, tiffin: null});
  useEffect(() => {
    if (resData?.type === 'restaurant') {
      setType({restaurant: 'restaurant', tiffin: null});
    } else if (resData?.type === 'tiffin') {
      setType({restaurant: null, tiffin: 'tiffin'});
    } else if (resData?.type === 'both') {
      setType({restaurant: 'restaurant', tiffin: 'tiffin'});
    } else {
      setType({restaurant: null, tiffin: null});
    }
  }, [resData?.type]);
  // console.log('type', type);
  const handleInputChange = (field, value) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [field]: value,
    }));
  };

  const openRBSheet = async () => {
    const hasPermission = await ImagePermission(); // Check permissions

    if (hasPermission) {
      refRBSheet.current.open(); // Open the RBSheet if permissions are granted
    }
  };

  // for image picker
  const ImagePick = async cond => {
    let image;
    if (cond === 'gallery') {
      image = await ImageCropPicker.openPicker({
        width: SIZES.width,
        height: SIZES.width * 0.5,
        // borderRadius: 100,
        cropping: true,
      });
    } else {
      image = await ImageCropPicker.openCamera({
        width: SIZES.width,
        height: SIZES.width * 0.5,
        // borderRadius: 100,
        cropping: true,
      });
    }
    setImg(image.path);
    setImageObject({
      uri: image.path,
      name: image.filename || Date.now() + '-' + image.path.slice(-10),
      type: image.mime,
    });
    refRBSheet.current.close();
  };

  /// For time change
  const handleTimeChange1 = date => {
    setFormData(prevFormData => ({
      ...prevFormData,
      openTime: date,
    }));
  };
  const handleTimeChange2 = date => {
    setFormData(prevFormData => ({
      ...prevFormData,
      closeTime: date,
    }));
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    console.log('handleSubmit');
    try {
      // Determine preferenceValue based on preference object
      let preferenceValue = null;
      if (preference.veg && preference.nonVeg) {
        preferenceValue = 'both';
      } else if (preference.veg) {
        preferenceValue = 'veg';
      } else if (preference.nonVeg) {
        preferenceValue = 'non-veg';
      }

      // Determine typeValue based on type object
      let typeValue = null;
      if (type.restaurant && type.tiffin) {
        typeValue = 'both';
      } else if (type.restaurant) {
        typeValue = 'restaurant';
      } else if (type.tiffin) {
        typeValue = 'tiffin';
      }

      // Create FormData instance for submission
      const formDataToSubmit = new FormData();

      // Define fields to be appended to FormData
      const fields = [
        ['employeeId', formData?.employeeId],
        ['photo', imageObject?.path ? {uri: imageObject.path} : null],
        ['name', formData?.name],
        ['ownerName', formData?.ownerName],
        ['email', formData?.email],
        ['phone', formData?.phone],
        ['onboardingStatus', onboardingStatus],
        ['openTime', formData?.openTime?.toString()], // Convert openTime to string
        ['closeTime', formData?.closeTime?.toString()], // Convert closeTime to string
        ['preference', preferenceValue],
        ['type', typeValue],
      ];

      // Append fields dynamically if they exist
      fields.forEach(([key, value]) => {
        if (value) formDataToSubmit.append(key, value);
      });
      // Append image if it exists
      if (imageObject?.uri) {
        formDataToSubmit.append('photo', {
          uri: imageObject.uri,
          name: imageObject.name || 'profile-pic.jpg',
          type: imageObject.type || 'image/jpeg',
        });
      }
      // Append coordinates if present
      if (coordinates?.latitude && coordinates?.longitude) {
        const coordinatesData = JSON.stringify({
          lat: coordinates.latitude,
          lng: coordinates.longitude,
        });
        formDataToSubmit.append('coordinates', coordinatesData);
      }

      console.log('formDataToSubmit', formDataToSubmit);
      // Call the update API
      UpdateRestaurantAPI(formDataToSubmit, navigation, resData);

      console.log('API called successfully');
    } catch (error) {
      console.error('Update res API fetch failed', error);
    }
  };

  // console.log('employeeId', employeeId);
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: COLORS.lightGray10}}
      keyboardShouldPersistTaps="handled">
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.lightGray10} />

      {/* <View style={styles.profileContainer}> */}
      <View style={styles.inputField}>
        <TouchableOpacity
          style={styles.imageContainer}
          activeOpacity={0.5}
          onPress={() => openRBSheet()}>
          <FastImage
            source={
              img
                ? {uri: img}
                : require('../../assets/image/grayBackground.png')
            }
            resizeMode="contain"
            style={styles.profileImg}
          />
          {/* <Image
            source={require('../../assets/image/camera.png')}
            resizeMode="contain"
            style={styles.cameraIcon}
          /> */}
        </TouchableOpacity>
        {/* {errors.imageObject ? (
          <Text style={styles.errorText}>{errors.imageObject}</Text>
        ) : null} */}
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

      <View
        style={
          {
            // marginTop: SIZES.height * 0.02,
            // paddingVertical: SIZES.height * 0.02,
          }
        }>
        <View style={styles.inputField}>
          <Input
            placeholder="Enter Restaurant Name"
            value={formData?.name}
            text="Restaurant Name"
            editable={true}
            onChangeText={value => handleInputChange('name', value)}
          />
          {errors.name ? (
            <Text style={styles.errorText}>{errors.name}</Text>
          ) : null}
        </View>
        <View style={styles.inputField}>
          <Input
            placeholder="Enter Owner Name"
            text="Owner Name"
            editable={true}
            value={formData?.ownerName}
            onChangeText={value => handleInputChange('ownerName', value)}
          />
          {errors.ownerName ? (
            <Text style={styles.errorText}>{errors.ownerName}</Text>
          ) : null}
        </View>
        <View style={styles.inputField}>
          <Input
            placeholder="Enter e - mail"
            text="E-mail"
            keyboardType="email-address"
            editable={true}
            value={formData?.email}
            onChangeText={value => handleInputChange('email', value)}
          />
          {errors.email ? (
            <Text style={styles.errorText}>{errors.email}</Text>
          ) : null}
        </View>
        <View style={styles.inputField}>
          <Input
            value={formData?.phone?.toString()}
            onChangeText={value => handleInputChange('phone', value)}
            placeholder="Enter Phone Number"
            keyboardType="numeric"
            maxLength={10}
            text="Phone"
            editable={true}
          />
          {errors.phone ? (
            <Text style={styles.errorText}>{errors.phone}</Text>
          ) : null}
        </View>
        <View style={styles.inputField}>
          <View style={styles.inputComp}>
            <Input
              value={selectedAddress || formData?.address}
              // value={selectedAddress ? selectedAddress : formData?.address}
              editable={false}
              multiline={true}
              textAlignVertical="top"
              placeholder={'Click to get location on maps'}
              showSoftInputOnFocus={false}
              text="Location"
              onPress={() =>
                navigation.navigate('GetLocationOnMaps', {passCode: 2})
              }
              onContentSizeChange={event => {
                setHeight(event.nativeEvent.contentSize.height);
              }}
            />

            {/* <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => navigation.navigate('GetLocationOnMaps')}> */}
            <Image
              source={require('../../assets/image/AddressLocation.png')}
              style={styles.image}
            />
            {/* </TouchableOpacity> */}
          </View>
          {errors.selectedAddress ? (
            <Text style={styles.errorText}>{errors.selectedAddress}</Text>
          ) : null}
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignSelf: 'center',
            flexDirection: 'row',
            width: SIZES.width * 0.88,
            gap: 50,
          }}>
          <DateTimePicker
            isImage={true}
            text={'Open Time'}
            placeholder="Select Time"
            value={
              formData?.openTime
                ? new Date(formData.openTime).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                : '' // Fallback if openTime is undefined or invalid
            }
            onChange={handleTimeChange1}
          />

          <DateTimePicker
            isImage={true}
            text={'Close Time'}
            placeholder="Select Time"
            value={
              formData?.closeTime
                ? new Date(formData.closeTime).toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                : '' // Fallback if openTime is undefined or invalid
            }
            onChange={handleTimeChange2}
          />
        </View>
        <View>
          {errors.selectedTime ? (
            <Text style={styles.errorText}>{errors.selectedTime}</Text>
          ) : null}
        </View>
        <View
          style={{
            marginLeft: SIZES.width * 0.067,
            marginTop: SIZES.height * 0.02,
          }}>
          <UnderlinedText
            text="Services Provided"
            styletext={styles.textUnderline}
            underlineWidth={100}
            underlineHeight={2}
            underlineColor={COLORS.primary}
          />
        </View>
        <View
          style={[
            styles.contain,
            {
              gap: SIZES.width * 0.08,
              justifyContent: 'flex-start',
              marginLeft: SIZES.width * 0.02,
            },
          ]}>
          <TiffinTickMark
            source={require('../../assets/image/2personTable.png')}
            children="Restaurant"
            isSelected={type.restaurant === 'restaurant'}
            onSelect={() => {
              setType(prevType => ({
                ...prevType,
                restaurant:
                  prevType.restaurant === 'restaurant' ? null : 'restaurant', // Toggle restaurant
              }));
            }}
            customStyles={styles.customStylesSerices}
          />

          <TiffinTickMark
            source={require('../../assets/image/tiffin.png')}
            children="Tiffin"
            isSelected={type.tiffin === 'tiffin'}
            onSelect={() => {
              setType(prevType => ({
                ...prevType,
                tiffin: prevType.tiffin === 'tiffin' ? null : 'tiffin', // Toggle tiffin
              }));
            }}
          />
        </View>
        <View>
          {errors.serivesProvided ? (
            <Text style={styles.errorText}>{errors.serivesProvided}</Text>
          ) : null}
        </View>
        <View
          style={{
            marginLeft: SIZES.width * 0.067,
            marginTop: SIZES.height * 0.02,
          }}>
          <UnderlinedText
            text="Preferences"
            styletext={styles.textUnderline}
            underlineWidth={100}
            underlineHeight={2}
            underlineColor={COLORS.primary}
          />
        </View>
        <View
          style={[
            styles.contain,
            {
              gap: SIZES.width * 0.1,
              justifyContent: 'flex-start',
              marginLeft: SIZES.width * 0.02,
              // backgroundColor: 'red',
            },
          ]}>
          <TiffinTickMark
            source={require('../../assets/image/non_vegIcon.png')}
            children="Non-Veg"
            isSelected={preference?.nonVeg === 'non-veg'}
            onSelect={() => {
              console.log('non-veg');
              setPreference(prev => ({
                ...prev,
                nonVeg: prev.nonVeg === 'non-veg' ? null : 'non-veg',
              }));
            }}
          />

          <TiffinTickMark
            source={require('../../assets/image/vegIcon.png')}
            children="Veg"
            isSelected={preference?.veg === 'veg'}
            onSelect={() => {
              console.log('veg');

              setPreference(prev => ({
                ...prev,
                veg: prev.veg === 'veg' ? null : 'veg',
              }));
            }}
          />
        </View>
        <View>
          {errors.prefer ? (
            <Text style={styles.errorText}>{errors.prefer}</Text>
          ) : null}
        </View>

        <View
          style={{
            marginLeft: SIZES.width * 0.067,
            marginTop: SIZES.height * 0.02,
          }}>
          <UnderlinedText
            text="Onboarding Status"
            styletext={styles.textUnderline}
            underlineWidth={100}
            underlineHeight={2}
            underlineColor={COLORS.primary}
          />
        </View>
        <View style={styles.inputField}>
          <View style={styles.contain}>
            <OnboardingStatus
              source={require('../../assets/image/pendingIcon.png')}
              belowText="Onboarding Pending"
              markIconSource={require('../../assets/image/tickMark.png')}
              isSelected={onboardingStatus === 'PENDING'}
              onSelect={() => setonboardingStatus('PENDING')}
              // markIconSource={yourCustomTickMark}
              customStyles={styles.onboardingStatus}
            />
            <OnboardingStatus
              source={require('../../assets/image/installedIcon.png')}
              markIconSource={require('../../assets/image/tickMark.png')}
              isSelected={onboardingStatus === 'APP_INSTALLED'}
              onSelect={() => setonboardingStatus('APP_INSTALLED')}
              belowText="App Installed"
              customStyles={styles.onboardingStatus}
            />

            <OnboardingStatus
              source={require('../../assets/image/onboardIcon.png')}
              markIconSource={require('../../assets/image/tickMark.png')}
              isSelected={onboardingStatus === 'FULLY_ONBOARD'}
              onSelect={() => setonboardingStatus('FULLY_ONBOARD')}
              belowText="Fully Onboard"
              customStyles={styles.onboardingStatus}
            />
          </View>
          {errors.onboardingStatus ? (
            <Text style={styles.errorText}>{errors.onboardingStatus}</Text>
          ) : null}
        </View>

        <View style={{flex: 1}}></View>
        <SimpleButton
          onPress={() => handleSubmit()}
          // title="Get Otp"
          children="Update"
          isLoading={loading}
          containerStyle={styles.button}
          style={styles.textButtom}
        />
      </View>
    </ScrollView>
  );
};
const mapStateToProps = state => ({});

const mapDispatchToProps = {
  UpdateRestaurantAPI,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRestaurant);
