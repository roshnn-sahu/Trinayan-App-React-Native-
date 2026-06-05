import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Package, Calendar, ChevronRight } from 'react-native';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const orders = [
  {
    id: 'ORD-1234',
    name: 'Wireless Headphones',
    date: 'Dec 15, 2024',
    status: 'Delivered',
    amount: '₹2,499',
    items: 1,
  },
  {
    id: 'ORD-1235',
    name: 'Smart Watch + Band',
    date: 'Dec 12, 2024',
    status: 'In Transit',
    amount: '₹5,498',
    items: 2,
  },
  {
    id: 'ORD-1236',
    name: 'Phone Case & Charger',
    date: 'Dec 10, 2024',
    status: 'Processing',
    amount: '₹1,598',
    items: 2,
  },
  {
    id: 'ORD-1230',
    name: 'Bluetooth Speaker',
    date: 'Dec 5, 2024',
    status: 'Cancelled',
    amount: '₹1,999',
    items: 1,
  },
  {
    id: 'ORD-1228',
    name: 'Laptop Stand',
    date: 'Nov 28, 2024',
    status: 'Delivered',
    amount: '₹899',
    items: 1,
  },
];

const statusBadgeVariants = {
  Delivered: 'success',
  'In Transit': 'secondary',
  Processing: 'default',
  Cancelled: 'destructive',
};

const filters = ['All', 'Processing', 'In Transit', 'Delivered', 'Cancelled'];

export default function OrdersScreen() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredOrders = activeFilter === 'All' 
    ? orders 
    : orders.filter(o => o.status === activeFilter);

  return (
    <View className="flex-1 bg-gray-50/50">
      {/* Filter Tabs */}
      <View className="py-3">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20 }}
          className="flex-row">
          {filters.map((filter) => {
            const isSelected = activeFilter === filter;
            return (
              <TouchableOpacity
                key={filter}
                onPress={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full mr-2 border ${
                  isSelected
                    ? 'bg-primary-600 border-primary-600'
                    : 'bg-white border-gray-150 active:bg-gray-50'
                }`}>
                <Text
                  className={`text-xs font-bold ${
                    isSelected ? 'text-white' : 'text-gray-600'
                  }`}>
                  {filter}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* Orders List */}
      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
        <Text className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3.5 mt-2">
          Your Orders ({filteredOrders.length})
        </Text>

        {filteredOrders.map((order) => {
          const badgeVariant = statusBadgeVariants[order.status];
          return (
            <Card
              key={order.id}
              className="p-4 mb-3.5 active:bg-gray-50/50">
              <TouchableOpacity className="flex-col">
                <View className="flex-row justify-between items-start mb-3">
                  <View className="flex-1 mr-2">
                    <Text className="text-sm font-bold text-gray-900 leading-tight">
                      {order.name}
                    </Text>
                    <View className="flex-row items-center mt-1.5 gap-2">
                      <View className="flex-row items-center gap-1">
                        <Calendar size={11} color="#9ca3af" />
                        <Text className="text-xs font-semibold text-gray-400">
                          {order.date}
                        </Text>
                      </View>
                      <Text className="text-xs text-gray-300">•</Text>
                      <Text className="text-xs font-semibold text-gray-450">
                        {order.id}
                      </Text>
                    </View>
                  </View>
                  <Text className="text-sm font-bold text-gray-900">
                    {order.amount}
                  </Text>
                </View>
                <View className="h-px bg-gray-50 mb-3" />
                <View className="flex-row justify-between items-center">
                  <Badge variant={badgeVariant}>
                    {order.status}
                  </Badge>
                  <View className="flex-row items-center gap-1">
                    <Text className="text-xs font-semibold text-gray-500">
                      {order.items} item{order.items > 1 ? 's' : ''}
                    </Text>
                    <ChevronRight size={13} color="#9ca3af" />
                  </View>
                </View>
              </TouchableOpacity>
            </Card>
          );
        })}

        <View className="h-6" />
      </ScrollView>
    </View>
  );
}
