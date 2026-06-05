import React from 'react';
import { TouchableOpacity, Text, View, ActivityIndicator } from 'react-native';

export function Button({
  onPress,
  children,
  variant = 'default',
  size = 'default',
  className = '',
  textClassName = '',
  loading = false,
  disabled = false,
}) {
  // Base classes for container
  let containerClass =
    'flex-row items-center justify-center rounded-2xl transition-colors ';

  // Variant classes
  switch (variant) {
    case 'default':
      containerClass += 'bg-primary-600 active:bg-primary-700 ';
      break;
    case 'secondary':
      containerClass += 'bg-gray-100 active:bg-gray-200 ';
      break;
    case 'outline':
      containerClass += 'border border-gray-200 bg-white active:bg-gray-50 ';
      break;
    case 'destructive':
      containerClass += 'bg-red-600 active:bg-red-700 ';
      break;
    case 'ghost':
      containerClass += 'bg-transparent active:bg-gray-100 ';
      break;
  }

  // Size classes
  switch (size) {
    case 'default':
      containerClass += 'px-5 py-3.5 ';
      break;
    case 'sm':
      containerClass += 'px-3 py-2 rounded-xl ';
      break;
    case 'lg':
      containerClass += 'px-6 py-4 ';
      break;
    case 'icon':
      containerClass += 'h-10 w-10 justify-center items-center rounded-xl ';
      break;
  }

  // Disabled states
  if (disabled || loading) {
    containerClass += 'opacity-50 ';
  }

  // Text color classes
  let defaultTextClass = 'font-semibold text-sm ';
  switch (variant) {
    case 'default':
    case 'destructive':
      defaultTextClass += 'text-white ';
      break;
    case 'secondary':
    case 'outline':
    case 'ghost':
      defaultTextClass += 'text-gray-900 ';
      break;
  }

  if (size === 'sm') {
    defaultTextClass = defaultTextClass.replace('text-sm', 'text-xs');
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      className={`${containerClass} ${className}`}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={
            variant === 'default' || variant === 'destructive'
              ? '#ffffff'
              : '#4b5563'
          }
          className="mr-2"
        />
      ) : null}
      {typeof children === 'string' ? (
        <Text className={`${defaultTextClass} ${textClassName}`}>
          {children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}
