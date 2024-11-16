import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES} from '../../constants';
import InputTwo from '../../components/InputTwo';
import SimpleButton from '../../components/simpleButton';
import {LoginApi} from '../../redux/actions/authAction';
import {connect} from 'react-redux';
import Toast from 'react-native-toast-message';
import FastImage from 'react-native-fast-image';
const STATUS_BAR_HEIGHT = StatusBar.currentHeight;

const Login = ({navigation, LoginApi}) => {
  // const [loadingIndicator, setLoadingIndicator] = useState(false);
  const [loading, setLoading] = useState(false);

  const [postData, setPostData] = useState({
    email: null,
    password: null,
  });

  const handleChange = (name, value) => {
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    setLoading(true);
    // Simulate an async operation
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    const {email, password} = postData;

    if (!email || !password) {
      Toast.show({
        type: 'warning',
        topOffset: STATUS_BAR_HEIGHT + SIZES.height * 0.046,
        text1: 'Missing Information',
        text2: 'Please fill in both email and password.',
        visibilityTime: 3000,
        autoHide: true,
      });
      return;
    }

    console.log('postData login', postData);

    LoginApi(postData, true, navigation, (data, member) => {
      // setLoadingIndicator(data);
      if (member) {
        setNameField(true);
        scrollend();
      }
    });
  };

  return (
    <KeyboardAvoidingView
      behavior="padding" // or "position"
      style={{flex: 1}}
      enabled>
      <ScrollView
        // contentContainerStyle={styles.container}
        contentContainerStyle={[styles.container, {minHeight: SIZES.height}]}
        keyboardShouldPersistTaps="handled">
        <StatusBar
          // hidden={true}
          barStyle="light-content"
          translucent={true}
          backgroundColor={COLORS.primary}
        />
        <View style={styles.logoContainer}>
          <FastImage
            source={require('../../assets/image/apnaThaliLogo.png')}
            style={{
              position: 'absolute',
              top: SIZES.height * 0.038,

              width: SIZES.width * 0.492,
              height: SIZES.width * 0.492,
              ...styles.image,
            }}
          />
        </View>
        <View style={[styles.inputContainer]}>
          <Text style={styles.text}>Login</Text>
          <InputTwo
            placeholderText="Email"
            keyboardType="email-address"
            onChangeText={text => {
              handleChange('email', text);
            }}
            placeholderTextColor={styles.placeholder.color}
            style={[styles.input]}
          />
          <InputTwo
            placeholderText="Password"
            // keyboardType="numeric"
            // maxLength={8}
            onChangeText={text => {
              handleChange('password', text);
            }}
            // keyboardType="default"
            secureTextEntry={true}
            placeholderTextColor={styles.placeholder.color}
            style={[styles.input]}
          />
          <SimpleButton
            containerStyle={styles.button}
            style={styles.textButtom}
            // children={Login}
            // loadingIndicator={loadingIndicator}
            // disabled={loadingIndicator}
            isLoading={loading}
            onPress={() => handleSubmit()}>
            Login
          </SimpleButton>
        </View>
        <FastImage
          source={require('../../assets/image/zicZacTower.png')}
          style={{
            position: 'absolute',
            // bottom: 0,
            marginTop: SIZES.height * 0.809,
            width: SIZES.width,
            height: SIZES.height * 0.229,
            ...styles.image,
          }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  LoginApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  logoContainer: {
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: SIZES.width * 0.732, //287
    borderBottomRightRadius: SIZES.width * 0.732, //287
    width: SIZES.width * 0.732,
    height: SIZES.height * 0.33,
  },
  inputContainer: {
    backgroundColor: COLORS.transparentWhite3,
    borderRadius: SIZES.width * 0.067, //25
    justifyContent: 'center',

    alignSelf: 'center',
    marginTop: SIZES.height * 0.0187, //16

    width: SIZES.width * 0.789, //309
    height: SIZES.height * 0.433, // 349
    // marginBottom: SIZES.height * 0.0187,
  },
  text: {
    color: COLORS.white,
    alignSelf: 'center',
    marginTop: SIZES.height * 0.0185, //15

    fontFamily: FONTS.LexBold,
    fontSize: SIZES.width * 0.051, //20
  },
  placeholder: {
    color: COLORS.white,
  },
  input: {
    borderColor: COLORS.white,
    width: SIZES.width * 0.65, //255

    borderBottomWidth: 1.6,
    paddingHorizontal: SIZES.width * 0.028, //10

    color: COLORS.white,
    alignSelf: 'center',
    marginTop: SIZES.height * 0.05, //40

    fontFamily: FONTS.LexMedium,
    fontSize: SIZES.width * 0.04, //16
  },
  button: {
    marginTop: SIZES.width * 0.137, //55

    alignSelf: 'center',
    borderRadius: SIZES.width * 0.018, //6

    backgroundColor: COLORS.primary,
    width: SIZES.width * 0.586, //230

    height: SIZES.height * 0.045, // 36
  },
  textButtom: {
    borderColor: COLORS.white,
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.width * 0.042, //16
  },
});
