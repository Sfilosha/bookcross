import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, useColorScheme } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import ProfileScreen from '@screens/ProfileScreen';
import AboutScreen from '@screens/AboutScreen';

import { Colors, palette } from '@theme/colors';
import { FontFamily, TextStyles } from '@theme/typography';

const Drawer = createDrawerNavigator();

// Content for Drawer
function CustomDrawerContent(props: any) {
  const [isDarkMode, setIsDarkMode] = useState(false); // TBA – Update with Redux
  const scheme = useColorScheme();
  const t = scheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContainer}
    >
      <View style={styles.topSection}>
        <DrawerItemList {...props} />
      </View>

      {/* Theme Switcher */}
      <View style={[styles.themeSection, { borderTopColor: t.border }]}>
        <Text style={[styles.themeText, { color: t.textPrimary }]}>
          Dark Mode
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={setIsDarkMode}
          trackColor={{
            false: t.backgroundSecondary,
            true: t.primary,
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
}

// MAIN DRAWER TO SHOW IN PROFILE
export const ProfileDrawerNavigator = () => {
  const scheme = useColorScheme();
  const t = scheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerActiveBackgroundColor: t.success,
        drawerActiveTintColor: t.textInverse,
        drawerInactiveTintColor: t.textSecondary,
        drawerLabelStyle: TextStyles.actionM,
        drawerItemStyle: {
          borderRadius: 12,
          marginVertical: 2,
          marginHorizontal: 4,
          paddingHorizontal: 4,
        },
      }}
    >
      <Drawer.Screen
        name="ProfileMain"
        component={ProfileScreen}
        options={{
          drawerItemStyle: { display: 'none' },
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{ title: 'About App' }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: palette.white.light,
  },
  topSection: {
    paddingTop: 20,
  },
  themeSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 32,
    borderTopWidth: 1,
  },
  themeText: {
    fontFamily: FontFamily.primaryFont,
    fontSize: 16,
  },
});
