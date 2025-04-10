import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import AspireLogo from '@/assets/icons/AspireLogo';
import DebitCardIcon from '@/assets/icons/DebitCardIcon';
import PaymentsIcon from '@/assets/icons/PaymentsIcon';
import CreditCardIcon from '@/assets/icons/CreditCardIcon';
import ProfileIcon from '@/assets/icons/ProfileIcon';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? 'light'].tabIconDefault,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 3.84,
            elevation: 5,
            backgroundColor: Colors[colorScheme ?? 'light'].background,
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <AspireLogo color={color} />,
        }}
      />
      <Tabs.Screen
        name="debitcard"
        options={{
          title: 'Debit Card',
          tabBarIcon: ({ color }) => <DebitCardIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          title: 'Payments',
          tabBarIcon: ({ color }) => <PaymentsIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="credit"
        options={{
          title: 'Credit',
          tabBarIcon: ({ color }) => <CreditCardIcon color={color} />,
        }}
      />  
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <ProfileIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
