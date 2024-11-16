import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {COLORS, FONTS, SIZES, IMAGES} from '../../constants';
import RightArrowButton from '../rightArrowButton/RightArrowButton';
import CustomButton from '../customButton/CustomButton';

const data = [
  {
    id: '1',
    title: 'Grow your restaurant Business',
    subtitle:
      "Grow your Business By Manage Monthly System Or Sale your thali's On Apna Thali.",
    image: require('../../assets/image/splash1Img.png'),
  },
  {
    id: '2',
    title: 'Manage your Monthly System.',
    subtitle:
      'Many features to manage monthly system like : Qr Code Scan, Send SMS, Notification, Whatsapp.',
    image: require('../../assets/image/splash2Img.png'),
  },
  {
    id: '3',
    title: 'Increase Your thali Sales.',
    subtitle:
      'Submit Your thali photos, and get customers from Apna thali by Plan : JAHA JAO WAHA KHAO..',
    image: require('../../assets/image/splash3Img.png'),
  },
];

const Slide = ({item}) => {
  return (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );
};

const SplashScreen = props => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const ref = useRef(null);

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / SIZES.width);
    setCurrentSlideIndex(currentIndex);
    // console.log(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    const offset = nextSlideIndex * SIZES.width * 0.9;
    ref?.current?.scrollToOffset({offset});
    setCurrentSlideIndex(nextSlideIndex);
  };

  return (
    <LinearGradient colors={['#FF4B3C', '#F09722']} style={styles.container}>
      <StatusBar
        // hidden={true}
        translucent={true}
        backgroundColor={COLORS.transparent}
      />

      <View style={styles.content}>
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          pagingEnabled
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <Slide item={item} />}
          keyExtractor={item => item.id}
        />
        {currentSlideIndex === data.length - 1 ? (
          <CustomButton
            children="Get Started"
            containerStyle={{
              position: 'absolute',
              bottom: SIZES.height * 0.04,

              // right: SIZES.width * 0.08,
            }}
            onPress={() => props.navigation.navigate('Login')}
          />
        ) : (
          <RightArrowButton
            style={styles.button}
            fontName="fa-thin fa-right-to-bracket"
            // source={require('../../assets/fonts/rightArrow.png')}
            onPress={goNextSlide}
          />
        )}
      </View>
    </LinearGradient>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZES.width,
    // height: SIZES.height,
  },
  content: {
    marginTop: SIZES.height * 0.02,
    width: SIZES.width * 0.9,
    height: SIZES.height * 0.92,
    borderRadius: SIZES.width * 0.04,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  slide: {
    width: SIZES.width * 0.9, // Ensure each slide takes up full screen width
    alignItems: 'center',
  },
  image: {
    width: SIZES.width * 0.8,
    height: SIZES.height * 0.5,
    resizeMode: 'contain',
    // backgroundColor: 'red',
    marginBottom: 10,
  },
  textContainer: {
    paddingHorizontal: 30,
    // maxWidth: '90%',
  },
  title: {
    color: COLORS.black,
    fontSize: SIZES.padding,
    fontFamily: FONTS.LexBold,
    letterSpacing: 1,
    marginVertical: 22,
    lineHeight: 40,
    textAlign: 'left',
  },
  subtitle: {
    color: COLORS.gray,
    fontSize: SIZES.font,
    fontFamily: FONTS.LexLight,
    letterSpacing: 0.3,
    textAlign: 'left',
    lineHeight: 25,
  },
  button: {
    position: 'absolute',
    bottom: SIZES.height * 0.03,
    right: SIZES.width * 0.08,
    // marginTop: -SIZES.width * 0.9,
    // right: -SIZES.width * 0.3,
  },
});
