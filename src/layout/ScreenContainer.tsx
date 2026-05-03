// src/components/Layout/ScreenContainer.tsx
import { palette } from '@theme/colors';
import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ScreenContainerProps extends ViewProps {
  children: React.ReactNode;
  withHorizontalPadding?: boolean;
}

export const ScreenContainer = ({
  children,
  style,
  withHorizontalPadding = true,
  ...props
}: ScreenContainerProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.base,
        {
          paddingLeft: insets.left + (withHorizontalPadding ? 16 : 0),
          paddingRight: insets.right + (withHorizontalPadding ? 16 : 0),
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: palette.white.light,
  },
});
