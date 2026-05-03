import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from '@screens/DetailsScreen';
import { TabNavigator } from './TabNavigator';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Book Details' }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
