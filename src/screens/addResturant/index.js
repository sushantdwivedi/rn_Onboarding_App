import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';

import {COLORS, FONTS, SIZES} from '../../constants';
import OnboardingStatus from '../../components/OnboardingStatus';
import Input from '../../components/Input';
import DateTimePicker from '../../components/DateTimePicker';
import SimpleButton from '../../components/simpleButton';
import styles from './styles';
import UnderlinedText from '../../components/underlineText';
import RBSheet from 'react-native-raw-bottom-sheet';
import ImagePickBottom from '../../components/ImagePickBottom';
import ImageCropPicker from 'react-native-image-crop-picker';
import FastImage from 'react-native-fast-image';
import {useRoute} from '@react-navigation/native';
import {connect} from 'react-redux';
import {AddRestaurantApi} from '../../redux/actions/restaurantAction';
import {getTarget} from '../../redux/actions/getTargetAction';
import SelectDropdown from 'react-native-select-dropdown';
import {ImagePermission} from '../../services/permissions';
import TiffinTickMark from '../../components/TiffinTickMark';

const AddRestaurant = ({
  getTarget,
  AddRestaurantApi,
  target,
  employeeId,
  navigation,
}) => {
  const route = useRoute();

  // const [selectedImage, setSelectedImage] = useState(null);
  const [firstImg, setFirstImg] = useState(null);
  const [img, setImg] = useState();
  // const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //  postData
  const targetD = route?.params?.targetT;
  const [cluster, setCluster] = useState(null);

  const [imageObject, setImageObject] = useState(null);

  const [selectedTime, setSelectedTime] = useState({
    openTime: null,
    closeTime: null,
  });

  const [type, setType] = useState({restaurant: null, tiffin: null});

  const [name, setName] = useState(null);
  const [ownerName, setOwnerName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [onboardingStatus, setonboardingStatus] = useState(null);
  const {selectedAddress, coordinates, targetL} = route.params || {};
  const coordinatesAdd = [coordinates];
  const [errors, setErrors] = useState({
    // imageObject: '',
    cluster: '',
    name: '',
    ownerName: '',
    email: '',
    phone: '',
    selectedAddress: '',
    onboardingStatus: '',
    selectedTime: '',
    serivesProvided: '',
    prefer: '',
  });
  // console.log('onboardingStatus', onboardingStatus);

  const [height, setHeight] = useState(SIZES.height * 0.047);
  // const handleTextChange = input => {
  //   // Adjust the height based on the input length
  //   const newHeight = 40 + Math.ceil(selectedAddress.length / 20) * 20;
  //   setHeight(newHeight);
  // };

  // console.log('selectedAddress', selectedAddress);
  const refRBSheet = useRef();

  const openRBSheet = async () => {
    const hasPermission = await ImagePermission(); // Check permissions

    if (hasPermission) {
      refRBSheet.current.open(); // Open the RBSheet if permissions are granted
    }
  };
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (targetD || targetL) {
      setCluster(targetD?.clusterId || targetL?.clusterId);
    } else {
      setCluster(cluster);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await getTarget();
      // setLoading(false);
      // console.log('target', target);
    };

    fetchData();
  }, []);

  // if (loading) {
  //   return (
  //     <View style={styles.loadingContainer}>
  //       <ActivityIndicator size="large" color={COLORS.orange2} />
  //     </View>
  //   );
  // }

  const ImagePick = async cond => {
    // try {
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
        // resizeMode: 'cover',
      });
    }
    setFirstImg(image.path);
    setImg(image.path);
    setImageObject({
      uri: image.path,
      name: image.filename || Date.now() + '-' + image.path.slice(-10),
      type: image.mime,
    });
    refRBSheet.current.close();
    // }
    // catch (err) {
    //   setError('Failed to pick image. Please try again.');
    // }
  };

  const handleTimeChange1 = date => {
    if (date instanceof Date && !isNaN(date)) {
      setSelectedTime(prevSelectedTime => ({
        ...prevSelectedTime,
        openTime: date,
      }));
      setErrors(prevErrors => ({...prevErrors, selectedTime: ''}));
    }
    // if ( date) {
    // }
  };

  const handleTimeChange2 = date => {
    if (date instanceof Date && !isNaN(date)) {
      setSelectedTime(prevSelectedTime => ({
        ...prevSelectedTime,
        closeTime: date,
      }));
      setErrors(prevErrors => ({...prevErrors, selectedTime: ''}));
    }
  };
  const clusterOptions = target?.map(cluster => ({
    title: cluster?.clusterId?.name,
    value: cluster?.clusterId?._id,
  }));
  // console.log('clusterOptions', clusterOptions);
  const indianPhoneNumberRegex = /^[6-9]\d{9}$/;
  const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleFocus = field => {
    console.log('focus active');
    if (name.trim() === '') {
      setErrors({...errors, name: 'Restaurant Name is required'});
    }
    if (field === 'email' && !email) {
      setErrors(prevErrors => ({
        ...prevErrors,
        email: 'Please enter the email',
      }));
    }
    if (field === 'phone' && !phone) {
      setErrors(prevErrors => ({
        ...prevErrors,
        phone: 'Please enter the phone number',
      }));
    }
  };

  const handlePreSubmit = () => {
    let errorFlag = false;

    const tempErrors = {
      cluster: '',
      name: '',
      ownerName: '',
      email: '',
      phone: '',
      selectedAddress: '',
      onboardingStatus: '',
      selectedTime: '',
      serivesProvided: '',
      prefer: '',
    };

    const setError = (field, message) => {
      tempErrors[field] = message;
      errorFlag = true;
    };

    const validations = [
      {value: cluster, field: 'cluster', message: 'Please enter the cluster'},
      {value: name, field: 'name', message: 'Please enter the restaurant name'},
      {
        value: ownerName,
        field: 'ownerName',
        message: 'Please enter the owner name',
      },
      {
        value: email,
        field: 'email',
        message: 'Please enter the email',
        additionalCheck: () => !validEmail.test(email),
        additionalMessage: 'Please enter a valid email',
      },
      {
        value: phone,
        field: 'phone',
        message: 'Please enter the phone number',
        additionalCheck: () => !indianPhoneNumberRegex.test(phone),
        additionalMessage: 'Please enter a valid phone number',
      },
      {
        value: selectedAddress,
        field: 'selectedAddress',
        message: 'Please select the address',
      },
      {
        value: onboardingStatus,
        field: 'onboardingStatus',
        message: 'Please select the onboarding status',
      },
    ];

    validations.forEach(
      ({value, field, message, additionalCheck, additionalMessage}) => {
        if (!value) {
          setError(field, message);
        } else if (additionalCheck && additionalCheck()) {
          setError(field, additionalMessage);
        }
      },
    );
    if (!selectedTime.openTime || !selectedTime.closeTime) {
      setError('selectedTime', 'Please select the Open and close time');
    } else {
      tempErrors.selectedTime = ''; // Clear error if times are filled
    }

    if (!type.restaurant && !type.tiffin) {
      setError(
        'serivesProvided',
        'Please select at least one service provided',
      );
    }

    // if (!preferenceNV && !preferenceV) {
    //   setError('prefer', 'Please select at least one preference');
    // }

    setErrors(tempErrors);

    if (!errorFlag) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    try {
      // Determine typeValue based on type object
      let typeValue = null;
      if (type.restaurant && type.tiffin) {
        typeValue = 'both';
      } else if (type.restaurant) {
        typeValue = 'restaurant';
      } else if (type.tiffin) {
        typeValue = 'tiffin';
      }

      const formData = new FormData();

      // Function to append to formData only if value is present
      const appendField = (key, value) => {
        if (value !== undefined && value !== null)
          formData.append(key, value.toString());
      };

      // Append all fields, including conditionals

      // Append image if it exists
      if (imageObject?.uri) {
        formData.append('photo', {
          uri: imageObject.uri,
          name: imageObject.name || 'photo.jpg',
          type: imageObject.type || 'image/jpeg',
        });
      }
      console.log(imageObject);

      appendField('employeeId', employeeId);
      appendField('clusterId', targetL?.clusterId?._id || cluster?.value);
      appendField('name', name);
      appendField('ownerName', ownerName);
      appendField('email', email);
      appendField('phone', phone);

      appendField(
        'coordinates',
        JSON.stringify({
          lat: coordinates?.latitude,
          lng: coordinates?.longitude,
        }),
      );
      appendField('openTime', selectedTime.openTime);
      appendField('closeTime', selectedTime.closeTime);
      appendField('type', typeValue);
      appendField('onboardingStatus', onboardingStatus);

      console.log('formData', formData);
      AddRestaurantApi(formData, navigation);

      console.log('API called successfully');
    } catch (error) {
      console.error('API fetch failed', error);
    }
  };

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
        </TouchableOpacity>
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

      {targetD || targetL ? (
        <View style={styles.inputField}>
          <View style={styles.selectDropdown}>
            <SelectDropdown
              data={clusterOptions}
              disabled
              renderButton={() => (
                <View
                  style={[
                    styles.dropdownButtonStyle,
                    {width: SIZES.width * 0.85},
                  ]}>
                  <Text style={styles.dropdownButtonTxtStyle}>
                    {targetD?.clusterId?.name || targetL?.clusterId?.name}
                  </Text>
                  <Image
                    source={require('../../assets/image/SortDown.png')}
                    style={[styles.image, {paddingRight: 10}]}
                  />
                </View>
              )}
            />
          </View>
          {errors.targetData ? (
            <Text style={styles.errorText}>{errors.targetData}</Text>
          ) : null}
        </View>
      ) : (
        <View style={styles.inputField}>
          <View style={styles.selectDropdown}>
            <SelectDropdown
              data={clusterOptions}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
                setCluster(selectedItem);
                if (errors.cluster) {
                  setErrors({...errors, cluster: ''});
                }
              }}
              renderButton={(selectedItem, isOpen) => {
                return (
                  <View
                    style={[
                      styles.dropdownButtonStyle,
                      {width: SIZES.width * 0.85},
                    ]}>
                    <Text style={styles.dropdownButtonTxtStyle}>
                      {(selectedItem && selectedItem.title) ||
                        'Select your area'}
                    </Text>

                    <Image
                      source={require('../../assets/image/SortDown.png')}
                      style={[styles.image, {paddingRight: 10}]}
                    />
                  </View>
                );
              }}
              renderItem={(item, index, isSelected) => {
                return (
                  <View
                    style={{
                      ...styles.dropdownItemStyle,
                      ...(isSelected && {backgroundColor: COLORS.orange3}),
                    }}>
                    <Text style={styles.dropdownItemTxtStyle}>
                      {item.title}
                    </Text>
                  </View>
                );
              }}
              showsVerticalScrollIndicator={false}
              dropdownStyle={styles.dropdownMenuStyle}
              // renderSearchInputRightIcon={require('../../assets/image/downArrow.png')}
            />
            {/* 
            <Image
              source={require('../../assets/image/downArrow.png')}
              style={[styles.image, {paddingRight: 10}]}
            /> */}
          </View>
          {errors.cluster ? (
            <Text style={styles.errorText}>{errors.cluster}</Text>
          ) : null}
        </View>
      )}

      <View style={styles.inputField}>
        <Input
          placeholder="Enter Restaurant Name"
          text="Restaurant Name"
          editable={true}
          // multiline={true}
          onFocus={handleFocus}
          // onBlur={handleBlur}
          onChangeText={text => {
            setName(text);
            if (text) {
              if (text.trim() !== '') {
                setErrors({...errors, name: ''});
              }
            } else {
              setErrors(prevErrors => ({
                ...prevErrors,
                name: 'Restaurant Name is required *',
              }));
            }
          }}
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
          onChangeText={text => {
            setOwnerName(text);
            if (text) {
              if (errors.ownerName) {
                setErrors({...errors, ownerName: ''});
              }
            } else {
              setErrors(prevErrors => ({
                ...prevErrors,
                ownerName: 'Owner Name is required *',
              }));
            }
          }}
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
          onFocus={() => handleFocus('email')}
          onChangeText={text => {
            setEmail(text);
            if (text) {
              if (!validEmail.test(text)) {
                setErrors(prevErrors => ({
                  ...prevErrors,
                  email: 'Please enter a valid email',
                }));
              } else {
                setErrors(prevErrors => ({...prevErrors, email: ''}));
              }
            } else {
              setErrors(prevErrors => ({
                ...prevErrors,
                email: 'Email is required *',
              }));
            }
          }}
        />
        {errors.email ? (
          <Text style={styles.errorText}>{errors.email}</Text>
        ) : null}
      </View>
      <View style={styles.inputField}>
        <Input
          placeholder="Enter Phone Number"
          keyboardType="numeric"
          maxLength={10}
          text="Phone"
          editable={true}
          onFocus={() => handleFocus('phone')}
          onChangeText={text => {
            setPhone(text);

            let phoneError = '';

            if (!text) {
              phoneError = 'Phone number is required *';
            } else if (text.length !== 10) {
              phoneError = 'Phone number should be exactly 10 digits';
            } else if (!indianPhoneNumberRegex.test(text)) {
              phoneError = 'Please enter a valid phone number';
            }

            setErrors(prevErrors => ({
              ...prevErrors,
              phone: phoneError,
            }));
          }}
        />
        {errors.phone ? (
          <Text style={styles.errorText}>{errors.phone}</Text>
        ) : null}
      </View>
      <View style={styles.inputField}>
        {/* <View style={styles.inputComp}> */}
        <Input
          value={selectedAddress}
          editable={false}
          multiline={true}
          textAlignVertical="top"
          placeholder={'Click to get location on maps'}
          showSoftInputOnFocus={false}
          text="Location"
          onPress={() => {
            navigation.navigate('GetLocationOnMaps', {
              passCode: 1,
              targetD: targetD,
            });
          }}
          onContentSizeChange={event => {
            setHeight(event.nativeEvent.contentSize.height);
            if (errors.selectedAddress) {
              setErrors({...errors, selectedAddress: ''});
            }
          }}
          inputImage={require('../../assets/image/AddressLocation.png')}
          inputImageStyle={styles.image}
        />
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
            selectedTime?.openTime
              ? new Date(selectedTime.openTime).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })
              : ''
          }
          onChange={handleTimeChange1}
        />

        <DateTimePicker
          isImage={true}
          text={'Close Time'}
          placeholder="Select Time"
          value={
            selectedTime?.closeTime
              ? new Date(selectedTime.closeTime).toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })
              : ''
          }
          onSelect={() => {
            if (
              selectedTime.openTime &&
              selectedTime.closeTime &&
              errors.selectedTime
            ) {
              setErrors({...errors, selectedTime: ''}); // Clear error when both times are selected
            }
          }}
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
                prevType.restaurant === 'restaurant' ? null : 'restaurant',
            }));
            if (errors.serivesProvided) {
              setErrors({...errors, serivesProvided: ''});
            }
          }}
          customStyles={styles.customStylesSerices}
        />
        <TiffinTickMark
          source={require('../../assets/image/tiffin.png')}
          children="Tiffin "
          isSelected={type.tiffin === 'tiffin'}
          onSelect={() => {
            setType(prevType => ({
              ...prevType,
              tiffin: prevType.tiffin === 'tiffin' ? null : 'tiffin',
            }));
            if (errors.serivesProvided) {
              setErrors({...errors, serivesProvided: ''});
            }
          }}
        />
      </View>
      <View>
        {errors.serivesProvided ? (
          <Text style={styles.errorText}>{errors.serivesProvided}</Text>
        ) : null}
      </View>
      {/* <View
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
          isSelected={preferenceNV === 'Non-Veg'}
          onSelect={() => {
            setPreferenceNV(prevType =>
              prevType === 'Non-Veg' ? null : 'Non-Veg',
            );
            if (errors.prefer) {
              setErrors({...errors, prefer: ''});
            }
          }}
        />
        <TiffinTickMark
          source={require('../../assets/image/vegIcon.png')}
          children="Veg "
          isSelected={preferenceV === 'Veg'}
          onSelect={() => {
            setPreferenceV(prevType => (prevType === 'Veg' ? null : 'Veg'));
            if (errors.prefer) {
              setErrors({...errors, prefer: ''});
            }
          }}
        />
      </View>
      <View>
        {errors.prefer ? (
          <Text style={styles.errorText}>{errors.prefer}</Text>
        ) : null}
      </View> */}
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

      <View
        style={[
          styles.contain,
          {
            gap: SIZES.width * 0.1,
          },
        ]}>
        <OnboardingStatus
          source={require('../../assets/image/pendingIcon.png')}
          belowText="Onboarding Pending"
          markIconSource={require('../../assets/image/tickMark.png')}
          isSelected={onboardingStatus === 'PENDING'}
          onSelect={() => {
            setonboardingStatus('PENDING');
            if (errors.onboardingStatus) {
              setErrors({...errors, onboardingStatus: ''});
            }
          }}
          // markIconSource={yourCustomTickMark}
          customStyles={styles.onboardingStatus}
        />
        <OnboardingStatus
          source={require('../../assets/image/installedIcon.png')}
          markIconSource={require('../../assets/image/tickMark.png')}
          isSelected={onboardingStatus === 'APP_INSTALLED'}
          onSelect={() => {
            setonboardingStatus('APP_INSTALLED');
            if (errors.onboardingStatus) {
              setErrors({...errors, onboardingStatus: ''});
            }
          }}
          belowText="App Installed"
          customStyles={styles.onboardingStatus}
        />

        <OnboardingStatus
          source={require('../../assets/image/onboardIcon.png')}
          markIconSource={require('../../assets/image/tickMark.png')}
          isSelected={onboardingStatus === 'FULLY_ONBOARD'}
          onSelect={() => {
            setonboardingStatus('FULLY_ONBOARD');
            if (errors.onboardingStatus) {
              setErrors({...errors, onboardingStatus: ''});
            }
          }}
          belowText="Fully Onboard"
          customStyles={styles.onboardingStatus}
        />
      </View>
      {errors.onboardingStatus ? (
        <Text style={styles.errorText}>{errors.onboardingStatus}</Text>
      ) : null}

      <SimpleButton
        // onPress={() => props.navigation.navigate('BottomTab')}
        onPress={() => handlePreSubmit()}
        isLoading={loading}
        // title="Get Otp"
        children="Submit"
        containerStyle={styles.button}
        style={styles.textButtom}
      />
      {/* </View> */}
    </ScrollView>
  );
};
const mapStateToProps = state => ({
  target: state.getTarget?.targetT,
  employeeId: state.auth.userData._id,
});

const mapDispatchToProps = {
  getTarget,
  AddRestaurantApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRestaurant);
