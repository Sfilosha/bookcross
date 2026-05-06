import images from '@assets/images';
import { borderRadius } from '../../theme/numbers';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import Badge from '@components/Badge/Badge';

interface BookCoverThumbnailProps {
  imagePath?: ImageSourcePropType | { uri: string | undefined };
  style?: ViewStyle;
  status?: boolean;
}

const CoverPlaceholder = images.placeholder.bookCover;

function BookCoverThumbnail({
  imagePath,
  status,
  style,
}: BookCoverThumbnailProps) {
  const getSource = () => {
    console.log(imagePath);
    if (!imagePath) return CoverPlaceholder;
    if (typeof imagePath === 'number') return imagePath;
    return { uri: imagePath };
  };

  return (
    <View style={[styles.container, style]}>
      {status && (
        <Badge
          color="success"
          size="small"
          value="Lended"
          style={styles.badge}
        />
      )}
      <Image
        style={[styles.image, status && styles.imageBooked]}
        resizeMode="cover"
        source={getSource()}
      />
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
  imageBooked: {
    opacity: 0.3,
  },
  badge: {
    position: 'absolute',
    zIndex: 2,
    right: 8,
    top: 8,
  },
});

export default BookCoverThumbnail;
