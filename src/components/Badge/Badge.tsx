import { Colors, ThemeColors } from '@theme/colors';
import { TextStyles } from '@theme/typography';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  useColorScheme,
  ViewStyle,
} from 'react-native';

export type BadgeColor = 'neutral' | 'success' | 'error' | 'warning';
export type BadgeSize = 'large' | 'medium' | 'small';

type BadgeProps = {
  value: string;
  size?: BadgeSize;
  color?: BadgeColor;
  style?: ViewStyle;
};

function getColorTokens(color: BadgeColor, t: ThemeColors) {
  switch (color) {
    case 'neutral':
      return {
        bg: t.background,
        text: t.textPrimary,
        icon: t.textPrimary,
        border: t.border,
      };
    case 'success':
      return {
        bg: t.success,
        text: t.textInverse,
        icon: t.textInverse,
        border: 'transparent',
      };
    case 'error':
      return {
        bg: t.error,
        text: t.textInverse,
        icon: t.textInverse,
        border: 'transparent',
      };
    case 'warning':
      return {
        bg: t.warning,
        text: t.textInverse,
        icon: t.textInverse,
        border: 'transparent',
      };
  }
}

const SIZE_TOKENS = {
  large: {
    paddingV: 8,
    paddingH: 12,
  },
  medium: {
    paddingV: 6,
    paddingH: 8,
  },
  small: {
    paddingV: 4,
    paddingH: 6,
  },
};

const Badge = ({
  size = 'medium',
  color = 'neutral',
  value = 'Badge',
  style,
}: BadgeProps) => {
  const scheme = useColorScheme();
  const t = scheme === 'dark' ? Colors.dark : Colors.light;

  const vt = getColorTokens(color, t);
  const st = SIZE_TOKENS[size];

  return (
    <View
      style={[
        styles.badgeWrapper,
        {
          paddingHorizontal: st.paddingH,
          paddingVertical: st.paddingV,
          backgroundColor: vt.bg,
          borderColor: vt.border,
        },
        style,
      ]}
    >
      <Text style={[TextStyles.actionM, { color: vt.text }]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badgeWrapper: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 8,
  },
  value: {},
});

export default Badge;
