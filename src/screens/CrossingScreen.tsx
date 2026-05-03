// src/screens/CrossingScreen.tsx
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
import { ScreenContainer } from '@layout/ScreenContainer';

const CrossingScreen = () => {
  const books = booksData.items || [];
  const hasBooks = books.length > 0;

  return (
    <ScreenContainer>
      <Header
        title="Crossing"
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
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CrossingScreen;
