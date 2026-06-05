import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import {
  TrendingUp,
  Zap,
  Lock,
  Headphones,
  Package,
  ArrowRight,
  ChevronRight,
} from 'lucide-react-native';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const features = [
  {
    id: '1',
    title: 'Smart Analytics',
    description: 'Track progress with detailed insights',
    icon: TrendingUp,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50/70',
  },
  {
    id: '2',
    title: 'Quick Orders',
    description: 'Place orders in just a few taps',
    icon: Zap,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50/70',
  },
  {
    id: '3',
    title: 'Secure Payments',
    description: 'Your transactions are protected',
    icon: Lock,
    color: 'text-green-600',
    bgColor: 'bg-green-50/70',
  },
  {
    id: '4',
    title: '24/7 Support',
    description: 'We are here to help you anytime',
    icon: Headphones,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50/70',
  },
];

const recentOrders = [
  { id: '1', name: 'Order #1234', status: 'Delivered', amount: '₹2,499' },
  { id: '2', name: 'Order #1235', status: 'In Transit', amount: '₹1,299' },
  { id: '3', name: 'Order #1236', status: 'Processing', amount: '₹3,999' },
];

export default function HomeScreen() {
  return (
    <ScrollView
      className="flex-1 bg-gray-50/50"
      showsVerticalScrollIndicator={false}
    >
      {/* Welcome Section */}
      <View className="px-5 pt-6 pb-4">
        <Text className="text-2xl font-bold text-gray-900 tracking-tight">
          Welcome back! 👋
        </Text>
        <Text className="text-sm text-gray-500 mt-1">
          Here is what's happening with your account today.
        </Text>
      </View>

      {/* Features Grid */}
      <View className="px-5 mb-6">
        <Text className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3.5">
          Core Services
        </Text>
        <View className="flex-row flex-wrap justify-between">
          {features.map(feature => {
            const IconComponent = feature.icon;
            return (
              <TouchableOpacity
                key={feature.id}
                className={`w-[48%] bg-white border border-gray-100 rounded-3xl p-4 mb-3 shadow-sm active:bg-gray-50`}
              >
                <View
                  className={`w-10 h-10 ${feature.bgColor} rounded-2xl items-center justify-center mb-3`}
                >
                  <IconComponent
                    size={20}
                    className={feature.color}
                    strokeWidth={2}
                  />
                </View>
                <Text className="text-sm font-bold text-gray-900 leading-tight">
                  {feature.title}
                </Text>
                <Text className="text-xs text-gray-500 mt-1.5 leading-normal">
                  {feature.description}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Recent Orders */}
      <View className="px-5 mb-6">
        <View className="flex-row justify-between items-center mb-3.5">
          <Text className="text-sm font-bold text-gray-400 uppercase tracking-wider">
            Recent Orders
          </Text>
          <TouchableOpacity className="flex-row items-center gap-1 active:opacity-75">
            <Text className="text-primary-600 text-xs font-bold">View All</Text>
            <ArrowRight size={12} color="#0284c7" strokeWidth={2.5} />
          </TouchableOpacity>
        </View>

        <Card>
          {recentOrders.map((order, index) => (
            <TouchableOpacity
              key={order.id}
              className={`flex-row justify-between items-center px-5 py-4 ${
                index < recentOrders.length - 1 ? 'border-b border-gray-50' : ''
              } active:bg-gray-50`}
            >
              <View className="flex-row items-center">
                <View className="w-10 h-10 bg-primary-50 rounded-2xl items-center justify-center mr-3.5">
                  <Package size={18} color="#0284c7" strokeWidth={2} />
                </View>
                <View>
                  <Text className="text-sm font-bold text-gray-900">
                    {order.name}
                  </Text>
                  <Text
                    className={`text-xs font-semibold mt-1 ${
                      order.status === 'Delivered'
                        ? 'text-green-600'
                        : order.status === 'In Transit'
                        ? 'text-amber-600'
                        : 'text-blue-600'
                    }`}
                  >
                    {order.status}
                  </Text>
                </View>
              </View>
              <View className="flex-row items-center gap-1.5">
                <Text className="text-sm font-bold text-gray-900">
                  {order.amount}
                </Text>
                <ChevronRight size={14} color="#d1d5db" />
              </View>
            </TouchableOpacity>
          ))}
        </Card>
      </View>

      {/* Quick Actions */}
      <View className="px-5 mb-8">
        <Text className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3.5">
          Quick Actions
        </Text>
        <View className="flex-row gap-3">
          <Button className="flex-1 rounded-2xl shadow-sm" onPress={() => {}}>
            New Order
          </Button>
          <Button
            variant="outline"
            className="flex-1 rounded-2xl shadow-sm"
            onPress={() => {}}
          >
            Track Order
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
