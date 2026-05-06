import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Header from '@components/Header/Header';
import { ScreenContainer } from '@layout/ScreenContainer';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@components/Icon/Icon';
import images from '@assets/images';
import { TextStyles } from '@theme/typography';
import { Colors } from '@theme/colors';

const AboutScreen = () => {
  const navigation = useNavigation();
  const scheme = useColorScheme();
  const t = scheme === 'dark' ? Colors.dark : Colors.light;

  return (
    <ScreenContainer>
      <Header
        title="About"
        preffix={
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="caretLeft" size={24}></Icon>
          </TouchableOpacity>
        }
      />
      <View
        style={{
          flex: 1,
          alignContent: 'center',
        }}
      >
        <Image source={images.appIcon} style={styles.image} />
        <Text style={[TextStyles.h1, styles.centered, styles.title]}>
          Book Crossing
        </Text>
        <Text style={[TextStyles.h3, styles.centered, styles.subtitle]}>
          Your Library’s Digital Compass. Never lose track of a story again.
        </Text>
        <Text
          style={[
            TextStyles.bodyM,
            styles.centered,
            { color: t.textSecondary },
          ]}
        >
          Book Crossing is designed for the modern bibliophile who believes that
          books are meant to be shared, but never forgotten. Inspired by the
          "Friendly Traveler" archetype, this app transforms the logistical task
          of book tracking into a seamless, calm experience. Whether your
          collection is on your shelf or in a friend’s hands, you’ll always know
          exactly where every journey began.
        </Text>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 32,
    marginTop: 8,
  },
  centered: {
    textAlign: 'left',
  },
  title: {
    paddingBottom: 8,
  },
  subtitle: {
    paddingBottom: 16,
  },
  body: {},
});

export default AboutScreen;
