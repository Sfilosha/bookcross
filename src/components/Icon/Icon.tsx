import React from 'react';
import { SvgProps } from 'react-native-svg';
import { Icons, IconName } from '@assets/icons';

// Usage: <Icon name="booksFill" size={24} color={color} />

interface IconProps extends SvgProps {
  name: IconName;
  size?: number;
  color?: string;
}

export const Icon = ({ name, size = 24, color, ...props }: IconProps) => {
  const SvgIcon = Icons[name];

  if (!SvgIcon) {
    console.warn(`Icon with name "${name}" does not exist in @assets/images.`);
    return null;
  }

  return <SvgIcon width={size} height={size} color={color} {...props} />;
};
