import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Plus, Minus, Trash2, ShoppingBag, ChevronRight } from 'lucide-react-native';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

const initialCartItems = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: '₹2,499',
    quantity: 1,
    image: '🎧',
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: '₹4,999',
    quantity: 1,
    image: '⌚',
  },
  {
    id: '3',
    name: 'Phone Case',
    price: '₹599',
    quantity: 2,
    image: '📱',
  },
];

export default function CartScreen() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/[₹,]/g, ''), 10);
    return sum + price * item.quantity;
  }, 0);

  const deliveryFee = 49;
  const total = subtotal + deliveryFee;

  if (cartItems.length === 0) {
    return (
      <View className="flex-1 bg-gray-50/50 items-center justify-center px-6">
        <View className="w-16 h-16 bg-gray-100 rounded-3xl items-center justify-center mb-4">
          <ShoppingBag size={28} color="#9ca3af" strokeWidth={1.8} />
        </View>
        <Text className="text-lg font-bold text-gray-900 mb-1">
          Your cart is empty
        </Text>
        <Text className="text-sm text-gray-500 text-center mb-6 max-w-[240px] leading-relaxed">
          Add items to your cart to see them here and place an order.
        </Text>
        <Button className="w-full rounded-2xl" onPress={() => {}}>
          Browse Products
        </Button>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-50/50">
      <ScrollView className="flex-1 px-5 pt-4" showsVerticalScrollIndicator={false}>
        <Text className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3.5">
          Cart ({cartItems.length} items)
        </Text>

        {cartItems.map((item) => (
          <Card key={item.id} className="p-4 mb-3.5 flex-row items-center">
            <View className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-2xl items-center justify-center mr-3.5">
              <Text className="text-2xl">{item.image}</Text>
            </View>
            <View className="flex-1 mr-2">
              <Text className="text-sm font-bold text-gray-900 leading-tight">
                {item.name}
              </Text>
              <Text className="text-sm font-bold text-primary-600 mt-1">
                {item.price}
              </Text>
            </View>

            {/* Quantity controls */}
            <View className="flex-row items-center bg-gray-50 border border-gray-100 rounded-2xl p-1">
              <TouchableOpacity
                onPress={() => updateQuantity(item.id, -1)}
                className="w-7 h-7 bg-white border border-gray-100 rounded-xl items-center justify-center active:bg-gray-50">
                <Minus size={12} color="#4b5563" strokeWidth={2.5} />
              </TouchableOpacity>
              <Text className="mx-2.5 text-xs font-bold text-gray-900 w-5 text-center">
                {item.quantity}
              </Text>
              <TouchableOpacity
                onPress={() => updateQuantity(item.id, 1)}
                className="w-7 h-7 bg-white border border-gray-100 rounded-xl items-center justify-center active:bg-gray-50">
                <Plus size={12} color="#4b5563" strokeWidth={2.5} />
              </TouchableOpacity>
            </View>

            {/* Remove item */}
            <TouchableOpacity
              onPress={() => removeItem(item.id)}
              className="ml-3.5 p-2 bg-red-50 border border-red-100 rounded-2xl active:bg-red-100">
              <Trash2 size={15} color="#dc2626" strokeWidth={2} />
            </TouchableOpacity>
          </Card>
        ))}
        <View className="h-6" />
      </ScrollView>

      {/* Checkout Summary */}
      <View className="bg-white border-t border-gray-100 rounded-t-[32px] px-5 pt-5 pb-8 shadow-lg">
        <View className="flex-row justify-between mb-2 px-1">
          <Text className="text-sm text-gray-500 font-medium">Subtotal</Text>
          <Text className="text-sm text-gray-900 font-bold">₹{subtotal.toLocaleString()}</Text>
        </View>
        <View className="flex-row justify-between mb-3 px-1">
          <Text className="text-sm text-gray-500 font-medium">Delivery Fee</Text>
          <Text className="text-sm text-gray-900 font-bold">₹{deliveryFee}</Text>
        </View>
        <View className="h-px bg-gray-100 mb-3.5" />
        <View className="flex-row justify-between mb-4.5 px-1">
          <Text className="text-base font-bold text-gray-900">Total</Text>
          <Text className="text-base font-bold text-primary-600">
            ₹{total.toLocaleString()}
          </Text>
        </View>
        <Button className="rounded-2xl" onPress={() => {}}>
          Proceed to Checkout
        </Button>
      </View>
    </View>
  );
}
