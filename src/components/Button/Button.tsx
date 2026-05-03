/**
 * components/Button.tsx
 *
 * Variants : primary | secondary | tertiary | warning
 * Sizes    : large | medium
 * Icons    : optional prefix / suffix via <ButtonIcon> sub-component
 *
 * Usage:
 *   import { Button, ButtonIcon } from '@/components/Button';
 *
 *   <Button variant="primary" size="large" onPress={...}>
 *     Continue
 *   </Button>
 *
 *   <Button variant="warning" size="medium" prefix={<ButtonIcon name="⚠️" />} onPress={...}>
 *     Delete account
 *   </Button>
 *
 *   <Button variant="secondary" size="small"
 *     suffix={<ButtonIcon name="→" />}
 *     onPress={...}
 *   >
 *     Learn more
 *   </Button>
 */

import { Colors, ThemeColors } from '@theme/colors';
import { number } from '@theme/numbers';
import { TextStyles } from '@theme/typography';
import React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  useColorScheme,
  ViewStyle,
} from 'react-native';

// ─── Types ────────────────────────────────────────────────────────────────────

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'warning';
export type ButtonSize = 'large' | 'medium';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

// ─── ButtonIcon sub-component ─────────────────────────────────────────────────
// Wrap any icon library element (or emoji for quick prototyping) with this
// so Button can apply correct sizing automatically via React.cloneElement.

interface ButtonIconProps {
  name: React.ReactNode;
  size?: number;
  color?: string;
}

export function ButtonIcon({ name, size = 16, color }: ButtonIconProps) {
  // Plain string / emoji → render as <Text> with the injected color
  if (typeof name === 'string') {
    return (
      <Text style={{ fontSize: size, color, lineHeight: size * 1.2 }}>
        {name}
      </Text>
    );
  }

  // React element (Phosphor, lucide, etc.) → forward size + color via cloneElement
  if (React.isValidElement(name)) {
    return React.cloneElement(
      name as React.ReactElement<{ size?: number; color?: string }>,
      {
        size,
        color,
      },
    );
  }

  return <>{name}</>;
}

// ─── Token maps ───────────────────────────────────────────────────────────────

interface VariantTokens {
  bg: string;
  bgPressed: string;
  border: string;
  text: string;
  spinnerColor: string;
}

function getVariantTokens(
  variant: ButtonVariant,
  t: ThemeColors,
): VariantTokens {
  switch (variant) {
    case 'primary':
      return {
        bg: t.primary,
        bgPressed: t.primaryHover,
        border: 'transparent',
        text: t.textOnAccent,
        spinnerColor: t.textOnAccent,
      };
    case 'secondary':
      return {
        bg: 'transparent',
        bgPressed: t.primarySubtle,
        border: t.primary,
        text: t.primary,
        spinnerColor: t.primary,
      };
    case 'tertiary':
      return {
        bg: t.backgroundSecondary,
        bgPressed: t.backgroundTertiary,
        border: t.border,
        text: t.textPrimary,
        spinnerColor: t.textPrimary,
      };
    case 'warning':
      return {
        bg: t.error,
        bgPressed: '#C7304A',
        border: 'transparent',
        text: '#FFFFFF',
        spinnerColor: '#FFFFFF',
      };
  }
}

interface SizeTokens {
  height: number;
  paddingH: number;
  borderRadius: number;
  iconSize: number;
  gap: number;
  textStyle: TextStyle;
}

const SIZE_TOKENS: Record<ButtonSize, SizeTokens> = {
  large: {
    height: 52,
    paddingH: 15,
    borderRadius: 12,
    iconSize: 20,
    gap: 8,
    textStyle: TextStyles.actionM,
  },
  medium: {
    height: 42,
    paddingH: 16,
    borderRadius: 12,
    iconSize: 16,
    gap: 8,
    textStyle: TextStyles.actionM,
  },
};

export function Button({
  variant = 'primary',
  size = 'medium',
  children,
  prefix,
  suffix,
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

  // Clone icon children to inject size + color automatically
  function cloneIcon(node: React.ReactNode) {
    if (!node) return null;
    if (React.isValidElement(node)) {
      return React.cloneElement(node as React.ReactElement<ButtonIconProps>, {
        size: st.iconSize,
        color: vt.text,
      });
    }
    return node;
  }

  return (
    <TouchableOpacity
      activeOpacity={number.activeOpacity}
      onPress={onPress}
      disabled={isDisabled}
      style={[
        styles.base,
        {
          height: st.height,
          paddingHorizontal: st.paddingH,
          borderRadius: st.borderRadius,
          backgroundColor: vt.bg,
          borderColor: vt.border,
          gap: st.gap,
          alignSelf: fullWidth ? 'stretch' : 'flex-start',
          opacity: isDisabled ? 0.45 : 1,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator size="small" color={vt.spinnerColor} />
      ) : (
        <>
          {prefix && cloneIcon(prefix)}

          <Text style={[st.textStyle, { color: vt.text }]} numberOfLines={1}>
            {children}
          </Text>

          {suffix && cloneIcon(suffix)}
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
    borderWidth: 1.5,
    overflow: 'hidden',
  },
});
