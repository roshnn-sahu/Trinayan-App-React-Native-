import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'lucide-react-native';
import {
  User,
  MapPin,
  CreditCard,
  Bell,
  Lock,
  HelpCircle,
  Info,
  ChevronRight,
  LogOut,
} from 'lucide-react-native';
import { Avatar } from '../components/ui/avatar';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

const menuItems = [
  {
    id: '1',
    title: 'Personal Information',
    icon: User,
    description: 'Manage your account details',
  },
  {
    id: '2',
    title: 'Addresses',
    icon: MapPin,
    description: 'Manage delivery addresses',
  },
  {
    id: '3',
    title: 'Payment Methods',
    icon: CreditCard,
    description: 'Manage payment options',
  },
  {
    id: '4',
    title: 'Notifications',
    icon: Bell,
    description: 'Configure notification preferences',
  },
  {
    id: '5',
    title: 'Privacy & Security',
    icon: Lock,
    description: 'Manage privacy settings',
  },
  {
    id: '6',
    title: 'Help & Support',
    icon: HelpCircle,
    description: 'Get help with your account',
  },
  {
    id: '7',
    title: 'About',
    icon: Info,
    description: 'App version and information',
  },
];

export default function ProfileScreen() {
  return (
    <ScrollView
      className="flex-1 bg-gray-50/50"
      showsVerticalScrollIndicator={false}
    >
      {/* Profile Header */}
      <View className="bg-white px-5 py-6 items-center border-b border-gray-100">
        <Avatar fallbackText="JD" size="lg" className="mb-3.5" />
        <Text className="text-xl font-bold text-gray-900 tracking-tight">
          John Doe
        </Text>
        <Text className="text-sm text-gray-500 mt-0.5 font-medium">
          john.doe@email.com
        </Text>
        <Text className="text-xs text-gray-400 mt-1 font-semibold">
          +91 98765 43210
        </Text>

        <Button variant="outline" size="sm" className="mt-4" onPress={() => {}}>
          Edit Profile
        </Button>
      </View>

      {/* Stats */}
      <Card className="mx-5 mt-5 p-0 flex-row overflow-hidden">
        <View className="flex-1 items-center py-4.5 border-r border-gray-50">
          <Text className="text-lg font-bold text-gray-900">24</Text>
          <Text className="text-xs font-semibold text-gray-500 mt-1">
            Orders
          </Text>
        </View>
        <View className="flex-1 items-center py-4.5 border-r border-gray-50">
          <Text className="text-lg font-bold text-gray-900">3</Text>
          <Text className="text-xs font-semibold text-gray-500 mt-1">
            Wishlist
          </Text>
        </View>
        <View className="flex-1 items-center py-4.5">
          <Text className="text-lg font-bold text-gray-900">2</Text>
          <Text className="text-xs font-semibold text-gray-500 mt-1">
            Reviews
          </Text>
        </View>
      </Card>

      {/* Menu Items */}
      <View className="px-5 mt-5 mb-6">
        <Text className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3.5">
          Settings
        </Text>
        <Card className="p-0">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <TouchableOpacity
                key={item.id}
                className={`flex-row items-center px-4.5 py-4 ${
                  index < menuItems.length - 1 ? 'border-b border-gray-50' : ''
                } active:bg-gray-50`}
              >
                <View className="w-9 h-9 bg-gray-50 border border-gray-100 rounded-2xl items-center justify-center mr-3.5">
                  <IconComponent size={16} color="#4b5563" strokeWidth={2} />
                </View>
                <View className="flex-1">
                  <Text className="text-sm font-bold text-gray-900 leading-tight">
                    {item.title}
                  </Text>
                  <Text className="text-xs text-gray-400 mt-1.5 leading-normal">
                    {item.description}
                  </Text>
                </View>
                <ChevronRight size={14} color="#d1d5db" />
              </TouchableOpacity>
            );
          })}
        </Card>
      </View>

      {/* Logout Button */}
      <View className="px-5 mb-8">
        <Button
          variant="destructive"
          className="rounded-2xl flex-row items-center justify-center gap-2"
          onPress={() => {}}
        >
          <LogOut size={16} color="#ffffff" strokeWidth={2.2} />
          <Text className="text-white font-bold text-sm">Log Out</Text>
        </Button>
      </View>
    </ScrollView>
  );
}
