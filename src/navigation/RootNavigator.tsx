import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailsScreen from '@screens/DetailsScreen';
import { TabNavigator } from './TabNavigator';
import AddBookScreen from '@screens/AddBookScreen';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureDirection: 'horizontal',
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          title: 'Book Details',
          headerBackTitle: 'Back',
          animation: 'slide_from_bottom',
          presentation: 'modal',
          headerBackVisible: true,
        }}
      />
      <Stack.Screen
        name="Add Book"
        component={AddBookScreen}
        options={{ title: 'Add New Book', headerBackTitle: 'Back' }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
