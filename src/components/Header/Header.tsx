import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextStyles } from '@theme/typography';
import { palette } from '@theme/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface HeaderProps {
  title: string;
  subtitle?: string;
  suffix?: ReactNode;
}

export const Header = ({ title, subtitle, suffix }: HeaderProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.textContainer}>
        <Text style={[TextStyles.h1, styles.title]}>{title.toUpperCase()}</Text>
        {subtitle ? (
          <Text style={[TextStyles.bodyS, styles.subtitle]}>{subtitle}</Text>
        ) : null}
      </View>
      {suffix && <View style={styles.suffixContainer}>{suffix}</View>}
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    width: '100%',
    backgroundColor: 'transparent',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: palette.black.dark,
  },
  subtitle: {
    color: palette.black.medium,
    marginTop: 4,
  },
  suffixContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
});
