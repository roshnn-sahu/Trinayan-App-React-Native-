import React from 'react';
import { View, Text } from 'lucide-react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { Home, ShoppingCart, Package, User } from 'lucide-react-native';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Header from '../components/Header';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white">
      <Header
        onMenuPress={() => navigation.openDrawer()}
        onProfilePress={() => navigation.navigate('ProfileTab')}
      />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#0284c7',
          tabBarInactiveTintColor: '#9ca3af',
          tabBarStyle: {
            backgroundColor: '#ffffff',
            borderTopWidth: 1,
            borderTopColor: '#f3f4f6',
            height: 72,
            paddingBottom: 14,
            paddingTop: 10,
            elevation: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -3 },
            shadowOpacity: 0.08,
            shadowRadius: 10,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
            marginTop: 4,
          },
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeScreen}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                className={`text-[11px] font-bold ${
                  focused ? 'text-primary-600' : 'text-gray-400'
                }`}
              >
                Home
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <View className="items-center justify-center relative">
                <Home
                  size={20}
                  color={focused ? '#0284c7' : '#9ca3af'}
                  strokeWidth={focused ? 2.2 : 1.8}
                />
                {focused && (
                  <View className="absolute -top-3 w-1.5 h-1.5 bg-primary-600 rounded-full" />
                )}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="CartTab"
          component={CartScreen}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                className={`text-[11px] font-bold ${
                  focused ? 'text-primary-600' : 'text-gray-400'
                }`}
              >
                Cart
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <View className="items-center justify-center relative">
                <ShoppingCart
                  size={20}
                  color={focused ? '#0284c7' : '#9ca3af'}
                  strokeWidth={focused ? 2.2 : 1.8}
                />
                {focused && (
                  <View className="absolute -top-3 w-1.5 h-1.5 bg-primary-600 rounded-full" />
                )}
              </View>
            ),
            tabBarBadge: 3,
            tabBarBadgeStyle: {
              backgroundColor: '#ef4444',
              color: '#ffffff',
              fontSize: 10,
              fontWeight: 'bold',
              minWidth: 16,
              height: 16,
              lineHeight: 16,
              borderRadius: 8,
              top: -4,
              left: 2,
            },
          }}
        />
        <Tab.Screen
          name="OrdersTab"
          component={OrdersScreen}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                className={`text-[11px] font-bold ${
                  focused ? 'text-primary-600' : 'text-gray-400'
                }`}
              >
                Orders
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <View className="items-center justify-center relative">
                <Package
                  size={20}
                  color={focused ? '#0284c7' : '#9ca3af'}
                  strokeWidth={focused ? 2.2 : 1.8}
                />
                {focused && (
                  <View className="absolute -top-3 w-1.5 h-1.5 bg-primary-600 rounded-full" />
                )}
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="ProfileTab"
          component={ProfileScreen}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                className={`text-[11px] font-bold ${
                  focused ? 'text-primary-600' : 'text-gray-400'
                }`}
              >
                Profile
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <View className="items-center justify-center relative">
                <User
                  size={20}
                  color={focused ? '#0284c7' : '#9ca3af'}
                  strokeWidth={focused ? 2.2 : 1.8}
                />
                {focused && (
                  <View className="absolute -top-3 w-1.5 h-1.5 bg-primary-600 rounded-full" />
                )}
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
