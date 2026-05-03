// src/screens/HomeScreen.tsx
import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { EmptyState } from '@components/EmptyState/EmptyState';
import images from '@assets/images';
import BooksGrid from '@components/BooksGrid/BooksGrid';
import booksData from '@data/books.json';
import Header from '@components/Header/Header';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const books = booksData.items || [];
  // const hasBooks = books.length > 0;
  const hasBooks = false;

  return (
    <View
      style={[
        styles.container,
        {
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <Header
        title="My Library"
        suffix={
          <>
            <TouchableOpacity>
              <Image source={images.placeholder.icon} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={images.placeholder.icon} />
            </TouchableOpacity>
          </>
        }
      />
      {hasBooks ? (
        <BooksGrid books={books} />
      ) : (
        <View>
          <EmptyState
            title="It's nothing here"
            subtitle="Let's add first book"
            imagePath={images.empty.library}
            buttonText="Add a Book"
            onPress={() => console.log('Add book pressed')}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default HomeScreen;
