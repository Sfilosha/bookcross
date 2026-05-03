import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';
import { palette } from '@theme/colors';
import { FontFamily } from '@theme/typography';
import { Icon } from '@components/Icon/Icon';
import { IconName } from '@assets/icons';

interface InputTextProps extends TextInputProps {
  label?: string;
  error?: boolean;
  prefixIcon?: IconName;
  suffixIcon?: IconName;
  onSuffixPress?: () => void;
}

export const InputText = ({
  label,
  error,
  prefixIcon,
  suffixIcon,
  onSuffixPress,
  style,
  editable = true,
  onFocus,
  onBlur,
  ...props
}: InputTextProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const getContainerStyle = () => {
    if (!editable) return styles.containerDisabled;
    if (error) return styles.containerError;
    if (isFocused) return styles.containerFocused;
    return styles.containerDefault;
  };

  return (
    <View style={[styles.wrapper, !editable && { opacity: 0.5 }, style]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View style={[styles.container, getContainerStyle()]}>
        {prefixIcon && (
          <Icon
            name={prefixIcon}
            size={20}
            color={palette.black?.medium || '#8E8E93'}
            style={styles.prefix}
          />
        )}

        <TextInput
          style={styles.input}
          placeholderTextColor={palette.black?.light || '#BCBCBC'}
          editable={editable}
          onFocus={e => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={e => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          {...props}
        />

        {suffixIcon && (
          <TouchableOpacity onPress={onSuffixPress} disabled={!onSuffixPress}>
            <Icon name={suffixIcon} size={20} color={palette.black.medium} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontFamily: FontFamily.primaryFont,
    fontSize: 16,
    color: '#1C1C1C',
    marginBottom: 8,
    marginLeft: 4,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    borderRadius: 16,
    paddingHorizontal: 16,
    backgroundColor: '#EAEAEA',
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  containerDefault: {
    borderColor: 'transparent',
  },
  containerFocused: {
    borderColor: palette.highlight.darkest,
    backgroundColor: '#EAEAEA',
  },
  containerError: {
    borderColor: '#FF3B30',
    backgroundColor: '#EAEAEA',
  },
  containerDisabled: {
    backgroundColor: '#F5F5F5',
  },
  input: {
    flex: 1,
    height: '100%',
    fontFamily: FontFamily.primaryFont,
    fontSize: 16,
    color: '#1C1C1C',
    paddingVertical: 0,
  },
  prefix: {
    marginRight: 10,
  },
});
