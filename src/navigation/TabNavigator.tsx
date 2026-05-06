import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';

import HomeScreen from '@screens/HomeScreen';
import { palette } from '@theme/colors';
import { FontFamily } from '@theme/typography';
import { Icon } from '@components/Icon/Icon';
import CrossingScreen from '@screens/CrossingScreen';
import { ProfileDrawerNavigator } from './ProfileDrawerNavigator';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: palette.highlight.darkest,
        tabBarInactiveTintColor: palette.black.light,
        tabBarStyle: {
          borderTopWidth: 0.5,
          borderTopColor: palette.black.lightest,
          height: Platform.OS === 'ios' ? 88 : 64,
          paddingBottom: Platform.OS === 'ios' ? 30 : 10,
        },
        tabBarLabelStyle: {
          fontFamily: FontFamily.primaryFont,
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen
        name="Library"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="booksFill" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Crossing"
        component={CrossingScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="userSwitchFill" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileDrawerNavigator}
        listeners={({ navigation }) => ({
          tabPress: e => {
            if (navigation.isFocused()) {
              e.preventDefault();
              navigation.navigate('Profile', {
                screen: 'ProfileMain',
              });
            }
          },
        })}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="userFill" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
