import { Colors, ThemeColors } from '@theme/colors';
import { number } from '@theme/numbers';
import { TextStyles, FontFamily } from '@theme/typography';
import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  ViewStyle,
} from 'react-native';
import { Icon } from '@components/Icon/Icon';
import { IconName } from '@assets/icons';

// ─── Types ────────────────────────────────────────────────────────────────────

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary';
export type ButtonSize = 'large' | 'medium' | 'small';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: React.ReactNode;
  prefixName?: IconName; // Тепер передаємо просто назву іконки
  suffixName?: IconName;
  isIconButton?: boolean; // Для режиму тільки іконка
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

// ─── Token maps ───────────────────────────────────────────────────────────────

function getVariantTokens(variant: ButtonVariant, t: ThemeColors) {
  switch (variant) {
    case 'primary':
      return {
        bg: t.primary,
        text: t.textInverse,
        icon: t.textInverse,
        border: 'transparent',
      };
    case 'secondary':
      return {
        bg: 'transparent',
        text: t.primary,
        icon: t.primary,
        border: '#E5E5E5',
      };
    case 'tertiary':
      return {
        bg: 'transparent',
        text: t.primary,
        icon: t.primary,
        border: 'transparent',
      };
  }
}

const SIZE_TOKENS = {
  large: {
    height: 56,
    paddingH: 24,
    borderRadius: 14,
    iconSize: 24,
    fontSize: 18,
  },
  medium: {
    height: 48,
    paddingH: 20,
    borderRadius: 12,
    iconSize: 20,
    fontSize: 16,
  },
  small: {
    height: 32,
    paddingH: 8,
    borderRadius: 16,
    iconSize: 16,
    fontSize: 14,
  },
};

export function Button({
  variant = 'primary',
  size = 'medium',
  children,
  prefixName,
  suffixName,
  isIconButton = false,
  loading = false,
  disabled = false,
  fullWidth = false,
  onPress,
  style,
}: ButtonProps) {
  const scheme = useColorScheme();
  const t = scheme === 'dark' ? Colors.dark : Colors.light;

  const vt = getVariantTokens(variant, t);
  const st = SIZE_TOKENS[size];
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      activeOpacity={number.activeOpacity}
      onPress={onPress}
      disabled={isDisabled}
      style={[
        styles.base,
        {
          height: st.height,
          width: isIconButton ? st.height : fullWidth ? '100%' : undefined,
          paddingHorizontal: isIconButton ? 0 : st.paddingH,
          borderRadius: st.borderRadius,
          backgroundColor: vt.bg,
          borderWidth: variant === 'secondary' ? 1 : 0,
          borderColor: vt.border,
          opacity: isDisabled ? 0.5 : 1,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator size="small" color={vt.text} />
      ) : (
        <>
          {prefixName && (
            <Icon name={prefixName} size={st.iconSize} color={vt.icon} />
          )}

          {!isIconButton && children && (
            <Text
              style={[
                TextStyles.actionM,
                {
                  color: vt.text,
                  fontSize: st.fontSize,
                  marginHorizontal: prefixName || suffixName ? 8 : 0,
                },
              ]}
              numberOfLines={1}
            >
              {children}
            </Text>
          )}

          {suffixName && (
            <Icon name={suffixName} size={st.iconSize} color={vt.icon} />
          )}
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
