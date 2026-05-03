import { borderRadius } from '../../theme/numbers';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

interface BookCoverThumbnailProps {
  imagePath?: ImageSourcePropType;
  style?: ViewStyle;
}

const CoverPlaceholder = require('@/assets/images/placeholders/bookcover.png');

function BookCoverThumbnail({
  imagePath = CoverPlaceholder,
  style,
}: BookCoverThumbnailProps) {
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.image} resizeMode="cover" source={imagePath} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 3 / 4,
    overflow: 'hidden', // Required for Android border radius
    borderTopLeftRadius: borderRadius.xsmall,
    borderTopRightRadius: borderRadius.medium,
    borderBottomLeftRadius: borderRadius.xsmall,
    borderBottomRightRadius: borderRadius.medium,
    backgroundColor: 'grey',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default BookCoverThumbnail;
