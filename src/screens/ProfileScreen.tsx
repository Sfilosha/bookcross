import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import Header from '@components/Header/Header';
import { ScreenContainer } from '@layout/ScreenContainer';
import { Button } from '@components/Button/Button';

const ProfileScreen = () => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <ScreenContainer>
      <Header
        title="Profile"
        suffix={
          <Button
            size="large"
            variant="tertiary"
            isIconButton={true}
            prefixName="gearSixFill"
            onPress={() => navigation.openDrawer()}
          />
        }
      />
      <Text>This is Profile page</Text>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({});

export default ProfileScreen;
