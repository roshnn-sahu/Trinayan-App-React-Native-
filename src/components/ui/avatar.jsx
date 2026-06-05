import React from 'react';
import { View, Text, Image } from 'react-native';

export function Avatar({
  source,
  fallbackText = 'JD',
  size = 'md',
  className = '',
}) {
  let sizeClass = 'w-10 h-10';
  let textClass = 'text-sm font-bold';

  if (size === 'sm') {
    sizeClass = 'w-8 h-8';
    textClass = 'text-xs font-semibold';
  } else if (size === 'lg') {
    sizeClass = 'w-16 h-16';
    textClass = 'text-xl font-bold';
  }

  return (
    <View
      className={`bg-primary-100 rounded-full items-center justify-center border-2 border-primary-200 overflow-hidden ${sizeClass} ${className}`}
    >
      {source ? (
        <Image source={source} className="w-full h-full object-cover" />
      ) : (
        <Text className={`text-primary-700 ${textClass}`}>{fallbackText}</Text>
      )}
    </View>
  );
}
