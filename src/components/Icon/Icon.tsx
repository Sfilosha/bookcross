// src/components/Icon/Icon.tsx
import React from 'react';
import { SvgProps } from 'react-native-svg';
import { Icons, IconName } from '@assets/icons';
import { palette } from '@theme/colors'; //

interface IconProps extends SvgProps {
  name: IconName;
  size?: number;
  color?: string;
}

export const Icon = ({
  name,
  size = 24,
  color = palette.black.dark,
  ...props
}: IconProps) => {
  const SvgIcon = Icons[name];

  if (!SvgIcon) {
    console.warn(`Icon with name "${name}" does not exist in @assets/images.`);
    return null;
  }

  return (
    <SvgIcon
      width={size}
      height={size}
      fill={color}
      stroke={color}
      {...props}
    />
  );
};
