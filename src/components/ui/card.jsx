import React from 'react';
import { View, Text } from 'lucide-react-native';

export function Card({ children, className = '' }) {
  return (
    <View
      className={`bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden ${className}`}
    >
      {children}
    </View>
  );
}

export function CardHeader({ children, className = '' }) {
  return (
    <View className={`p-5 pb-3 flex-col gap-1.5 ${className}`}>{children}</View>
  );
}

export function CardTitle({ children, className = '' }) {
  return (
    <Text
      className={`text-lg font-bold text-gray-900 leading-tight ${className}`}
    >
      {children}
    </Text>
  );
}

export function CardDescription({ children, className = '' }) {
  return (
    <Text className={`text-xs text-gray-500 leading-normal ${className}`}>
      {children}
    </Text>
  );
}

export function CardContent({ children, className = '' }) {
  return <View className={`p-5 pt-0 ${className}`}>{children}</View>;
}

export function CardFooter({ children, className = '' }) {
  return (
    <View
      className={`p-5 pt-0 flex-row items-center border-t border-gray-50/50 mt-4 ${className}`}
    >
      {children}
    </View>
  );
}
