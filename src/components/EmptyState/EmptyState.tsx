import React from 'react';
import { Text, View, Image, useColorScheme, StyleSheet } from 'react-native';
import { Button } from '../Button/Button';
import { TextStyles } from '../../theme/typography';
import { Colors } from '../../theme/colors';

interface EmptyStateProps {
  title: string;
  subtitle: string;
  imagePath?: string;
  buttonText: string;
  onPress?: () => void;
}

export function EmptyState({
  imagePath,
  title = "It's empty here",
  subtitle = 'No items to display',
  buttonText,
  onPress,
}: EmptyStateProps) {
  const theme = useColorScheme() ?? 'light';
  const t = Colors[theme];

  return (
    <View style={styles.container}>
      {imagePath && <Image source={imagePath} style={styles.image} />}

      <Text style={[TextStyles.h2, { color: t.textPrimary }, styles.title]}>
        {title}
      </Text>
      <Text
        style={[TextStyles.bodyM, { color: t.textSecondary }, styles.subtitle]}
      >
        {subtitle}
      </Text>

      <View style={{ justifyContent: 'center' }}>
        {buttonText && (
          <Button variant="primary" onPress={onPress}>
            <Text>{buttonText}</Text>
          </Button>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    minHeight: 350,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 32,
  },
  title: {
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: 32,
    textAlign: 'center',
  },
});
