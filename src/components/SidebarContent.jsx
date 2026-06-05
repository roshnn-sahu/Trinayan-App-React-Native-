import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import {
  Home,
  ShoppingCart,
  Package,
  User,
  Settings,
  HelpCircle,
  FileText,
  LogOut,
  ChevronRight,
} from 'lucide-react-native';
import { Avatar } from './ui/avatar';

const menuItems = [
  { icon: Home, label: 'Home', route: 'HomeTab' },
  { icon: ShoppingCart, label: 'Cart', route: 'CartTab' },
  { icon: Package, label: 'Orders', route: 'OrdersTab' },
  { icon: User, label: 'Profile', route: 'ProfileTab' },
];

const secondaryMenuItems = [
  { icon: Settings, label: 'Settings' },
  { icon: HelpCircle, label: 'Help & Support' },
  { icon: FileText, label: 'Terms & Privacy' },
];

export default function SidebarContent(props) {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 bg-white">
      {/* User Profile Section */}
      <View
        className="bg-primary-600 px-5 pb-6 border-b border-primary-700"
        style={{ paddingTop: insets.top + 16 }}
      >
        <View className="flex-row items-center mb-4">
          <Avatar
            fallbackText="JD"
            size="lg"
            className="mr-3 border-white/20 bg-white/10"
          />
          <View className="flex-1">
            <Text className="text-lg font-bold text-white tracking-tight">
              John Doe
            </Text>
            <Text className="text-sm text-white/80 mt-0.5">
              john.doe@email.com
            </Text>
          </View>
        </View>
        <View className="flex-row gap-2.5">
          <View className="bg-white/10 rounded-xl px-3.5 py-2">
            <Text className="text-white text-xs font-medium">24 Orders</Text>
          </View>
          <View className="bg-white/10 rounded-xl px-3.5 py-2">
            <Text className="text-white text-xs font-medium">3 Wishlist</Text>
          </View>
        </View>
      </View>

      {/* Main Menu */}
      <DrawerContentScrollView
        {...props}
        className="flex-1"
        style={{ paddingHorizontal: 0 }}
      >
        <View className="px-2">
          <Text className="text-[10px] font-bold text-gray-400 uppercase px-4 mb-2.5 mt-2 tracking-wider">
            Main Menu
          </Text>
          {menuItems.map(item => {
            const isActive =
              props.state.routes[props.state.index]?.name === item.route;
            const Icon = item.icon;
            return (
              <TouchableOpacity
                key={item.label}
                onPress={() => {
                  props.navigation.navigate(item.route);
                  props.navigation.closeDrawer();
                }}
                className={`flex-row items-center px-4 py-3 mx-2 rounded-2xl mb-1 ${
                  isActive ? 'bg-primary-50' : 'active:bg-gray-50'
                }`}
              >
                <Icon
                  size={18}
                  color={isActive ? '#0284c7' : '#4b5563'}
                  strokeWidth={isActive ? 2.2 : 1.8}
                  className="mr-3"
                />
                <Text
                  className={`text-sm font-semibold ${
                    isActive ? 'text-primary-700' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </Text>
                {isActive ? (
                  <View className="ml-auto w-1.5 h-1.5 bg-primary-600 rounded-full" />
                ) : (
                  <ChevronRight size={14} color="#d1d5db" className="ml-auto" />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        <View className="h-px bg-gray-100 mx-5 my-3.5" />

        {/* Secondary Menu */}
        <View className="px-2">
          <Text className="text-[10px] font-bold text-gray-400 uppercase px-4 mb-2.5 tracking-wider">
            More
          </Text>
          {secondaryMenuItems.map(item => {
            const Icon = item.icon;
            return (
              <TouchableOpacity
                key={item.label}
                className="flex-row items-center px-4 py-3 mx-2 rounded-2xl mb-1 active:bg-gray-50"
              >
                <Icon
                  size={18}
                  color="#4b5563"
                  strokeWidth={1.8}
                  className="mr-3"
                />
                <Text className="text-sm font-semibold text-gray-700">
                  {item.label}
                </Text>
                <ChevronRight size={14} color="#d1d5db" className="ml-auto" />
              </TouchableOpacity>
            );
          })}
        </View>
      </DrawerContentScrollView>

      {/* Footer */}
      <View className="px-5 pb-6 pt-3 border-t border-gray-100">
        <TouchableOpacity className="bg-red-50 active:bg-red-100 border border-red-100 rounded-2xl py-3.5 items-center flex-row justify-center gap-2">
          <LogOut size={16} color="#dc2626" strokeWidth={2} />
          <Text className="text-red-600 text-sm font-semibold">Log Out</Text>
        </TouchableOpacity>
        <Text className="text-[10px] text-gray-400 text-center mt-3">
          Trinayan v1.0.0
        </Text>
      </View>
    </View>
  );
}
