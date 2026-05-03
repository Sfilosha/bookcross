import { Colors } from '../../theme/colors';
import { number } from '../../theme/numbers';
import { TextStyles } from '../../theme/typography';
import React from 'react';
import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import BookCoverThumbnail from '../BookCoverThumbnail/BookCoverThumbnail';

export type BookCardVariant = 'vertical' | 'horizontal';

interface BookCardProps {
  title: string;
  subtitle: string;
  imagePath: ImageSourcePropType;
  variant?: BookCardVariant;
  tag?: string;
  onPress?: () => void;
  disabled?: boolean;
}

function BookCard({
  variant = 'vertical',
  tag,
  title,
  subtitle,
  imagePath,
  onPress,
  disabled = false,
}: BookCardProps) {
  const theme = useColorScheme() ?? 'light';
  const t = Colors[theme];
  const isDisabled = disabled;

  if (variant === 'vertical') {
    // Vertical
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={number.activeOpacity}
        disabled={isDisabled}
      >
        <View style={styles.verticalContainer}>
          <BookCoverThumbnail style={styles.cover} imagePath={imagePath} />
          <Text
            numberOfLines={1}
            style={[TextStyles.actionM, { color: t.textPrimary }]}
          >
            {title}
          </Text>
          <Text
            numberOfLines={1}
            style={[TextStyles.bodyM, { color: t.textSecondary }]}
          >
            {subtitle}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  // Horizontal
  return (
    <TouchableOpacity>
      <View style={styles.horizontalContainer}>
        <View style={styles.horizontalImageWrapper}>
          <BookCoverThumbnail imagePath={imagePath} />
        </View>
        <View style={styles.horizontalContent}>
          <Text
            numberOfLines={2}
            style={[TextStyles.actionM, { color: t.textPrimary }]}
          >
            {title}
          </Text>
          <Text
            numberOfLines={2}
            style={[TextStyles.bodyS, { color: t.textSecondary }]}
          >
            {subtitle}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  verticalContainer: {
    width: '100%',
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  horizontalImageWrapper: {
    width: 60,
    marginRight: 12,
  },
  horizontalContent: {
    flex: 1,
  },
  cover: {
    marginBottom: 8,
  },
});

export default BookCard;
