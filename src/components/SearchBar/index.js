import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import {NativeSearchBar} from 'react-native-screens';
import {COLORS, FONTS, SIZES} from '../../constants';

const SearchBar = ({onTextChange}) => {
  console.log(onTextChange);

  return (
    <View style={styles.content}>
      <Image
        source={require('../../assets/image/searchIcon.png')}
        style={styles.image}
      />
      <TextInput
        onTextChange={onTextChange}
        placeholder="Search Eg : Aman, 1, e.t.c."
        style={styles.text}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  content: {
    marginVertical: 18,
    alignSelf: 'center',
    width: SIZES.width * 0.87,
    paddingVertical: 5,
    paddingHorizontal: 7,
    borderRadius: 14,
    borderWidth: 1,
    backgroundColor: COLORS.white,
    borderColor: COLORS.gray20,
    justifyContent: 'flex-start',
    // gap: 10,
    height: 52,
    alignItems: 'center',
    flexDirection: 'row',
  },
  image: {
    // backgroundColor: 'red',
    color: 'red',
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 30,
    margin: 5,
    width: SIZES.width * 0.06, //25
    height: SIZES.width * 0.06, //25
    resizeMode: 'cover',
  },
  text: {
    fontFamily: FONTS.LexThin,
    fontSize: 17,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignSelf: 'center',
    // backgroundColor: 'red',
    width: SIZES.width * 0.75,
  },
});
