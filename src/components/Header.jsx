import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Menu } from 'lucide-react-native';
import { Avatar } from './ui/avatar';

const Header = ({ onMenuPress, onProfilePress }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="bg-white border-b border-gray-100"
      style={{ paddingTop: insets.top }}
    >
      <View className="flex-row items-center justify-between px-4 py-3">
        {/* Left: Hamburger Menu */}
        <TouchableOpacity
          onPress={onMenuPress}
          className="w-10 h-10 bg-gray-50 active:bg-gray-100 rounded-xl items-center justify-center border border-gray-100"
        >
          <Menu size={20} color="#374151" strokeWidth={2.2} />
        </TouchableOpacity>

        {/* Center: Title */}
        <View className="flex-1 items-center">
          <Text className="text-xl font-bold text-gray-900 tracking-tight">
            Trinayan
          </Text>
        </View>

        {/* Right: User Profile */}
        <TouchableOpacity
          onPress={onProfilePress}
          className="active:opacity-80"
        >
          <Avatar fallbackText="JD" size="sm" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
