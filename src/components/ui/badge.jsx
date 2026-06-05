import React from 'react';
import { View, Text } from 'react-native';

export function Badge({
  children,
  variant = 'default',
  className = '',
  textClassName = '',
}) {
  let containerClass =
    'px-2.5 py-0.5 rounded-full items-center justify-center ';
  let textClass = 'text-xs font-semibold ';

  switch (variant) {
    case 'default':
      containerClass += 'bg-primary-600 ';
      textClass += 'text-white ';
      break;
    case 'secondary':
      containerClass += 'bg-gray-100 ';
      textClass += 'text-gray-900 ';
      break;
    case 'destructive':
      containerClass += 'bg-red-50 border border-red-200 ';
      textClass += 'text-red-700 ';
      break;
    case 'success':
      containerClass += 'bg-green-50 border border-green-200 ';
      textClass += 'text-green-700 ';
      break;
    case 'outline':
      containerClass += 'border border-gray-200 bg-white ';
      textClass += 'text-gray-600 ';
      break;
  }

  return (
    <View className={`${containerClass} ${className}`}>
      {typeof children === 'string' ? (
        <Text className={`${textClass} ${textClassName}`}>{children}</Text>
      ) : (
        children
      )}
    </View>
  );
}
