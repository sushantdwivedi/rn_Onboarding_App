import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../../constants';
import ImageCropPicker from 'react-native-image-crop-picker';

const ImagePick = ({style, styleImage, sourceType, children, onImagePick}) => {
  const pickImage = () => {
    if (sourceType === 'gallery') {
      ImageCropPicker.openPicker({
        cropping: true,
        freeStyleCropEnabled: true,
        mediaType: 'photo',
      }).then(image => {
        // console.log('Picked image from gallery:', image);
        onImagePick(image);
      });
    } else if (sourceType === 'camera') {
      ImageCropPicker.openCamera({
        cropping: true,
        freeStyleCropEnabled: true,
        mediaType: 'photo',
      }).then(image => {
        // console.log('Picked image from camera:', image);
        onImagePick(image);
      });
    }
  };

  return (
    <TouchableOpacity onPress={pickImage} style={[styles.box, style]}>
      {children}
    </TouchableOpacity>
  );
};

export default ImagePick;

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
